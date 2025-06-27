
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Smartphone, Palette, Settings, LifeBuoy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AppDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Native Android apps with optimal performance and user experience"
    },
    {
      icon: Palette,
      title: "Custom UI/UX",
      description: "Beautiful, intuitive interfaces designed for your users"
    },
    {
      icon: Settings,
      title: "Custom Features",
      description: "Tailored functionality that meets your specific business needs"
    },
    {
      icon: LifeBuoy,
      title: "Maintenance & Updates",
      description: "Ongoing support to keep your app running smoothly"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              App <span className="text-green-600">Development</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your ideas into powerful mobile applications that engage users and drive business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
            Start Your App Development Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to bring your app idea to life? Let's discuss your requirements and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Your App Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopment;
