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
import { Helmet } from "react-helmet";

const Portfolio: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Helmet>
        <title>Shikhil K S | Full Stack MERN Developer</title>
        <meta
          name="description"
          content="Portfolio of Shikhil K S, a Full Stack MERN Developer skilled in MongoDB, Express.js, React.js, Node.js, cloud deployments, and building scalable web apps."
        />
        <meta
          name="keywords"
          content="MERN Developer, Full Stack Developer, React.js, Node.js, MongoDB, Express.js, JavaScript, TypeScript, Web Developer Portfolio"
        />
        <meta name="author" content="Shikhil K S" />

        <meta
          property="og:title"
          content="Shikhil K S | Full Stack MERN Developer"
        />
        <meta
          property="og:description"
          content="Check out my portfolio showcasing projects like iDeal E-commerce, DevConnect, and more."
        />
        <meta
          property="og:image"
          content="https://shikhil-ks-portfolio.vercel.app/assets/cropped-CikT6qoB.png"
        />
        <meta
          property="og:url"
          content="https://shikhil-ks-portfolio.vercel.app"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shikhil K S | Full Stack MERN Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Shikhil K S, Full Stack MERN Developer skilled in scalable applications."
        />
        <meta
          name="twitter:image"
          content="https://shikhil-ks-portfolio.vercel.app/assets/cropped-CikT6qoB.png"
        />
      </Helmet>
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
