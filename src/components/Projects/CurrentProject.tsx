import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";
import Description from "../Description";
import { ArrowUpRight } from "lucide-react";

export function CurrentProject() {
  return (
    <div className="space-y-4">
      <H2Heading>currently working on</H2Heading>
      <a
        target="_blank"
        href="https://crossposthub.vercel.app/"
        className="block glass-card rounded-2xl p-6 border-l-4 border-l-indigo-500/80 transition-all duration-300 group"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <H3Heading className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400">
                CrossPostHub
              </H3Heading>
            </div>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-neutral-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <Description>
            A SaaS platform designed for cross-posting content on multiple social media
            platforms. This tool helps users efficiently manage and distribute
            their content across various social networks, saving time and effort.
            It includes features like automated scheduling and AI caption generation to ensure the best
            performance for each post.
          </Description>
        </div>
      </a>
    </div>
  );
}
