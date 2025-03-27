import Image from "next/image";

import { MapPin } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import Star from "/public/assets/icon/Star.svg";
import UserRounded from "/public/assets/icon/UserRounded.svg";
import Bed from "/public/assets/icon/Bed.svg";
import Bath from "/public/assets/icon/Bath.svg";
import Ruler from "/public/assets/icon/Ruler.svg";
import { Badge } from "../ui/badge";
import { villa } from "@/lib/types/villa";

const VillaCard = (villa: villa) => {
  const feature = [
    { src: UserRounded, alt: "UserRounded", text: villa.capacity },
    { src: Bed, alt: "Bed", text: `${villa.bedroom} Bedrooms` },
    { src: Bath, alt: "Bath", text: `${villa.bathroom} Bathrooms` },
    { src: Ruler, alt: "Ruler", text: `${villa.area} m²` },
  ];

  return (
    <>
      <Card>
        <CardHeader className="p-0">
          <div className="relative">
            <Image
              src={villa.images[0].url}
              width={800}
              height={600}
              alt="BedRoom"
              className="rounded-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-toby-dark-slate-blue rounded-2xl" />

            <div className="absolute inset-x-0 bottom-0 uppercase text-toby-frosted-pearl space-y-2 w-48 h-fit ml-6 mb-6">
              <div>
                <div className="text-sm font-bold">Start From</div>
                <div className="font-bold text-2xl">
                  IDR {villa.price}
                  <span>
                    / <span className="font-normal text-base">Night</span>
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-center space-x-1">
                  <div>
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span className="font-normal text-sm">
                    {villa.short_address}
                  </span>
                </div>
                <div className="text-2xl font-bold">
                  <span>{villa.name}</span>
                </div>
              </div>
              <div>
                <Button className="text-toby-forest-ash w-full h-10">
                  Book
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="space-y-3 text-sm font-bold">
            <div className="flex items-center text-center gap-2 uppercase">
              <Image src={Star} alt="Star" sizes="24" />
              <span>{villa.rating}</span>
              <span className="text-toby-forest-ash/50">
                | {villa.review_count} Review
              </span>
            </div>
            <div className="flex flex-wrap gap-3 uppercase">
              {feature.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Image src={item.src} alt={item.alt} sizes="16" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-3">
            {villa.tags.map((feature, index) => (
              <Badge
                key={index}
                variant="outline"
                className="h-8 items-center text-xs font-bold"
              >
                {feature.tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default VillaCard;
