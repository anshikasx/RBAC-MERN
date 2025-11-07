import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

export const DropdownMenuContent = React.forwardRef(
  ({ className = "", sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 
      text-popover-foreground shadow-md ${className}`}
      {...props}
    />
  )
);
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuItem = React.forwardRef(
  ({ inset, className = "", ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={`flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm 
      outline-none transition hover:bg-accent hover:text-accent-foreground 
      aria-disabled:opacity-50 aria-disabled:cursor-not-allowed ${
        inset ? "pl-8" : ""
      } ${className}`}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuSeparator = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={`-mx-1 my-1 h-px bg-muted ${className}`}
      {...props}
    />
  )
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
