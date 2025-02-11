import React from "react";

export function H3Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`md:text-xl text-base text-indigo-50 font-semibold group-hover:text-indigo-500 transition-colors duration-300 ${className}`}
    >
      {children}
    </h3>
  );
}
