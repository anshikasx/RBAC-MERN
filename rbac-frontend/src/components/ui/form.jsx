import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";

export function Form({ children, className = "", ...props }) {
  const methods = useFormContext();
  return (
    <form className={className} {...props}>
      <FormProvider {...methods}>{children}</FormProvider>
    </form>
  );
}

export function FormField({ name, control, render }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => render({ field, fieldState })}
    />
  );
}

export function FormItem({ className = "", ...props }) {
  return <div className={`space-y-1 ${className}`} {...props} />;
}

export function FormLabel({ className = "", ...props }) {
  return (
    <label className={`text-sm font-medium ${className}`} {...props} />
  );
}

export function FormMessage({ className = "", children, ...props }) {
  if (!children) return null;
  return (
    <p className={`text-xs text-red-500 ${className}`} {...props}>
      {children}
    </p>
  );
}
