
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CreditCard, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    projectTitle: "",
    paymentAmount: "",
    upiTransactionId: "",
    projectDescription: "",
    screenshot: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Upload screenshot to storage if provided
      let screenshotUrl = "https://xelvance.in/images_assets/payment_qr";
      
      const response = await fetch('/api/payment-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          screenshotUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit payment information');
      }

      setIsSubmitted(true);
      toast({
        title: "Payment Information Submitted!",
        description: "We'll review your payment and get back to you within 24 hours.",
      });
    } catch (error) {
      console.error('Error submitting payment form:', error);
      toast({
        title: "Error",
        description: "Failed to submit payment information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        screenshot: e.target.files[0]
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="pt-20 pb-16 flex items-center justify-center min-h-screen">
          <div className="max-w-md mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Submitted!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your payment submission. We'll review your details and get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Another Payment
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pay & Start Your <span className="text-green-600">Project</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Make your payment using the QR code below, then fill out the form with your project details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* QR Code Section */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment QR Code</h2>
                
                {/* QR Code Placeholder */}
                <img src="https://xelvance.in/images_assets/payment_qr" alt="" />
                

                <div className="bg-white rounded-lg p-6 text-left">
                  <h3 className="font-semibold text-gray-900 mb-4">Supported Payment Methods:</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xs">GPay</span>
                      </div>
                      <span>Google Pay</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">PP</span>
                      </div>
                      <span>PhonePe</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xs">PT</span>
                      </div>
                      <span>Paytm</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">UPI</span>
                      </div>
                      <span>Any UPI App</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> After making the payment, please fill out the form below with your project details and upload the payment screenshot.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Confirmation Form</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
                    <input
                      type="text"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount *</label>
                    <select
                      name="paymentAmount"
                      value={formData.paymentAmount}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    >
                      <option value="">Select amount</option>
                      <option value="2999">₹599 - Internship Program</option>
                      <option value="9999">₹15,999 - Digital Marketing</option>
                      <option value="15999">₹19,999 - Web Development</option>
                      <option value="25999">₹25,999 - Influencer Marketing</option>
                      <option value="49999">₹49,999 - App Development</option>
                      <option value="149">₹89 - Amazon Review</option>
                      <option value="129">₹79 - Flipkart Review</option>
                      <option value="249">₹149 - Review Bundle</option>
                      <option value="custom">Custom Amount</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">UPI Transaction ID *</label>
                    <input
                      type="text"
                      name="upiTransactionId"
                      value={formData.upiTransactionId}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Enter transaction ID from payment app"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Payment Screenshot *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      disabled={isSubmitting}
                      className="hidden"
                      id="screenshot-upload"
                    />
                    <label htmlFor="screenshot-upload" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-700">Click to upload</span> payment screenshot
                    </label>
                    {formData.screenshot && (
                      <p className="text-sm text-green-600 mt-2">✓ {formData.screenshot.name}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                    placeholder="Please describe your project requirements, timeline, and any specific features you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Submitting..." : "Submit Payment Info"}
                  <CheckCircle className="ml-2 w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  We'll review your payment and project details within 24 hours and get back to you with next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payment;
