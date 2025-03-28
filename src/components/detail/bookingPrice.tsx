import Image from "next/image";

import Location from "/public/assets/icon/MapPoint.svg";
import { Button } from "../ui/button";
import PriceForm from "../ui/priceForm";

interface BookingPriceProps {
  price: number;
  long_address: string;
}

const BookingPrice = (props: BookingPriceProps) => {
  const { price, long_address } = props;

  return (
    <div className="border-2 rounded-xl border-toby-forest-ash/25 font-mourich lg:min-w-[443px]">
      <div className="p-8 space-y-16">
        <div className="space-y-8">
          <div className="uppercase space-y-2">
            <div>
              <div className="text-sm lg:text-base text-toby-forest-ash/50 font-bold">
                Start From
              </div>
              <div className="font-bold text-4xl lg:text-5xl">
                IDR {price.toLocaleString("id-ID")}
                <span className="text-toby-forest-ash/50">
                  /<span className="font-normal text-[32px]">Night</span>
                </span>
              </div>
            </div>
            <div className="flex text-sm lg:text-base lg:items-center">
              <div className="flex-shrink-0">
                <Image src={Location} alt="PinPointIcon" sizes="16" />
              </div>
              <span className="ml-2">{long_address}</span>
            </div>
          </div>
          <div>
            <PriceForm />
          </div>
        </div>
        <div>
          <Button className="bg-toby-forest-ash text-toby-frosted-pearl w-full">
            Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingPrice;
