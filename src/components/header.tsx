import Image from "next/image";

import DesktopHeaderImage from "/public/assets/images/DesktopHeaderImage.svg";
import MobileHeaderImage from "/public/assets/images/MobileHeaderImage.svg";
import { Button } from "./ui/button";
import HeaderForm from "./ui/headerForm";
// import { Button } from "./ui/button";
// import DatePicker from "./ui/datePicker";

const HeaderSection = () => {
  return (
    <div id="home" className="justify-center">
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
          <div className="lg:w-full lg:px-[38px] lg:mb-[51px] lg:absolute lg:bottom-0">
            {/* <div className="flex items-center">
              <div className="hidden lg:flex w-full space-x-6 mr-8">
                <DatePicker />
                <DatePicker />
              </div>
              <Button className="lg:hidden">Check out our villas</Button>
              <Button className="hidden lg:block font-bold text-base w-full">
                Find Now!
              </Button>
            </div> */}

            <HeaderForm />
            <Button className="lg:hidden">Check out our villas</Button>
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
