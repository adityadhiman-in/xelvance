
import { Monitor, Smartphone, TrendingUp, Users, Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Responsive, modern websites with fast loading and SEO optimization",
      href: "/web-development"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Custom Android apps with smooth UI/UX and ongoing maintenance",
      href: "/app-development"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO, social media growth, and comprehensive content marketing",
      href: "/digital-marketing"
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with real influencers and create impactful campaigns",
      href: "/influencer-marketing",
      isNew: true
    },
    {
      icon: Star,
      title: "Ecommerce Reviews",
      description: "Verified Amazon/Flipkart reviews through real users",
      href: "/ecommerce-reviews",
      isNew: true
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
            >
              {service.isNew && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  NEW
                </div>
              )}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
