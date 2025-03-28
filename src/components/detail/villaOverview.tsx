import Image from "next/image";

import FacilitiesAndAmenities from "./facilitiesAndAmenities";
import KeyFeature from "./keyFeature";
import DescriptionAndPrice from "./descriptionAndPrice";
import { villaDetail } from "@/lib/types/villa";

interface VillaOverviewProps {
  villa: villaDetail;
}

const VillaOverview = (props: VillaOverviewProps) => {
  const { villa } = props;

  return (
    <div className="space-y-3 lg:space-y-7">
      <div className="space-y-3 lg:space-y-7 lg:flex lg:space-x-8 lg:h-[560px]">
        <FacilitiesAndAmenities name={villa.name} amenities={villa.amenities} />
        <div className="w-full h-[332px] lg:h-[560px] overflow-hidden relative rounded-xl">
          {villa.images[0]?.url ? (
            <Image
              src={villa.images[0].url}
              alt="Villa Main Image"
              fill
              className="object-cover"
            />
          ) : (
            <Image
              src="https://placehold.co/550x560.png"
              alt="BedRoom"
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="lg:flex lg:flex-col lg:justify-between lg:h-full">
          <KeyFeature
            rating={villa.rating}
            review_count={villa.review_count}
            capacity={villa.capacity}
            bedroom={villa.bedroom}
            bathroom={villa.bathroom}
            area={villa.area}
            tags={villa.tags}
            images={villa.images}
          />
        </div>
      </div>
      <DescriptionAndPrice
        description={villa.description}
        price={villa.price}
        long_address={villa.long_address}
      />
    </div>
  );
};

export default VillaOverview;
