import { cn } from "@/lib/utility/tailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const badgeVariants = cva(
  "font-mourich text-base border-2 border-toby-forest-ash/50 rounded-4xl p-3 inline-flex item-center",
  {
    variants: {
      variant: {
        default: "border-transparent bg-toby-forest-ash/50 text-toby-white",
        outline: "text-toby-forest-ash/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
};

export { Badge, badgeVariants };
