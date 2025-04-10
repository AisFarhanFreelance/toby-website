import { Skeleton } from "./skeleton";

const SkeletonVillaCard = () => {
  return (
    <div className="flex flex-col space-y-3 lg:w-[443px]">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <div className="flex justify-between pt-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonVillaCard;
