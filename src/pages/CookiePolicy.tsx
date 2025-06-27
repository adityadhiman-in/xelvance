
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <p className="text-purple-900 font-medium">
                Last updated: December 2024
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They help us make our website work more efficiently and provide information about how the website is used.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To improve website functionality and user experience</li>
              <li>To provide personalized content and recommendations</li>
              <li>To ensure website security and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like 
              page navigation and access to secure areas of the website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting 
              information anonymously. This helps us improve our website's performance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
            <p className="text-gray-600 mb-6">
              These cookies enable enhanced functionality and personalization, such as remembering your preferences 
              and providing personalized content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              We may use third-party services that set cookies on our website, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing functionality</li>
              <li>Marketing and advertising partners</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Through your browser settings - most browsers allow you to block or delete cookies</li>
              <li>By using browser extensions that manage cookies</li>
              <li>Through our cookie consent banner (when available)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Settings</h2>
            <p className="text-gray-600 mb-4">
              You can set your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, some website features may not function properly without cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Popular Browser Cookie Settings:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
              <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Cookies and website data</li>
              <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
            <p className="text-gray-600 mb-6">
              We are committed to protecting your privacy and use minimal data collection practices. 
              The information collected through cookies is used solely for improving your experience 
              on our website and is not shared with third parties except as described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page 
              with an updated "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies, please contact us at info@xelvance.in 
              or +91 74660 05625.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
