import React, { useContext } from "react";
import { Github, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react"; // Using MessageCircle for WhatsApp icon, you can replace if you have a WhatsApp icon
import type { LucideProps } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { user } from "../utils/data";

type IconComponent = React.ComponentType<LucideProps>;

const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);


  const socialLinks: { icon: IconComponent; href: string; label: string }[] = [
    { icon: Github, href: user.contact.github, label: "GitHub" },
    { icon: Linkedin, href: user.contact.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Mail,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${user.contact.email}`,
      label: "Email",
    },

    {
      icon: MessageCircle,
      href: `https://wa.me/${user?.contact?.phone}`,
      label: "WhatsApp",
    },
  ];

  return (
    <footer
      className={`py-12 px-4 ${
        theme === "dark" ? "border-white/10" : "border-gray-300/20"
      } border-t`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 ${
                theme === "dark"
                  ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20"
                  : "bg-gray-100/50 hover:bg-gray-200/50 border-gray-300/20 hover:border-gray-400/30"
              } rounded-full border transition-all group`}
              aria-label={label}
            >
              <Icon
                className={`w-6 h-6 ${
                  theme === "dark"
                    ? "text-gray-400 group-hover:text-white"
                    : "text-gray-600 group-hover:text-gray-900"
                } transition-colors`}
              />
            </a>
          ))}
        </div>
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
          © {new Date().getFullYear()} {user.name}. All rights reserved. Built
          with React and passion for the cosmos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
