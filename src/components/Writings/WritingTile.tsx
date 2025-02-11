import React from "react";
import { H3Heading } from "../H3Heading";
import { Writings } from "@/app/Data/data";
import Description from "../Description";

interface WritingTileProps {
  writing: Writings;
}

export default function WritingTile({ writing }: WritingTileProps) {
  return (
    <a
      key={writing.title}
      target="_blank"
      className="group flex items-center justify-between"
      href={writing.link}
    >
      <H3Heading>{writing.title}</H3Heading>
      <Description>{writing.Date}</Description>
    </a>
  );
}
