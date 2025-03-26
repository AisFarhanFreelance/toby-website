"use client";

import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utility/tailwindUtils";
import { motion, MotionProps } from "framer-motion";

// Button variants
const buttonVariants = cva(
  "font-mourich font-bold text-base rounded-full transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-toby-frosted-pearl hover:bg-toby-frosted-pearl/60 hover:text-toby-forest-ash focus:ring-2 focus:ring-toby-forest-ash active:bg-toby-frosted-pearl/20 pressed:text-toby-frosted-pearl disabled:bg-gray-300 disabled:cursor-not-allowed",
        outline:
          "border border-toby-forest-ash text-toby-forest-ash hover:bg-toby-forest-ash/10 focus:ring-2 focus:ring-toby-forest-ash active:bg-toby-forest-ash/20 disabled:bg-gray-300 disabled:cursor-not-allowed",
        ghost:
          "hover:bg-toby-forest-ash/60 hover:text-toby-forest-ash focus:ring-2 focus:ring-toby-forest-ash active:bg-toby-forest-ash/15 disabled:bg-gray-300 disabled:cursor-not-allowed text-center",
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
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);

    const buttonClassNames = cn(
      buttonVariants({ variant, size, className }),
      isPressed ? "bg-toby-forest-ash text-toby-forest-ash" : "",
    );

    return asChild ? (
      <Slot
        className={buttonClassNames}
        ref={ref}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        {...props}
      />
    ) : (
      <motion.button
        className={buttonClassNames}
        ref={ref}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeInOut" }, // Smooth hover effect
        }}
        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} // Smaller tap effect
        animate={{
          transition: { duration: 0.2, ease: "easeInOut" }, // Smooth transition for regular states
        }}
        {...(props as MotionProps)}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
