import * as React from "react";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-input text-foreground",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-white",
        destructive: "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Badge({ className = "", variant, ...props }) {
  return (
    <span className={badgeVariants({ variant, className })} {...props} />
  );
}
