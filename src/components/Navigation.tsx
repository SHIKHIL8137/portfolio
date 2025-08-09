
import React, { useState, useContext } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        theme === "dark" ? "bg-black/20 border-white/10" : "bg-white/20 border-gray-300/20"
      } backdrop-blur-md border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Portfolio</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {["intro", "resume", "skills", "projects", "education"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                } px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors cursor-pointer`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-gray-200/50 hover:bg-gray-300/50"
              } transition-colors cursor-pointer`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full ${
                theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-gray-200/50 hover:bg-gray-300/50"
              } transition-colors cursor-pointer`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={theme === "dark" ? "text-white cursor-pointer" : "text-gray-900 cursor-pointer"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden ${theme === "dark" ? "bg-black/90" : "bg-white/90"} backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["intro", "resume", "skills", "projects", "education"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                } block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left transition-colors cursor-pointer`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
