import React from "react";
import { HyperText } from "../magicui/hyper-text";
import { Star } from "../Star";
import { writingsData } from "@/app/Data/data";
import WritingTile from "./WritingTile";

export default function WritingsPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="flex md:text-4xl text-xl font-semibold items-center gap-2">
        <Star />
        <HyperText>writings</HyperText>
      </div>
      <div className="mt-8 space-y-4">
        {writingsData.map((writing) => (
          <WritingTile key={writing.title} writing={writing} />
        ))}
      </div>
    </div>
  );
}
