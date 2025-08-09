import React, { useContext } from "react";
import { Download } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import {user} from '../utils/data'

const IntroSection: React.FC = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center mt-25 max-w-4xl">
        
        <div className="relative mb-8 mx-auto w-40 h-40 md:w-48 md:h-48">
          <div
            className={`absolute inset-0 rounded-full border-4 ${
              theme === "dark" ? "border-purple-500/50" : "border-purple-300/50"
            } animate-pulse`}
          ></div>
          <div
            className={`absolute inset-2 rounded-full border-2 ${
              theme === "dark" ? "border-blue-500/50" : "border-blue-300/50"
            } animate-pulse`}
            style={{ animationDelay: "1s" }}
          ></div>
          <img
            src={user?.profileImg}
            alt={user?.name}
            className="w-full h-full rounded-full object-cover shadow-lg"
          />
          <div
            className={`absolute inset-0 rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                : "bg-gradient-to-br from-purple-300/20 to-blue-300/20"
            }`}
          ></div>
        </div>

        {/* Name */}
        <h1
          className={`text-6xl md:text-6xl font-bold mb-6 inline-block ${
            theme === "dark"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-purple-300 to-slate-200"
              : "text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-500 to-gray-900"
          }`}
        >
          {user?.name.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-100 animate-fade-letter" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <h2
          className={`text-2xl md:text-3xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } mb-8`}
        >
          {user?.designation}
        </h2>

        {/* Description */}
        <p
          className={`text-lg md:text-xl ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          } mb-12 max-w-2xl mx-auto leading-relaxed`}
        >
         {user?.summery}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className={`px-8 py-3 ${
              theme === "dark"
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-purple-500 hover:bg-purple-600"
            } text-white rounded-full font-medium transition-all transform hover:scale-105 cursor-pointer`}
          >
            View My Work
          </button>

          <button
            className={`px-8 py-3 bg-transparent border-2 ${
              theme === "dark"
                ? "border-white/30 hover:border-white/50 hover:bg-white/10 text-white"
                : "border-gray-400/50 hover:border-gray-500/70 hover:bg-gray-200/20 text-gray-900"
            } rounded-full font-medium transition-all flex items-center justify-center cursor-pointer`}
            onClick={() => {
              window.open(user?.resume, "_blank", "noopener,noreferrer");
            }}
          >
            <Download className="inline-block w-4 h-4 mr-2" />
            Download Resume
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default IntroSection;
