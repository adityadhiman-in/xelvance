
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Star, ShoppingCart, Users, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceReviews = () => {
  const features = [
    {
      icon: Star,
      title: "Verified Reviews",
      description: "Authentic Amazon and Flipkart reviews from real customers"
    },
    {
      icon: ShoppingCart,
      title: "Product Purchase",
      description: "We handle the complete purchase and review process"
    },
    {
      icon: Users,
      title: "Real User Network",
      description: "Reviews from genuine users and verified purchasers"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor review impact on sales and product rankings"
    }
  ];

  const pricing = [
    {
      platform: "Amazon",
      price: "₹149",
      features: ["Verified Purchase", "Detailed Review", "5-Star Rating", "Photo Upload"]
    },
    {
      platform: "Flipkart",
      price: "₹129",
      features: ["Verified Purchase", "Detailed Review", "5-Star Rating", "Photo Upload"]
    },
    {
      platform: "Bundle Deal",
      price: "₹249",
      features: ["Both Platforms", "Priority Processing", "Detailed Review", "Photo + Video"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full mb-6">
              <span className="text-orange-600 font-semibold text-sm">✨ NEW SERVICE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ecommerce <span className="text-yellow-600">Review Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Boost your product ratings and sales with authentic, verified reviews from real customers on Amazon and Flipkart.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent <span className="text-yellow-600">Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, per-review pricing with no hidden costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.platform}</h3>
                  <div className="text-4xl font-bold text-yellow-600 mb-6">{plan.price}<span className="text-lg text-gray-500">/review</span></div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Submit Product</h3>
                <p className="text-sm">Share your product link and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Purchase & Review</h3>
                <p className="text-sm">Our network purchases and reviews your product</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Quality Content</h3>
                <p className="text-sm">Detailed reviews with photos and ratings</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Track Results</h3>
                <p className="text-sm">Monitor improved ratings and sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Boost Your Product Reviews Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to improve your product ratings and increase sales? Let's get started with authentic reviews.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Boost Product Reviews
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceReviews;
