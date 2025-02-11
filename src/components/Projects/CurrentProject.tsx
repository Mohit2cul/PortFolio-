import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";
import Description from "../Description";

export function CurrentProject() {
  return (
    <div className="projects mt-6 space-y-5">
      <H2Heading>currently working on</H2Heading>
      <div className="flex flex-col">
        <H3Heading>
          <span className="font-semibold text-xl w-full">
            <a
              target="_blank"
              href="https://crossposthub.vercel.app/"
              className="hover:text-indigo-100 transition-colors"
            >
              CrossPostHub{" "}
            </a>
            <span className="h-10 w-10 bg-green-400 rounded-full"></span>
          </span>
        </H3Heading>
        <Description>
          SaaS platform for cross-posting content on multiple social media
          platforms. This tool helps users to efficiently manage and distribute
          their content across various social networks, saving time and effort.
          It includes features like scheduling and AI caption to ensure the best
          performance for each post.
        </Description>
      </div>
    </div>
  );
}
