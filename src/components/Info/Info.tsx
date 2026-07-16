import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import Description from "../Description";

export function Info() {
  return (
    <div className="space-y-6">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Available for Internships & Projects
      </div>

      <div className="space-y-2">
        <HyperText className="text-4xl md:text-5xl font-extrabold tracking-tight capitalize bg-gradient-to-r from-indigo-200 via-indigo-400 to-violet-300 bg-clip-text text-transparent">
          Kshitij Varshney
        </HyperText>
        
        <h2 className="text-neutral-400 flex items-center gap-2 text-sm md:text-base font-medium">
          <span>Uttar Pradesh, India</span>
          <span className="inline-block overflow-hidden rounded shadow-sm border border-neutral-800">
            <Image
              src={"/Flag_of_India.svg.webp"}
              height={18}
              width={24}
              className="object-cover"
              alt="India"
            />
          </span>
        </h2>
      </div>

      <div className="relative border-l-2 border-indigo-500/30 pl-4 py-1">
        <Description>
          I&apos;m a 21 y/o MERN stack engineer, currently pursuing B.Tech in Computer Science
          with niche expertise in building highly robust, secure, and scalable
          applications using the latest and most efficient technologies. My
          mission is to deliver innovative solutions that create value for
          businesses and end-users while ensuring unparalleled performance and
          scalability.
        </Description>
      </div>
    </div>
  );
}
