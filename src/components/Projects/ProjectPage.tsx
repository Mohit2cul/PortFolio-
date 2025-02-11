import React from "react";
import { HyperText } from "../magicui/hyper-text";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/app/Data/data";
import { Star } from "../Star";

export default function ProjectPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="flex text-4xl font-semibold items-center gap-2">
        <Star />
        <HyperText>projects</HyperText>
      </div>
      <div className="mt-6 space-y-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
