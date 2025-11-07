import * as React from "react";

export function Avatar({ src, alt = "", initials = "", className = "", ...props }) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium ${className}`}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        initials || "?"
      )}
    </div>
  );
}
