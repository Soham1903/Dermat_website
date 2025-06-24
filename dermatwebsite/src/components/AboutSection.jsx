import React from "react";
import {
  GraduationCap,
  Award,
  Users,
  Clock,
  CheckCircle,
  Shield,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white py-0 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content - Doctor Image */}
          <div className="flex-1 max-w-lg mx-auto lg:max-w-none">
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://sdmntprwestus.oaiusercontent.com/files/00000000-6f90-6230-998c-482a2eb480de/raw?se=2025-06-24T18%3A25%3A59Z&sp=r&sv=2024-08-04&sr=b&scid=86f3f0b5-d4e5-593a-a1e6-02715b64a87c&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-24T14%3A38%3A52Z&ske=2025-06-25T14%3A38%3A52Z&sks=b&skv=2024-08-04&sig=dbaYkT%2Bws%2BHaWSo3wq12KeDFXjyNBKafyhPlnF0DJQw%3D"
                  alt="Dr. Shreya Singh"
                  className="w-full h-[700px] object-cover object-center"
                />
              </div>

              {/* Board Certified Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full shadow-lg px-4 py-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Certified
                  </div>
                  <div className="text-xs text-gray-500">Board Certified</div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-full shadow-lg px-4 py-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    15+ Years
                  </div>
                  <div className="text-xs text-gray-500">Experience</div>
                </div>
              </div>

              {/* Trusted Badge */}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Dr. Shreya
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-blue-600 mb-6">
              Your Trusted Healthcare Partner
            </h3>

            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience in internal medicine, Dr.
                Shreya has dedicated her career to providing comprehensive,
                patient-centered care. Her approach combines evidence-based
                medicine with compassionate treatment, ensuring each patient
                receives personalized attention.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Specializing in preventive care, chronic disease management, and
                wellness optimization, Dr. Shreya believes in empowering
                patients through education and collaborative treatment planning.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Medical Education
                  </h4>
                  <p className="text-sm text-gray-600">
                    MD from Johns Hopkins University School of Medicine
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Board Certified
                  </h4>
                  <p className="text-sm text-gray-600">
                    American Board of Internal Medicine
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Patient Care
                  </h4>
                  <p className="text-sm text-gray-600">
                    Over 5,000 patients successfully treated
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Experience
                  </h4>
                  <p className="text-sm text-gray-600">
                    15+ years in internal medicine practice
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-3">
                My Philosophy
              </h4>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "Healthcare is not just about treating illness—it's about
                building relationships, fostering trust, and empowering patients
                to take control of their health journey."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
