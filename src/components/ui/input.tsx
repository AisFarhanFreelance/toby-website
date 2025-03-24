import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utility/tailwindUtils";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-8 w-full px-1.5 py-1 rounded-xl border border-toby-forest-ash/50 bg-transparent font-mourich text-base font-bold file:border-0 file:bg-transparent file:font-medium file:text-sm file:text-toby-dark-slate-blue placeholder:text-toby-dark-slate-blue focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-toby-forest-ash/50 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
