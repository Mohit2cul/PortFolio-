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
  ];

  return (
    <span
      className={`md:text-base text-sm ${
        highlightedSkills.includes(skill) && "text-indigo-500"
      } bg-neutral-900 border lowercase hover:text-indigo-500 transition-colors duration-300 border-neutral-700 px-4 py-2 text-neutral-300 flex items-center justify-center select-none`}
    >
      {skill}
    </span>
  );
}
