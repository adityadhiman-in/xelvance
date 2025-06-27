
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrendingUp, Search, Share2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const services = [
    {
      icon: Search,
      title: "SEO & Keyword Ranking",
      description: "Improve your search rankings with comprehensive on-page and off-page optimization"
    },
    {
      icon: Share2,
      title: "Social Media Growth",
      description: "Build your brand presence across all major social media platforms"
    },
    {
      icon: TrendingUp,
      title: "Content Marketing",
      description: "Engaging content strategies that drive traffic and conversions"
    },
    {
      icon: MapPin,
      title: "Google My Business",
      description: "Local SEO optimization to help customers find your business"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital <span className="text-orange-600">Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Amplify your online presence and drive targeted traffic with our comprehensive digital marketing strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get Digital Growth Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to boost your online presence? Let's create a digital marketing strategy that delivers results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get Digital Growth
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
