import Image from "next/image";

import { villa } from "@/lib/types/villa";

import Bath from "/public/assets/icon/Bath.svg";
import Bed from "/public/assets/icon/Bed.svg";
import Ruler from "/public/assets/icon/Ruler.svg";
import Star from "/public/assets/icon/Star.svg";
import UserRounded from "/public/assets/icon/UserRounded.svg";

import { Badge } from "../ui/badge";

const Feature = ({ features }: { features: villa }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center text-center gap-2 uppercase">
        <Image src={Star} alt="Star" sizes="24" />
        <span>{features.rating}</span>
        <span className="text-toby-forest-ash/50">
          | {features.review_count} Review
        </span>
      </div>
      <div className="flex flex-wrap gap-4 uppercase">
        <div className="flex items-center gap-2">
          <Image src={UserRounded} alt="UserRounded" sizes="24" />
          <span>{features.capacity}</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={Bed} alt="Bed" sizes="24" />
          <span>{features.bedroom} Bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={Bath} alt="Bath" sizes="24" />
          <span>{features.bathroom} Bathrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={Ruler} alt="Ruler" sizes="24" />
          <span>{features.area} m²</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {features.tags.map((tag, index) => (
          <Badge
            key={index}
            variant="outline"
            className="h-8 lg:h-10 items-center text-xs lg:text-base font-bold"
          >
            {tag.tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Feature;
