import Image from "next/image";

import Swimming from "/public/assets/icon/Swimming.svg";
import Display from "/public/assets/icon/Display.svg";
import UserRounded from "/public/assets/icon/UserRounded.svg";
import WiFiRouterRound from "/public/assets/icon/Wi-FiRouterRound.svg";

interface FacilitiesAndAmenitiesProps {
  villaName: string;
}

const FacilitiesAndAmenities = ({ villaName }: FacilitiesAndAmenitiesProps) => {
  return (
    <div className="font-mourich font-bold space-y-8">
      <div className="text-left">
        <h1 className="text-[40px] capitalize">
          {villaName.replace(/-/g, " ")}
        </h1>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl">Amenities</h3>
        <div className="grid grid-cols-2 gap-4 uppercase leading-[100%] -tracking-[4%] text-sm">
          <div className="flex items-center gap-2">
            <Image src={Swimming} alt="Swimming" />
            <div>Pool</div>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Display} alt="Display" />
            <div>Smart TV</div>
          </div>
          <div className="flex items-center gap-2">
            <Image src={UserRounded} alt="UserRounded" />
            <div>Kitchen</div>
          </div>
          <div className="flex items-center gap-2">
            <Image src={WiFiRouterRound} alt="WiFiRouterRound" />
            <div>WiFi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesAndAmenities;
