import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import ProjectCard from "@/components/Projects/ProjectCard";
import { collabProjectsData } from "@/app/Data/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collab Projects | Kshitij Varshney",
  description: "Collaborative projects I have worked on",
};

export default function CollabPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen space-y-8">
      <div className="flex text-4xl font-semibold items-center gap-2">
        <HyperText className="capitalize">Collab Projects</HyperText>
      </div>
      <div className="mt-6 space-y-10">
        {collabProjectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
