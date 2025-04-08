import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { image } from "@/lib/types/villa";

import { Button } from "../ui/button";

const ImageGallery = ({ villaImages }: { villaImages: image[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="w-full h-[332px] lg:h-[560px] overflow-hidden relative rounded-xl">
        <Image
          src={villaImages[0]?.url || "https://placehold.co/800x560.png"}
          alt="Villa Images"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center justify-center space-x-[-33px] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2">
          {villaImages.map((img, index) => (
            <div
              key={index}
              className="relative h-20 w-[66px] lg:w-full lg:h-[150px] overflow-hidden lg:rounded-lg rounded-[22.55px] border-4 border-toby-frosted-pearl lg:border-0"
            >
              <Image
                src={img.url}
                alt={`Thumbnail Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
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
