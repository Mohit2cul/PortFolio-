import React from "react";
import { H3Heading } from "../H3Heading";
import { Project } from "@/app/Data/data";
import Description from "../Description";
import { ArrowUpRight } from "lucide-react";

interface ProjectTileProps {
  project: Project;
}

export default function ProjectTile({ project }: ProjectTileProps) {
  return (
    <a
      className="block glass-card rounded-xl p-5 hover:border-indigo-500/30 transition-all duration-300"
      key={project.id}
      href={project.liveLink ? project.liveLink : project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-1">
          <H3Heading className="text-lg font-bold text-white group-hover:text-indigo-400">
            {project.title}
          </H3Heading>
          <Description>{project.description}</Description>
        </div>
        <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-neutral-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-300 flex-shrink-0">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
}
