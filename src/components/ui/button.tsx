import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utility/tailwindUtils";

const buttonVariants = cva("font-mourich font-bold text-base rounded-full", {
  variants: {
    variant: {
      default: "bg-toby-white",
      outline: "border border-toby-forest-ash text-toby-forest-ash ",
    },
    size: {
      default: "h-[60px] px-[30px]",
      sm: "h-[26px] px-6",
      lg: "h-[60px] px-[70.5px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
