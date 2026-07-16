import WritingsPage from "@/components/Writings/WritingsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Writings | Kshitij Varshney",
  description: "Writings and articles by Kshitij Varshney",
};

export default function page() {
  return <WritingsPage />;
}
