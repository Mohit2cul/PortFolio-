import React from "react";

export default function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-muted-foreground md:text-base text-sm">{children}</p>
  );
}
