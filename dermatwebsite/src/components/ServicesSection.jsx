import React from "react";
import { Sparkles, Scissors, Hand, Zap, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Skin Treatments",
      description:
        "Advanced skin care solutions for acne, pigmentation, anti-aging, and skin brightening treatments.",
      features: [
        "Acne & Scars",
        "Pigmentation / Dullness",
        "Anti-aging",
        "Brightening / Glow Therapy",
      ],
      color: "blue",
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Hair & Scalp",
      description:
        "Comprehensive hair and scalp treatments including hair fall solutions and medical restoration.",
      features: [
        "Hair Fall & Thinning",
        "PRP for Hair Regrowth",
        "Scalp Infections / Dandruff",
        "Medical Hair Restoration",
      ],
      color: "green",
    },
    {
      icon: <Hand className="w-6 h-6" />,
      title: "Nail Concerns",
      description:
        "Professional nail care and treatment for various nail conditions and infections.",
      features: [
        "Infections (Fungal, Bacterial)",
        "Nail Discoloration & Texture Issues",
        "Ingrown or Painful Nails",
        "Professional Nail Care",
      ],
      color: "purple",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cosmetic Procedures",
      description:
        "Advanced cosmetic treatments including laser procedures and minor dermatological surgeries.",
      features: [
        "Chemical Peels",
        "Laser Hair Reduction",
        "Laser for Pigmentation",
        "Skin Tags / Mole Removal",
        "Minor Dermatological Surgeries",
      ],
      color: "pink",
    },
  ];

  const expertiseAreas = [
    {
      name: "Skin Treatments",
      icon: <Sparkles className="w-4 h-4" />,
      color: "text-blue-600",
    },
    {
      name: "Hair & Scalp",
      icon: <Scissors className="w-4 h-4" />,
      color: "text-green-600",
    },
    {
      name: "Nail Concerns",
      icon: <Hand className="w-4 h-4" />,
      color: "text-purple-600",
    },
    {
      name: "Cosmetic Procedures",
      icon: <Zap className="w-4 h-4" />,
      color: "text-pink-600",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      pink: "bg-pink-100 text-pink-600",
    };
    return colorMap[color] || "bg-blue-100 text-blue-600";
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Medical
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-6">
            Services & Specialties
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From preventive care to chronic disease management, we provide
            personalized healthcare solutions tailored to your unique needs and
            health goals.
          </p>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-12">
          <h4 className="text-center text-lg font-semibold text-gray-900 mb-6">
            Areas of Expertise
          </h4>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-wrap justify-center gap-4">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full border-2 border-gray-100 hover:border-gray-200 transition-colors duration-200 ${area.color}`}
                >
                  {area.icon}
                  <span className="font-medium text-sm">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(
                  service.color
                )}`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Services & Solutions
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive range of medical and cosmetic services are
              designed to address your specific health and aesthetic needs with
              the highest standard of care.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
