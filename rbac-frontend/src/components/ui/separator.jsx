import * as React from "react";

export function Separator({ className = "", ...props }) {
  return (
    <div
      className={`h-px w-full bg-border ${className}`}
      {...props}
    />
  );
}
