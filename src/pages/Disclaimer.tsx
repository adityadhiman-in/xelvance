
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-900 font-medium">
                Last updated: December 2024
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-600 mb-6">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
              Xelvance excludes all representations, warranties, conditions and terms (whether express or implied by statute, 
              common law or otherwise) other than those expressly set out in the Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Advice</h2>
            <p className="text-gray-600 mb-6">
              We do not provide legal, financial, accounting, or professional business advice. The content on this website 
              is for general informational purposes only. You should consult with appropriate professionals for advice 
              specific to your business situation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Delivery</h2>
            <p className="text-gray-600 mb-6">
              All projects and services are subject to client approval and performance scope as outlined in individual 
              project agreements. Delivery timelines are estimates and may vary based on project complexity, client 
              feedback, and revision requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              Our services may involve third-party platforms, tools, or services (including but not limited to hosting 
              providers, social media platforms, e-commerce platforms, and review platforms). We are not responsible 
              for the availability, functionality, or policies of these third-party services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results and Performance</h2>
            <p className="text-gray-600 mb-6">
              While we strive to deliver excellent results, we cannot guarantee specific outcomes, rankings, traffic 
              increases, sales improvements, or other performance metrics. Results may vary based on various factors 
              including market conditions, competition, and client implementation of recommendations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Review and Marketing Services</h2>
            <p className="text-gray-600 mb-6">
              Our review and marketing services comply with platform terms of service and applicable laws. Clients 
              are responsible for ensuring their use of our services complies with relevant platform policies and 
              legal requirements in their jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, Xelvance shall not be liable for any direct, indirect, incidental, 
              special, consequential, or punitive damages arising out of or relating to the use of our services or website, 
              even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Services</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify, suspend, or discontinue any aspect of our service at any time. We may 
              also impose limits on certain features or restrict access to parts of the service without notice or liability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about this disclaimer, please contact us at info@xelvance.in or +91 74660 05625.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
