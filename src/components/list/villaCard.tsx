import { MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { villa } from "@/lib/types/villa";

import Bath from "/public/assets/icon/Bath.svg";
import Bed from "/public/assets/icon/Bed.svg";
import Ruler from "/public/assets/icon/Ruler.svg";
import Star from "/public/assets/icon/Star.svg";
import UserRounded from "/public/assets/icon/UserRounded.svg";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const VillaCard = (villa: villa) => {
  const feature = [
    { src: UserRounded, alt: "UserRounded", text: villa.capacity },
    { src: Bed, alt: "Bed", text: `${villa.bedroom} Bedrooms` },
    { src: Bath, alt: "Bath", text: `${villa.bathroom} Bathrooms` },
    { src: Ruler, alt: "Ruler", text: `${villa.area} m²` },
  ];

  const router = useRouter();

  return (
    <>
      <Card className="lg:w-[443px]">
        <CardHeader className="p-0">
          <div className="relative">
            {villa.images[0]?.url ? (
              <>
                <div className="lg:hidden">
                  <Image
                    src={villa.images[0].url}
                    alt="BedRoom"
                    width={800}
                    height={600}
                    className="object-cover object-center rounded-2xl"
                  />
                </div>

                <div className="hidden lg:block lg:w-[443px] lg:h-[300px] overflow-hidden relative">
                  <Image
                    src={villa.images[0].url}
                    alt="BedRoom"
                    fill
                    className="object-cover object-center rounded-2xl"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="rounded-2xl lg:hidden">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="BedRoom"
                    width={800}
                    height={600}
                    className="object-cover object-center rounded-2xl"
                  />
                </div>

                <div className="rounded-2xl hidden lg:block lg:w-[443px] lg:h-[300px] overflow-hidden relative">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="BedRoom"
                    fill
                    className="object-cover object-center rounded-2xl"
                  />
                </div>
              </>
            )}
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="space-y-6">
            <div className="bottom-0 uppercase text-toby-forest-ash space-y-2">
              <div>
                <div className="font-bold text-2xl lg:text-3xl">
                  IDR {villa.price}
                  <span>
                    / <span className="font-normal text-base">Night</span>
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-center space-x-1">
                  <div>
                    <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                  <span className="font-normal text-sm lg:text-base">
                    {villa.short_address}
                  </span>
                </div>
                <div className="text-2xl lg:text-4xl truncate font-bold">
                  <span>{villa.name}</span>
                </div>
              </div>
              <div>
                <Button
                  className="text-toby-frosted-pearl bg-toby-forest-ash w-full h-10 lg:h-12"
                  onClick={() => {
                    router.push(`/villas/${villa.id}`);
                  }}
                >
                  Book
                </Button>
              </div>
            </div>

            <div className="space-y-3 text-sm lg:text-base font-bold">
              <div className="flex items-center text-center gap-2 uppercase">
                <Image src={Star} alt="Star" sizes="24" />
                <span>{villa.rating}</span>
                <span className="text-toby-forest-ash/50">
                  | {villa.review_count} Review
                </span>
              </div>
              <div className="flex flex-wrap gap-3 uppercase">
                {feature.map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <Image src={item.src} alt={item.alt} sizes="16" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-3">
            {villa.tags.map((feature, index) => (
              <Badge
                key={index}
                variant="outline"
                className="h-8 lg:h-10 items-center text-xs lg:text-base font-bold"
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
