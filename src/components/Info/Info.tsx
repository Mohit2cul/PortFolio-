import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import Description from "../Description";

export function Info() {
  return (
    <div>
      <HyperText className="text-4xl lowercase">Kshitij Varshney</HyperText>
      <h2 className="text-muted-foreground flex items-center gap-3">
        Uttar Pradesh, India{" "}
        <Image
          src={"/Flag_of_India.svg.webp"}
          height={25}
          width={25}
          alt="india"
        />
      </h2>

      <Description>
        I&apos;m a 20 y/o MERN stack engineer, currently pursuing B.Tech in Computer Science
        with niche expertise in building highly robust, secure, and scalable
        applications using the latest and most efficient technologies. My
        mission is to deliver innovative solutions that create value for
        businesses and end-users while ensuring unparalleled performance and
        scalability.
        <br/>
         {/* Write technical blogs on{" "}
        <a
          href="https://dev.to/hanuchaudhary"
          target="_blank"
          className="text-indigo-100 underline"
        >
          Dev.to
        </a>{" "}
        and{" "}
        <a
          href="https://medium.com/@kushchaudharyog"
          target="_blank"
          className="text-indigo-100 underline"
        >
          Medium
        </a> */}
      </Description>
    </div>
  );
}
