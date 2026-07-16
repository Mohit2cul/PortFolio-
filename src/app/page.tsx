import React from "react";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { ProjectsSection } from "@/components/Projects/ProjectSection";
import { Info } from "@/components/Info/Info";
import { SocialSection } from "@/components/Info/SocialSection";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-2">
      <div className="space-y-16">
        <Info />

        <ProjectsSection />

        <SkillsSection />

        <SocialSection />
      </div>
    </div>
  );
}
