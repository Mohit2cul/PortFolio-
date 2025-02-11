import React from "react";
import { SkillsSection } from "@/components/Skills/SkillsSection";
// import { WritingsSection } from "@/components/Writings/WritingsSection";
// import { Contributions } from "@/components/Conributions/Contributions";
import { ProjectsSection } from "@/components/Projects/ProjectSection";
// import { CurrentProject } from "@/components/Projects/CurrentProject";
import { Info } from "@/components/Info/Info";
import { SocialSection } from "@/components/Info/SocialSection";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className=" space-y-12">
        <Info />

        {/* <CurrentProject /> */}

        <ProjectsSection />

        {/* <Contributions /> */}

        {/* <WritingsSection /> */}

        <SkillsSection />

        <SocialSection />
      </div>
    </div>
  );
}
