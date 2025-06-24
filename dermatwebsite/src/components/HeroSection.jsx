import React from "react";
import { CheckCircle, Heart, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health is Our{" "}
              <span className="text-blue-600">Top Priority</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Providing comprehensive, compassionate healthcare with over 15
              years of experience in internal medicine. Your wellness journey
              starts here.
            </p>

            {/* Statistics */}
            {/* <div className="flex flex-col sm:flex-row gap-8 mb-10 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-1">
                  5000+
                </div>
                <div className="text-sm text-gray-500">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  98%
                </div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg flex items-center justify-center gap-2">
                Book Consultation
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Doctor Image with Badges */}
          <div className="flex-1 relative max-w-lg mx-auto lg:max-w-none">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1708271592746-b3ee80422a6e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Shreya Singh"
                  className="hidden sm:block w-full h-[500px] object-cover object-center"
                />
              </div>

              {/* Certified Badge */}
              {/* <div className="absolute top-6 right-6 bg-white rounded-full shadow-lg px-4 py-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Certified
                  </div>
                  <div className="text-xs text-gray-500">Board Certified</div>
                </div>
              </div> */}

              {/* 24/7 Care Badge */}
              {/* <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    24/7 Care
                  </div>
                  <div className="text-xs text-gray-500">Always Available</div>
                </div>
              </div> */}

              {/* Decorative Elements */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-12 h-12 bg-green-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
