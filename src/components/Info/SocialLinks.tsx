import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function SocialLinks() {
  const socials = [
    {
      link: "https://github.com/Mohit2cul",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/kshitij-varshney-34908a326/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      link: "https://x.com/Var45678Kshitij",
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter / X",
    },
    {
      link: "https://www.instagram.com/kshitij_v_/",
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
    },
  ];

  return (
    <div className="py-2">
      <div className="flex gap-4">
        {socials.map((social) => (
          <a
            key={social.link}
            target="_blank"
            className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/5 text-neutral-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300 shadow-sm"
            rel="noreferrer"
            href={social.link}
            title={social.label}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
