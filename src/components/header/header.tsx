"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import DesktopHeaderImage from "/public/assets/images/DesktopHeaderImage.svg";
import MobileHeaderImage from "/public/assets/images/MobileHeaderImage.svg";

import { Button } from "../ui/button";
import HeaderForm from "../ui/headerForm";

const HeaderSection = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToVillaList = (pathname: string) => {
    if (pathname === "/villas") {
      return;
    }
    router.push("/villas");
  };

  return (
    <div id="home" className="justify-center">
      <div className="relative">
        <div className="absolute flex flex-col gap-8 items-center justify-center w-full h-full">
          <div className="space-y-2.5">
            <div className="flex gap-x-3 items-center justify-center">
              <motion.div
                className="w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-toby-white"
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <motion.span
                className="font-mourich text-toby-white text-center text-base lg:text-2xl"
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                Your Perfect Villa Escape Awaits
              </motion.span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <div className="font-mourich text-base lg:text-[80px] font-bold text-toby-white text-center">
                ESCAPE TO BALI WITH{" "}
                <span className="font-libre-baskerville italic font-normal">
                  TOBY
                </span>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-full lg:px-[38px] lg:mb-[51px] lg:absolute lg:bottom-0">
            <HeaderForm />
            <Button
              className="lg:hidden"
              onClick={() => {
                navigateToVillaList(pathname);
              }}
            >
              Check out our villas
            </Button>
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
