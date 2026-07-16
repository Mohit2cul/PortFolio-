import React from "react";

export function H2Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold tracking-tight capitalize text-neutral-200 flex items-center gap-2 mb-4">
      <span>{children}</span>
    </h2>
  );
}
