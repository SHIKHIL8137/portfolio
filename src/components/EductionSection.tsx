import React, { useContext } from "react";
import { Calendar } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { user } from "../utils/data";

const EducationSection: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
            theme === "dark"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-purple-300 to-slate-200"
              : "text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-500 to-gray-900"
          }`}
        >
          Education
        </h2>
        <div className="space-y-8">
          {user.education.map((edu, index) => (
            <div
              key={index}
              className={`relative ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-gray-100/50 border-gray-300/20"
              } backdrop-blur-sm rounded-lg p-6 border overflow-hidden`}
            >
              <div
                className={`absolute inset-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                    : "bg-gradient-to-r from-purple-300/10 to-blue-300/10"
                } animate-pulse`}
              ></div>
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className={
                      theme === "dark"
                        ? "text-purple-300"
                        : "text-purple-500"
                    }
                  >
                    {edu.institution}
                  </p>
                </div>
                <div
                  className={`flex items-center ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } mt-2 md:mt-0`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
