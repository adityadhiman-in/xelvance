
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Target, BarChart3, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InfluencerMarketing = () => {
  const features = [
    {
      icon: Users,
      title: "Real Influencer Network",
      description: "Connect with authentic macro and micro influencers in your niche"
    },
    {
      icon: Target,
      title: "Strategy Creation",
      description: "Comprehensive campaign strategies tailored to your brand goals"
    },
    {
      icon: Megaphone,
      title: "Content Planning",
      description: "Professional content creation and campaign execution"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed campaign tracking and ROI measurement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <span className="text-pink-600 font-semibold text-sm">✨ NEW SERVICE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Influencer <span className="text-pink-600">Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Leverage the power of authentic influencer partnerships to amplify your brand reach and drive meaningful engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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

      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Campaign Types We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Product Barter</h3>
                <p>Exchange products for authentic reviews and content creation</p>
              </div>
              <div className="bg-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Paid Campaigns</h3>
                <p>Sponsored content with guaranteed reach and engagement</p>
              </div>
              <div className="bg-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Long-term Partnerships</h3>
                <p>Build lasting relationships with brand ambassadors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Launch Your Influencer Campaign
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to tap into the power of influencer marketing? Let's create campaigns that drive real results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Launch Influencer Campaign
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfluencerMarketing;
