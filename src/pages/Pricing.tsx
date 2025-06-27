
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Web Development",
      price: "₹15,999",
      description: "Professional website development",
      features: [
        "Responsive Design",
        "5-10 Pages",
        "SEO Optimization",
        "1 Year Domain & Hosting",
        "SSL Certificate",
        "Mobile Optimization",
        "Contact Forms",
        "Basic Analytics"
      ]
    },
    {
      name: "App Development",
      price: "₹49,999",
      description: "Custom Android application",
      popular: true,
      features: [
        "Native Android App",
        "Custom UI/UX Design",
        "Database Integration",
        "Admin Panel",
        "Push Notifications",
        "App Store Submission",
        "3 Months Support",
        "Source Code Included"
      ]
    },
    {
      name: "Digital Marketing",
      price: "₹9,999",
      description: "Monthly marketing package",
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Content Creation",
        "Google My Business",
        "Monthly Reports",
        "Keyword Tracking",
        "Competitor Analysis",
        "Performance Analytics"
      ]
    }
  ];

  const addOnServices = [
    { name: "Influencer Marketing Campaign", price: "₹25,999" },
    { name: "Amazon Review (Single)", price: "₹149" },
    { name: "Flipkart Review (Single)", price: "₹129" },
    { name: "Review Bundle (Both Platforms)", price: "₹249" },
    { name: "Internship Training Program", price: "₹2,999" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent <span className="text-blue-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan for your business needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <div className="text-sm text-gray-500">Starting from</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-On <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your package with our specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Special Internship Offer
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our comprehensive internship program and gain hands-on experience with real projects. Limited time offer!
            </p>
            <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto mb-8">
              <div className="text-4xl font-bold mb-2">₹2,999</div>
              <div className="text-blue-100">Complete Training Program</div>
              <div className="text-white mt-4">
                ✓ Real Project Experience<br/>
                ✓ Industry Mentorship<br/>
                ✓ Certificate of Completion<br/>
                ✓ Portfolio Development
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
