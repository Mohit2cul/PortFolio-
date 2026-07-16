import React from "react";

export function SkillTag({ skill }: { skill: string }) {
  const highlightedSkills = [
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "JavaScript",
    "MS Excel",
    "PostgreSQL"
  ];

  const isHighlighted = highlightedSkills.includes(skill);

  return (
    <span
      className={`text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 select-none lowercase border ${
        isHighlighted
          ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 shadow-sm shadow-indigo-500/5 hover:bg-indigo-500/20 hover:border-indigo-500/40"
          : "bg-white/5 border-white/5 text-neutral-400 hover:bg-white/10 hover:border-white/10 hover:text-neutral-200"
      }`}
    >
      {skill}
    </span>
  );
}
