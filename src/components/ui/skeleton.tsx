import { HTMLAttributes } from "react";

import { cn } from "@/lib/utility/tailwindUtils";

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-toby-dark-slate-blue/10",
        className,
      )}
      {...props}
    />
  );
};

export { Skeleton };
