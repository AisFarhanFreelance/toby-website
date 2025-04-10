import { Skeleton } from "../ui/skeleton";

const VillaOverviewSkeleton = () => {
  return (
    <div className="space-y-6 w-full">
      {/* Title & Location */}
      <div className="space-y-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-4" />
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Main Image */}
        <Skeleton className="h-[332px] lg:h-[560px] rounded-xl lg:col-span-3" />

        {/* Thumbnails & Button */}
        <div className="lg:col-span-2 w-full flex flex-col lg:block justify-between relative">
          <div className="flex items-center justify-center space-x-[-33px] lg:space-x-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2 h-[100px] lg:h-full w-full">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-20 w-[66px] lg:w-full lg:h-[130px] rounded-[22px] lg:rounded-lg"
              />
            ))}
          </div>

          {/* Button */}
          <Skeleton className="mt-3 lg:mt-0 h-[49px] w-[49px] lg:h-[40px] lg:w-[140px] rounded-full mx-auto lg:absolute lg:bottom-3 lg:right-3" />
        </div>
      </div>

      {/* Amenities & Info Section */}
      <div className="space-y-4 lg:flex lg:justify-between lg:space-y-0 lg:space-x-8">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/2" />
          <div className="flex gap-2 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>
        </div>

        <div className="space-y-2 lg:w-1/3">
          <Skeleton className="h-4 w-1/3" />
          <div className="flex gap-2 flex-wrap">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <div className="space-y-1">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <Skeleton className="h-72 w-full rounded-lg" />
    </div>
  );
};

export default VillaOverviewSkeleton;
