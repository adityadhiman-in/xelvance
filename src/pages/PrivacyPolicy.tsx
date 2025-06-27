
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="text-green-900 font-medium">
                Last updated: December 2024
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-6">
              At Xelvance, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you 
              visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Project details and requirements</li>
              <li>Payment information and transaction details</li>
              <li>Communication preferences</li>
              <li>Business information for service delivery</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">We automatically collect certain information, including:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website information</li>
              <li>Device information and operating system</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Providing and delivering our services</li>
              <li>Communicating with you about projects and services</li>
              <li>Processing payments and managing accounts</li>
              <li>Improving our website and services</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-4">We do not sell your personal information. We may share your information in the following situations:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>With trusted service providers who assist in service delivery</li>
              <li>When required by law or legal proceedings</li>
              <li>To protect our rights, property, or safety</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this privacy policy, comply with legal obligations, resolve disputes, and 
              enforce our agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              Our website uses cookies and similar tracking technologies to improve your browsing experience. 
              Please refer to our Cookie Policy for detailed information about how we use cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites. We encourage you to review their privacy 
              policies before providing any personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your personal information 
              during such transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of any material 
              changes by posting the updated policy on our website with a new "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <ul className="list-none text-gray-600 mb-6 space-y-2">
              <li>Email: info@xelvance.in</li>
              <li>Phone: +91 74660 05625</li>
              <li>Address: India</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
            <p className="text-gray-600">
              By using our website and services, you consent to the collection and use of your 
              information as described in this privacy policy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
