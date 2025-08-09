import React, { useContext } from "react";
import { ExternalLink } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { user } from "../utils/data";

const ProjectsSection: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const projects = user.professionalProjects.map((p) => ({
    name: p.name,
    date: p.date,
    description: p.description.join(" "),
    skills: p.tech,
    image: p.image,
    links: {
      live: p.links?.live,
      frontend: p.links?.frontendRepo,
      backend: p.links?.backendRepo,
      github: p.links?.github,
    },
  }));

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
            theme === "dark"
              ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-purple-300 to-slate-200"
              : "text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-500 to-gray-900"
          }`}
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`relative ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-gray-100/50 border-gray-300/20"
              } backdrop-blur-sm rounded-lg p-6 border hover:bg-white/10 transition-all group overflow-hidden`}
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                    : "bg-gradient-to-r from-purple-300/10 to-blue-300/10"
                } animate-pulse pointer-events-none`}
              ></div>

              {/* Header */}
              <div className="relative flex flex-col items-center mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 md:h-40 object-contain rounded max-w-full"
                />
                <span
                  className={`mt-3 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } text-sm`}
                >
                  {project.date}
                </span>
              </div>

              <h3
                className={`text-xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } mb-3`}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>{project.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 ${
                      theme === "dark"
                        ? "bg-purple-600/20 text-purple-300 border-purple-600/30"
                        : "bg-purple-400/20 text-purple-500 border-purple-400/30"
                    } rounded-full text-sm border`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-4 relative z-10">
                {project.links.live && project.links.live !== "" && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer pointer-events-auto ${
                      theme === "dark"
                        ? "bg-green-600/20 text-green-300 border-green-600/30 hover:bg-green-600/30"
                        : "bg-green-400/20 text-green-600 border-green-400/30 hover:bg-green-400/30"
                    }`}
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.links.frontend && project.links.frontend !== "" && (
                  <a
                    href={project.links.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer pointer-events-auto ${
                      theme === "dark"
                        ? "bg-blue-600/20 text-blue-300 border-blue-600/30 hover:bg-blue-600/30"
                        : "bg-blue-400/20 text-blue-600 border-blue-400/30 hover:bg-blue-400/30"
                    }`}
                  >
                    Frontend
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.links.backend && project.links.backend !== "" && (
                  <a
                    href={project.links.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer pointer-events-auto ${
                      theme === "dark"
                        ? "bg-yellow-600/20 text-yellow-300 border-yellow-600/30 hover:bg-yellow-600/30"
                        : "bg-yellow-400/20 text-yellow-600 border-yellow-400/30 hover:bg-yellow-400/30"
                    }`}
                  >
                    Backend
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.links.github && project.links.github !== "" && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer pointer-events-auto ${
                      theme === "dark"
                        ? "bg-gray-600/20 text-gray-300 border-gray-600/30 hover:bg-gray-600/30"
                        : "bg-gray-400/20 text-gray-600 border-gray-400/30 hover:bg-gray-400/30"
                    }`}
                  >
                    GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;