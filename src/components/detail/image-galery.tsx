"use client";

import { ArrowUpRight, Map } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utility/tailwindUtils";

import { image } from "@/lib/types/villa";

import { Button } from "../ui/button";

const ImageGallery = ({
  villaImages,
  gmapUrl,
}: {
  villaImages: image[];
  gmapUrl: string;
}) => {
  const MAX_THUMBNAILS = 4;
  const visibleImages = villaImages.slice(0, MAX_THUMBNAILS);
  const extraCount = villaImages.length - MAX_THUMBNAILS;
  const hasBackgroundImage = visibleImages.length >= 4;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      <div className="w-full h-[332px] lg:h-[560px] overflow-hidden relative rounded-xl lg:col-span-3">
        <Image
          src={villaImages[0]?.url || "https://placehold.co/800x560.png"}
          alt="Villa Images"
          fill
          className="object-cover"
        />
        <Button
          onClick={() => window.open(gmapUrl, "_blank")}
          className="flex justify-between items-center gap-3 bg-toby-frosted-pearl text-toby-forest-ash/80 absolute bottom-3 left-3 lg:bottom-6 lg:left-6 rounded-full text-base lg:text-xl px-6 h-[48px] lg:h-[60px] lg:px-[30px]"
        >
          <Map size={16} className="lg:w-6 lg:h-6" />
          View On Map
        </Button>
      </div>

      <div className="relative w-full lg:col-span-2 h-full flex justify-between lg:block">
        <div className="flex items-center space-x-[-33px] lg:space-x-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2 h-full w-full">
          {visibleImages.map((img, index) => {
            const isLastVisibleImage =
              index === MAX_THUMBNAILS - 1 && extraCount > 0;

            return (
              <div
                key={index}
                className="relative h-20 w-[66px] lg:w-full lg:h-full overflow-hidden lg:rounded-lg rounded-[22.55px] border-4 border-toby-frosted-pearl lg:border-0"
              >
                <Image
                  src={img.url}
                  alt={`Thumbnail Image ${index + 1}`}
                  fill
                  className="object-cover"
                />

                {isLastVisibleImage && (
                  <div className="font-roca-one absolute inset-0 bg-toby-dark-slate-blue/50 text-toby-frosted-pearl flex items-center justify-center text-lg lg:text-5xl rounded-lg">
                    +{extraCount}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <Button
          className={cn(
            "bg-toby-forest-ash/50 rounded-full px-4 py-2 text-sm h-[49px] w-[49px] lg:h-auto lg:w-auto lg:text-base flex items-center justify-center z-10 lg:absolute lg:bottom-3 lg:right-3",
            hasBackgroundImage
              ? "lg:bg-toby-frosted-pearl lg:hover:bg-toby-frosted-pearl"
              : "lg:bg-toby-forest-ash lg:hover:bg-toby-forest-ash",
          )}
        >
          <ArrowUpRight
            size={24}
            className="lg:hidden text-toby-frosted-pearl"
          />
          <span
            className={cn(
              "hidden lg:inline font-bold my-2 mx-4",
              hasBackgroundImage
                ? "text-toby-forest-ash"
                : "text-toby-frosted-pearl",
            )}
          >
            Show All Photos
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ImageGallery;
