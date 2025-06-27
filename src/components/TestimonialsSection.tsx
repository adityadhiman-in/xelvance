
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      text: "Xelvance transformed our digital presence completely. Their web development team delivered beyond our expectations with a stunning, fast-loading website."
    },
    {
      name: "Michael Chen",
      company: "EcomStore",
      rating: 5,
      text: "The ecommerce review service significantly boosted our product ratings. Professional, reliable, and results-driven approach that we highly recommend."
    },
    {
      name: "Priya Sharma",
      company: "FashionForward",
      rating: 5,
      text: "Their influencer marketing campaign doubled our social media engagement. The team knows how to connect brands with the right audience effectively."
    },
    {
      name: "David Wilson",
      company: "LocalBiz",
      rating: 5,
      text: "Outstanding digital marketing results! Our website traffic increased by 300% and we're ranking on the first page for our target keywords."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients who trusted us with their digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
