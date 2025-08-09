import React, { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import AnimatedSpaceBackground from "./components/AnimatedSpaceBackground";
import Navigation from "./components/Navigation";
import IntroSection from "./components/InserSection";
import ResumeSection from "./components/ResumeSectiom";
import SkillsSection from "./components/SkillSection";
import EducationSection from "./components/EductionSection";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/FooterSection";


const Portfolio: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatedSpaceBackground>
        <Navigation />
        <IntroSection />
        <ResumeSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <Footer />
      </AnimatedSpaceBackground>
    </ThemeContext.Provider>
  );
};

export default Portfolio;