import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

export const Sheet = SheetPrimitive.Root;

export const SheetTrigger = SheetPrimitive.Trigger;

export const SheetPortal = SheetPrimitive.Portal;

export const SheetOverlay = React.forwardRef(({ className = "", ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm ${className}`}
    {...props}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

export const SheetContent = React.forwardRef(
  ({ className = "", side = "right", children, ...props }, ref) => {
    const sideStyles = {
      right: "right-0 top-0 h-full w-80 border-l",
      left: "left-0 top-0 h-full w-80 border-r",
      bottom: "bottom-0 left-0 w-full border-t",
      top: "top-0 left-0 w-full border-b",
    };

    return (
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
          ref={ref}
          className={`fixed z-50 bg-background p-6 shadow-lg transition-transform duration-300 
          ${sideStyles[side]} ${className}`}
          {...props}
        >
          {children}
        </SheetPrimitive.Content>
      </SheetPortal>
    );
  }
);
SheetContent.displayName = SheetPrimitive.Content.displayName;
