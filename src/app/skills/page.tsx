import { SkillsPage } from "@/components/Skills/SkillsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Skills | Kshitij Varshney",
  description: "Skills I have",
};

export default function page() {
  return (
    <SkillsPage/>
  );
}
