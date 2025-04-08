import { MapPin } from "lucide-react";

import { villaDetail } from "@/lib/types/villa";

import Amenities from "./amenities";
import DescriptionAndPrice from "./description-and-price";
import Feature from "./feature";
import ImageGallery from "./image-galery";

const VillaOverview = ({ villa }: { villa: villaDetail }) => {
  return (
    <div className="space-y-8">
      <div className="font-mourich flex flex-col text-toby-forest-ash space-y-8">
        <div className="text-left font-bold order-0 lg:order-1">
          <h1 className="text-[40px] lg:text-7xl capitalize">
            {villa.name.replace(/-/g, " ")}
          </h1>
          <div className="flex text-sm lg:text-base lg:items-center font-normal">
            <div className="flex-shrink-0">
              <MapPin size={16} />
            </div>
            <span className="ml-2">{villa.long_address}</span>
          </div>
        </div>

        <div className="block lg:hidden order-1">
          <Amenities amenities={villa.amenities} />
        </div>

        <div className="order-2">
          <ImageGallery villaImages={villa.images} />
        </div>

        <div className="hidden lg:flex order-3">
          <div>
            <Feature features={villa} />
          </div>

          <div>
            <Amenities amenities={villa.amenities} />
          </div>
        </div>

        <div className="block lg:hidden order-3">
          <Feature features={villa} />
        </div>
      </div>

      <div>
        <DescriptionAndPrice
          descriptionAndPrice={{
            description: villa.description,
            price: villa.price,
            long_address: villa.long_address,
            villaName: villa.name,
          }}
        />
      </div>
    </div>
  );
};

export default VillaOverview;
