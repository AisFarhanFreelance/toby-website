import Image from "next/image";
import { ContactForm } from "./contact-form";
import { Whatsapp } from "iconsax-react";
import Link from "next/link";

export function Contact() {
  return (
    <>
      <h1
        id="contactus"
        className="font-mourich text-[60px] md:text-[120px] lg:text-[240px] overflow-hidden tracking-tight whitespace-nowrap font-semibold"
      >
        CONTACT US
      </h1>
      <div className="flex flex-col md:flex-row-reverse">
        <Image
          src="/assets/images/ContactUs.png"
          alt="Contact"
          width={800}
          height={600}
        />
        <div>
          <h2 className="font-mourich text-2xl font-medium">
            LET’S GET IN TOUCH
          </h2>
          <ContactForm />
          <div className="flex gap-1 justify-center items-center mt-7">
            <Whatsapp color="#294023" size="24" />
            <Link href="" className="font-mourich underline font-semibold">
              08123123987123
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
