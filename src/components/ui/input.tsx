import * as React from "react";

import { cn } from "~/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, startIcon, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "border-input ring-offset-background focus-within:ring-ring bg-background flex h-10 items-center rounded-md border pl-1 text-sm focus-within:ring-1 focus-within:ring-offset-2",
          className,
          {
            "!pl-2": startIcon,
          },
        )}
      >
        {startIcon}

        <input
          {...props}
          ref={ref}
          className="placeholder:text-muted-foreground w-full bg-transparent p-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
