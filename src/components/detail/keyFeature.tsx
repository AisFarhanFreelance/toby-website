import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import Star from "/public/assets/icon/Star.svg";
import UserRounded from "/public/assets/icon/UserRounded.svg";
import Bed from "/public/assets/icon/Bed.svg";
import Bath from "/public/assets/icon/Bath.svg";
import Ruler from "/public/assets/icon/Ruler.svg";
import { image, tag } from "@/lib/types/villa";

interface KeyFeatureProps {
  rating: number;
  review_count: number;
  capacity: number;
  bedroom: number;
  bathroom: number;
  area: number;
  tags: tag[];
  images: image[];
}

const KeyFeature = (props: KeyFeatureProps) => {
  const {
    rating,
    review_count,
    capacity,
    bedroom,
    bathroom,
    area,
    tags,
    images,
  } = props;

  return (
    <div className="font-mourich text-base font-bold text-toby-forest-ash space-y-7 lg:min-w-[442px] lg:flex lg:flex-col lg:justify-between lg:h-full">
      <div className="space-y-3">
        <div className="flex items-center text-center gap-2 uppercase">
          <Image src={Star} alt="Star" sizes="24" />
          <span>{rating}</span>
          <span className="text-toby-forest-ash/50">
            | {review_count} Review
          </span>
        </div>
        <div className="flex flex-wrap gap-4 uppercase">
          <div className="flex items-center gap-2">
            <Image src={UserRounded} alt="UserRounded" sizes="24" />
            <span>{capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Bed} alt="Bed" sizes="24" />
            <span>{bedroom} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Bath} alt="Bath" sizes="24" />
            <span>{bathroom} Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Ruler} alt="Ruler" sizes="24" />
            <span>{area} m²</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag.tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center space-x-[-33px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden h-20 w-[66px] rounded-[22.55px] border-4 border-toby-frosted-pearl"
            >
              <Image
                src={image.url}
                alt={`villa image detail ${index + 1}`}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="relative">
          <Button className="bg-toby-forest-ash/50 rounded-full h-[49px] w-[49px] p-0 flex items-center justify-center absolute top-0 right-0">
            <ArrowUpRight className="text-toby-frosted-pearl" size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
