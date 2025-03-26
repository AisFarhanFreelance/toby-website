import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import Star from "/public/assets/icon/Star.svg";
import UserRounded from "/public/assets/icon/UserRounded.svg";
import Bed from "/public/assets/icon/Bed.svg";
import Bath from "/public/assets/icon/Bath.svg";
import Ruler from "/public/assets/icon/Ruler.svg";

import BedRoom from "/public/assets/images/BedRoom.png";
import DiningRoom from "/public/assets/images/DiningRoom.png";
import RoofTop from "/public/assets/images/Rooftop.png";
import BathRoom from "/public/assets/images/BathRoom.png";

const features = [
  "Include Breakfast",
  "Family Friendly",
  "Daily Cleaning",
  "Chef Available",
  "Quite Area",
];

const images = [BedRoom, DiningRoom, RoofTop, BathRoom];

const KeyFeature = () => {
  return (
    <div className="font-mourich text-base font-bold text-toby-forest-ash space-y-7">
      <div className="space-y-3">
        <div className="flex items-center text-center gap-2 uppercase">
          <Image src={Star} alt="Star" sizes="24" />
          <span>5</span>
          <span className="text-toby-forest-ash/50">| 10 Review</span>
        </div>
        <div className="flex flex-wrap gap-4 uppercase">
          <div className="flex items-center gap-2">
            <Image src={UserRounded} alt="UserRounded" sizes="24" />
            <span>10</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Bed} alt="Bed" sizes="24" />
            <span>2 Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Bath} alt="Bath" sizes="24" />
            <span>2 Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Ruler} alt="Ruler" sizes="24" />
            <span>200 m²</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {features.map((feature, index) => (
            <Badge key={index} variant="outline">
              {feature}
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
                src={image}
                alt={`villa image detail ${index + 1}`}
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
