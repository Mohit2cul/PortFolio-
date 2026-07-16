import React from "react";
import { H3Heading } from "../H3Heading";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/app/Data/data";
import { SkillTag } from "../Skills/SkillTag";

export default function ProjectCard(project: Project) {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6 flex flex-col justify-between">
      <div className="space-y-4">
        <a
          href={project.liveLink ? project.liveLink : project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start justify-between gap-4 group"
        >
          <H3Heading className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-300">
            {project.title}
          </H3Heading>
          <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:text-indigo-400 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </a>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">{project.description}</p>
        {project.initiator && (
          <div className="text-xs md:text-sm text-neutral-400 font-medium pt-2">
            <span>In Collaboration with: </span>
            <a 
              href={project.initiator.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2 decoration-indigo-400/30 font-semibold"
            >
              {project.initiator.name}
            </a>
          </div>
        )}
      </div>

      <div className="space-y-4 pt-4 border-t border-white/5">
        {project.learnings && project.learnings.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400/80 mb-2">Key Learnings</h4>
            <ul className="space-y-1.5">
              {project.learnings.map((learning, index) => (
                <li className="text-xs md:text-sm text-neutral-400 flex items-start gap-2" key={index}>
                  <span className="text-indigo-500 mt-1 select-none">&bull;</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400/80 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((technology, index) => (
                <SkillTag key={index} skill={technology} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
