import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { image } from "@/lib/types/villa";

import { Button } from "../ui/button";

const ImageGallery = ({ villaImages }: { villaImages: image[] }) => {
  const MAX_THUMBNAILS = 4;
  const visibleImages = villaImages.slice(0, MAX_THUMBNAILS);
  const extraCount = villaImages.length - MAX_THUMBNAILS;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      <div className="w-full h-[332px] lg:h-[560px] overflow-hidden relative rounded-xl lg:col-span-3">
        <Image
          src={villaImages[0]?.url || "https://placehold.co/800x560.png"}
          alt="Villa Images"
          fill
          className="object-cover"
        />
      </div>

      <div className="lg:col-span-2 h-full w-full">
        <div className="flex items-center justify-center space-x-[-33px] lg:space-x-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2 h-full w-full">
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
        <div className="relative lg:hidden">
          <Button className="bg-toby-forest-ash/50 rounded-full h-[49px] w-[49px] p-0 flex items-center justify-center absolute top-0 right-0">
            <ArrowUpRight className="text-toby-frosted-pearl" size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
