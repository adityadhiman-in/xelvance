
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PaymentFormData {
  name: string;
  email: string;
  mobile: string;
  projectTitle: string;
  paymentAmount: string;
  upiTransactionId: string;
  projectDescription: string;
  screenshotUrl?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const formData: PaymentFormData = await req.json();

    // Insert data into database
    const { data, error } = await supabaseClient
      .from('payment_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          project_title: formData.projectTitle,
          payment_amount: formData.paymentAmount,
          upi_transaction_id: formData.upiTransactionId,
          project_description: formData.projectDescription,
          screenshot_url: formData.screenshotUrl,
        }
      ]);

    if (error) {
      console.error('Database error:', error);
      throw new Error('Failed to save payment submission');
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "Xelvance <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Payment Information Received - Xelvance",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #059669;">Payment Information Received!</h1>
          <p>Dear ${formData.name},</p>
          <p>We have successfully received your payment information and project details. Our team will review everything and get back to you within 24 hours.</p>
          <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your Project Details:</h3>
            <p><strong>Project Title:</strong> ${formData.projectTitle}</p>
            <p><strong>Payment Amount:</strong> ${formData.paymentAmount}</p>
            <p><strong>Transaction ID:</strong> ${formData.upiTransactionId}</p>
            <p><strong>Mobile:</strong> ${formData.mobile}</p>
          </div>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Project Description:</h3>
            <p>${formData.projectDescription}</p>
          </div>
          <p><strong>Next Steps:</strong></p>
          <ol>
            <li>We will verify your payment within 2-4 hours</li>
            <li>Our project manager will contact you to discuss requirements</li>
            <li>We'll send you a detailed project timeline</li>
            <li>Development will begin once everything is confirmed</li>
          </ol>
          <p>Thank you for choosing Xelvance!</p>
          <p>Best regards,<br>The Xelvance Team</p>
          <p style="color: #64748b; font-size: 12px;">📞 +91 74660 05625 | 📧 info@xelvance.in</p>
        </div>
      `,
    });

    // Send notification email to admin
    await resend.emails.send({
      from: "Xelvance Payment Form <onboarding@resend.dev>",
      to: ["xelvance@gmail.com"],
      subject: `🚀 New Payment Submission - ${formData.projectTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">🚀 New Payment Submission Received!</h1>
          <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Client Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Mobile:</strong> ${formData.mobile}</p>
          </div>
          <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Payment Information:</h3>
            <p><strong>Project Title:</strong> ${formData.projectTitle}</p>
            <p><strong>Amount:</strong> ${formData.paymentAmount}</p>
            <p><strong>UPI Transaction ID:</strong> ${formData.upiTransactionId}</p>
          </div>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Project Description:</h3>
            <p>${formData.projectDescription}</p>
          </div>
          <p style="color: #dc2626; font-weight: bold;">⚡ Action Required: Please verify the payment and contact the client within 24 hours.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in payment-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
