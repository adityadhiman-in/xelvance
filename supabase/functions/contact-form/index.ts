
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  description?: string;
  message?: string;
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

    const formData: ContactFormData = await req.json();

    // Insert data into database
    const { data, error } = await supabaseClient
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          description: formData.description,
          message: formData.message,
        }
      ]);

    if (error) {
      console.error('Database error:', error);
      throw new Error('Failed to save contact submission');
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "Xelvance <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting Xelvance!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Thank you for reaching out!</h1>
          <p>Dear ${formData.name},</p>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your submission details:</h3>
            <p><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</p>
            <p><strong>Description:</strong> ${formData.description || 'Not provided'}</p>
            <p><strong>Message:</strong> ${formData.message || 'Not provided'}</p>
          </div>
          <p>Best regards,<br>The Xelvance Team</p>
          <p style="color: #64748b; font-size: 12px;">📞 +91 74660 05625 | 📧 info@xelvance.in</p>
        </div>
      `,
    });

    // Send notification email to admin
    await resend.emails.send({
      from: "Xelvance Contact Form <onboarding@resend.dev>",
      to: ["xelvance@gmail.com"],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">New Contact Form Submission</h1>
          <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</p>
          </div>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Project Description:</h3>
            <p>${formData.description || 'Not provided'}</p>
            <h3>Message:</h3>
            <p>${formData.message || 'Not provided'}</p>
          </div>
          <p>Please respond to this inquiry promptly.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in contact-form function:", error);
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
