import Image from "next/image";
import { amenity } from "@/lib/types/villa";

interface FacilitiesAndAmenitiesProps {
  name: string;
  amenities: amenity[];
}

const FacilitiesAndAmenities = (props: FacilitiesAndAmenitiesProps) => {
  const { name, amenities } = props;

  return (
    <div className="font-mourich font-bold space-y-8 lg:min-w-72">
      <div className="text-left">
        <h1 className="text-[40px] lg:text-7xl capitalize">
          {name.replace(/-/g, " ")}
        </h1>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl lg:text-4xl">Amenities</h3>
        <div className="grid grid-cols-2 gap-4 uppercase leading-[100%] -tracking-[4%] text-sm lg:text-base">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="flex items-center gap-2">
              <Image
                src={amenity.image}
                alt={amenity.name}
                width={24}
                height={24}
              />
              <div>{amenity.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesAndAmenities;
