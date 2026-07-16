import React from "react";
import { H3Heading } from "../H3Heading";
import { Writings } from "@/app/Data/data";
import { ArrowUpRight, Calendar } from "lucide-react";

interface WritingTileProps {
  writing: Writings;
}

export default function WritingTile({ writing }: WritingTileProps) {
  return (
    <a
      key={writing.title}
      target="_blank"
      className="block glass-card rounded-xl p-5 hover:border-indigo-500/30 transition-all duration-300 group"
      href={writing.link}
      rel="noopener noreferrer"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-2">
          <H3Heading className="text-lg font-bold text-white group-hover:text-indigo-400">
            {writing.title}
          </H3Heading>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>{writing.Date}</span>
          </div>
        </div>
        <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-neutral-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-300 flex-shrink-0">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
}
