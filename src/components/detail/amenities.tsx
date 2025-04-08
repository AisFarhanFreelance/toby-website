import Image from "next/image";

import { amenity } from "@/lib/types/villa";

const Amenities = ({ amenities }: { amenities: amenity[] }) => {
  return (
    <div className="font-mourich font-bold space-y-4">
      <h3 className="text-2xl lg:text-4xl">Amenities</h3>
      <div className="grid grid-cols-2 gap-4 uppercase leading-[100%] -tracking-[4%] text-sm lg:text-base">
        {Array.isArray(amenities) &&
          amenities.map((amenity) => (
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
  );
};

export default Amenities;
