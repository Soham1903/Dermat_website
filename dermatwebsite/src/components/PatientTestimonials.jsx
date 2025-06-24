import React from "react";
import { Star } from "lucide-react";

const PatientTestimonials = () => {
  const stats = [
    { value: "98%", label: "Patient Satisfaction" },
    { value: "5000+", label: "Patients Served" },
    { value: "15+", label: "Years Experience" },
    { value: "4.9", label: "Average Rating" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Health City, NC",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      text: "Dr. Shreya is absolutely wonderful! She takes the time to listen and explains everything thoroughly. I've never felt more comfortable with a healthcare provider. Her approach to preventive care has helped me stay healthy for years.",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Medical District, NC",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      text: "I've been seeing Dr. Shreya for my diabetes management for over 3 years. Her expertise and caring approach have made such a difference in my health outcomes. I highly recommend her for anyone looking for quality healthcare.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Wellness Plaza, NC",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      text: "Dr. Shreya's comprehensive approach to healthcare is exceptional. She doesn't just treat symptoms but focuses on overall wellness. The office staff is also incredibly professional and accommodating.",
    },
    {
      id: 4,
      name: "Robert Anderson",
      location: "Health City, NC",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      text: "After being referred by other doctors, Dr. Shreya was a breath of fresh air. She's thorough, compassionate, and genuinely cares about her patients' well-being. I couldn't be happier with my care.",
    },
    {
      id: 5,
      name: "Linda Thompson",
      location: "Medical District, NC",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      text: "Dr. Shreya has been managing my hypertension and heart health for several years. Her attention to detail and proactive approach have given me peace of mind. She's not just a doctor, she's a health partner.",
    },
    {
      id: 6,
      name: "David Kim",
      location: "Care Center, NC",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      text: "The level of care and professionalism at Dr. Shreya's practice is outstanding. From the moment you walk in, you feel valued and cared for. Dr. Shreya's expertise in internal medicine is truly impressive.",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Patients
          <span className="block text-blue-600">Are Saying</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what real patients have to say
          about their experience with Dr. Shreya and our healthcare practice.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Quote Icon */}
            <div className="text-6xl text-blue-100 font-serif leading-none mb-4">
              "
            </div>

            {/* Star Rating */}
            <div className="mb-4">
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {testimonial.text}
            </p>

            {/* Patient Info */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-blue-600 text-white rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience Quality Healthcare?
          </h3>
          <p className="mb-6 opacity-90">
            Join thousands of satisfied patients who trust Dr. Shreya with their
            health and wellness.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
            Schedule Your Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientTestimonials;
