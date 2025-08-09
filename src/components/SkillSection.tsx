import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiAmazon, SiGooglecloud, SiDocker,
  SiFirebase, SiRedux, SiPostman, SiGit, SiGithub, SiGraphql, SiDjango,SiNestjs,SiNginx,SiAmazonec2,
  SiWebrtc, SiSocketdotio, SiRazorpay, SiNpm,
} from "react-icons/si";
import { FaProjectDiagram, FaSitemap, FaDatabase, FaCubes, FaNetworkWired, FaObjectGroup,FaReact } from 'react-icons/fa';
import { MdArchitecture } from 'react-icons/md';
import { user } from "../utils/data";

const skillIcons: Record<string, React.ReactNode> = {
  "React.js": <SiReact />,
  "JavaScript": <SiJavascript />,
  "JavaScript ES6+": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "Bootstrap": <SiBootstrap />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "MySQL": <SiMysql />,
  "AWS": <SiAmazon />,
  "GCP": <SiGooglecloud />,
  "Docker": <SiDocker />,
  "Firebase": <SiFirebase />,
  "Redux": <SiRedux />,
  "Postman": <SiPostman />,
  "Git": <SiGit />,
  "GitHub": <SiGithub />,
  "GraphQL": <SiGraphql />,
  "Django": <SiDjango />,
  "Nest.js":<SiNestjs />,
  "Nginx":<SiNginx/>,
  "EC2":<SiAmazonec2/>,
  "WebRTC":<SiWebrtc/>,
  "Socket.io":<SiSocketdotio/>,
  "Razorpay":<SiRazorpay/>,
  "npm":<SiNpm/>,
  "Microservices": <FaProjectDiagram />,
  "MVC Pattern": <FaSitemap />,
  "Clean Architecture": <MdArchitecture />,
  "Repository Pattern": <FaDatabase />,
  "SOLID Principles": <FaCubes />,
  "Data Structures and Algorithms": <FaNetworkWired />,
  "OOP": <FaObjectGroup />,
  "Context API":<FaReact/>
};


const SkillsSection: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const {technicalSkills:skills} = user
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
            theme === "dark"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-purple-300 to-slate-200"
              : "text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-500 to-gray-900"
          }`}
        >
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className={`relative ${
                theme === "dark" ? "bg-white/5 border-white/10" : "bg-gray-100/50 border-gray-300/20"
              } backdrop-blur-sm rounded-lg p-6 border`}
            >
              <h3 className={`text-xl font-semibold mb-4 capitalize ${theme === "dark" ? "text-purple-300" : "text-purple-500"}`}>
                {category}
              </h3>
              <ul className="space-y-3">
                {skillList.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className={`text-xl ${theme === "dark" ? "text-white" : "text-purple-500"}`}>{skillIcons[skill] || "💡"}</span>
                    <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
