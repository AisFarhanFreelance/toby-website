import Image from "next/image";

import FacilitiesAndAmenities from "./facilitiesAndAmenities";

import BedRoom from "/public/assets/images/BedRoom.png";
import KeyFeature from "./keyFeature";

interface VillaOverviewProps {
  villaName: string;
}

const VillaOverview = ({ villaName }: VillaOverviewProps) => {
  return (
    <div className="space-y-3">
      <FacilitiesAndAmenities villaName={villaName} />
      <div className="w-full h-[332px] overflow-hidden relative rounded-xl">
        <Image src={BedRoom} alt="BedRoom" fill className="object-cover" />
      </div>
      <KeyFeature />
    </div>
  );
};

export default VillaOverview;
