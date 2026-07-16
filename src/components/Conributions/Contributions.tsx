import { OpenSourceContributions } from "@/app/Data/data";
import Image from "next/image";
import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";
import Description from "../Description";
import { ArrowUpRight } from "lucide-react";

export function Contributions() {
  return (
    <div className="space-y-4">
      <H2Heading>contributions</H2Heading>
      <div className="grid gap-4">
        {OpenSourceContributions.map((contribution) => (
          <a
            key={contribution.id}
            target="_blank"
            className="block glass-card rounded-xl p-5 hover:border-indigo-500/30 transition-all duration-300 group"
            href={contribution.link}
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <Image width={20} height={20} src={"/github.svg"} className="invert opacity-80" alt="GitHub" />
                </div>
                <div className="space-y-0.5">
                  <H3Heading className="text-lg font-bold text-white group-hover:text-indigo-400">
                    {contribution.title}
                  </H3Heading>
                  <Description>{contribution.description}</Description>
                </div>
              </div>
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-neutral-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
