import Image from "next/image";
import LivingRoom from "/public/assets/images/LivingRoom.png";

const AboutSection = () => {
  return (
    <div className="mt-[152.5px] flex flex-col items-center justify-center">
      <div className="text-center space-y-7 lg:px-[58px]">
        <h1 className="font-libre-baskerville italic text-2xl lg:text-4xl uppercase">
          WELCOME !
        </h1>
        <h3 className="font-mourich font-bold text-xl lg:text-[80px] uppercase">
          HELLO, I&apos;M TOBY
        </h3>
        <div>
          <p className="font-the-youngest text-base lg:text-[32px]">
            Villa curator. Sunset chaser. Your Bali insider. I&apos;m here to
            transform your island escape into the getaway you&apos;ve been
            scrolling for. My villas aren&apos;t just places to
            stay—they&apos;re experiences designed for those moments worth
            posting. From sunrise coffee on private balconies to midnight dips
            under the stars, I&apos;ve crafted each space to be your perfect
            Bali backdrop.
          </p>
        </div>
        <div className="-rotate-[8.63deg] mt-20 text-left">
          <h1 className="font-libre-baskerville italic text-4xl lg:text-[64px]">
            This is Villa Sophie,
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse my-[61.25px] text-center lg:items-end lg:justify-between lg:w-full lg:mx-8">
        <div className="overflow-hidden relative w-[326px] h-[191.5px] lg:w-[969px] lg:h-[569.2px] mx-auto lg:mx-0">
          <Image
            src={LivingRoom}
            alt="Living Room"
            fill
            priority
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="my-[20.5px] mx-[14.5px] lg:mx-14 max-w-[297px] space-y-6 font-roca-one text-base">
          <div className="flex flex-col">
            <span className="font-bold lg:text-2xl">Located in Uluwatu,</span>
            <span className="lg:text-2xl">
              {" "}
              known for a peaceful escape in Bali
            </span>
          </div>
          <div className="">
            <span className="lg:text-2xl">
              <span className="bg-toby-forest-ash text-toby-white">
                {" "}
                4 Bedrooms{" "}
              </span>{" "}
              with swimming pool &{" "}
              <span className="bg-toby-forest-ash text-toby-white">
                {" "}
                spacious living area{" "}
              </span>{" "}
              for you to{" "}
              <span className="font-extralight italic">
                {" "}
                Wine Down with Toby
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
