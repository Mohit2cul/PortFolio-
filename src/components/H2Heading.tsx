import React from "react";
import { Star } from "./Star";

export function H2Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold"><Star/> {children}</h2>;
}
