import { writingsData } from "@/app/Data/data";
import React from "react";
import { H2Heading } from "../H2Heading";
import WritingTile from "./WritingTile";

export function WritingsSection() {
  return (
    <div className="space-y-5">
      <H2Heading>writings</H2Heading>
      <div className="space-y-3">
        {writingsData.map((writing) => (
          <WritingTile key={writing.title} writing={writing} />
        ))}
      </div>
    </div>
  );
}
