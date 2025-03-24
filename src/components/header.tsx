import Image from "next/image";

import DesktopHeaderImage from "/public/assets/images/DesktopHeaderImage.svg";
import MobileHeaderImage from "/public/assets/images/MobileHeaderImage.svg";
import Button from "./ui/button";

const HeaderSection = () => {
  return (
    <div className="justify-center">
      <div className="relative">
        <div className="absolute flex flex-col gap-8 items-center justify-center w-full h-full">
          <div className="space-y-2.5">
            <div className="flex gap-x-3 items-center justify-center">
              <div className="w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-toby-white" />
              <span className="font-mourich text-toby-white text-center text-base lg:text-2xl">
                Your Perfect Villa Escape Awaits
              </span>
            </div>
            <div>
              <div className="font-mourich text-base lg:text-[80px] font-bold text-toby-white text-center">
                ESCAPE TO BALI WITH{" "}
                <span className="font-libre-baskerville italic font-normal">
                  TOBY
                </span>
              </div>
            </div>
          </div>
          <div>
            <Button>Check Out Out Villas</Button>
          </div>
        </div>

        <div className="hidden lg:block overflow-hidden">
          <Image
            src={DesktopHeaderImage}
            alt="Desktop Header Image"
            width={1376}
            height={848}
            priority
            className="rounded-4xl"
          />
        </div>

        <div className="lg:hidden">
          <Image
            src={MobileHeaderImage}
            alt="Mobile Header Image"
            height={400}
            width={326}
            priority
            className="rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
