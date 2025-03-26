import Image from "next/image";

import Star from "/public/assets/icon/Star.svg";
import UserRounded from "/public/assets/icon/UserRounded.svg";
import Bed from "/public/assets/icon/Bed.svg";
import Bath from "/public/assets/icon/Bath.svg";
import Ruler from "/public/assets/icon/Ruler.svg";

const KeyFeature = () => {
  return (
    <div className="font-mourich text-base font-bold text-toby-forest-ash">
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
      </div>
    </div>
  );
};

export default KeyFeature;
