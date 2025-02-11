import { skillsData } from "@/app/Data/data";
import React from "react";
import { SkillTag } from "./SkillTag";
import { H2Heading } from "../H2Heading";

export function SkillsSection() {
  return (
    <div className="space-y-5">
      <H2Heading>primary skills</H2Heading>
      <ul className="flex flex-wrap text-neutral-400">
        {skillsData.slice(0,7).map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
