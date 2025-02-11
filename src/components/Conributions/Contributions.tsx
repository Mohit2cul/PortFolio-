import { OpenSourceContributions } from "@/app/Data/data";
import Image from "next/image";
import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";
import Description from "../Description";

export function Contributions() {
  return (
    <div className="space-y-5">
      <H2Heading>contributions</H2Heading>
      <div className="space-y-5 text-neutral-400">
        {OpenSourceContributions.map((contribution) => (
          <a
            key={contribution.id}
            target="_blank"
            className="transition-colors text-white group"
            href={contribution.link}
          >
            <div className="flex items-center space-x-2">
              <Image width={20} height={20} src={"/github.svg"} alt="" />
              <H3Heading>{contribution.title}</H3Heading>
            </div>
            <Description>{contribution.description}</Description>
          </a>
        ))}
      </div>
    </div>
  );
}
