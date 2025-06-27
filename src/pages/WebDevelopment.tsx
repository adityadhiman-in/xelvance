
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Monitor, Zap, Search, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const features = [
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Beautiful, modern websites that work perfectly on all devices"
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for speed with lightning-fast performance"
    },
    {
      icon: Search,
      title: "SEO Ready",
      description: "Built with SEO best practices for better search rankings"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Advanced security measures and reliable hosting setup"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Web <span className="text-blue-600">Development</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create stunning, responsive websites that drive results and engage your audience with modern design and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a custom quote for your web development project and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Ask for Pricing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/payment"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Start Project Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
