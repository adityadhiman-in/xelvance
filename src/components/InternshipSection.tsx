
import { GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const InternshipSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Launch Your Career in Digital
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive internship program and gain hands-on experience 
            with real projects. Limited time offer at just ₹2,999!
          </p>
          <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto mb-8">
            <div className="text-4xl font-bold mb-2">₹2,999</div>
            <div className="text-blue-100">Complete Training Program</div>
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
  );
};
