import React from "react";
import { HyperText } from "../magicui/hyper-text";
import { skillsData } from "@/app/Data/data";
import { SkillTag } from "./SkillTag";

export function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="flex text-4xl font-semibold items-center gap-2">
        <HyperText className="capitalize">Skills & Technologies</HyperText>
      </div>
      <div className="mt-8 flex flex-wrap gap-1">
        {skillsData.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
