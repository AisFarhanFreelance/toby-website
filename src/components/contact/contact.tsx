"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ContactForm } from "./contact-form";
import { Whatsapp } from "iconsax-react";
import Link from "next/link";

export function Contact() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 },
    );

    const section = document.getElementById("contactus");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <h1
        id="contactus"
        className={`font-mourich text-[60px] md:text-[120px] lg:text-[240px] overflow-hidden tracking-tight whitespace-nowrap font-semibold ${
          isInView ? "animate-fadeIn" : ""
        }`}
      >
        CONTACT US
      </h1>
      <div
        className={`flex flex-col md:flex-row-reverse ${
          isInView ? "animate-fadeIn" : ""
        }`}
      >
        <Image
          src="/assets/images/ContactUs.png"
          alt="Contact"
          width={800}
          height={600}
          className={isInView ? "animate-fadeIn" : ""}
        />
        <div className={isInView ? "animate-fadeIn" : ""}>
          <h2 className="font-mourich text-2xl font-medium">
            LET’S GET IN TOUCH
          </h2>
          <ContactForm />
          <div
            className={`flex gap-1 justify-center items-center mt-7 ${
              isInView ? "animate-fadeIn" : ""
            }`}
          >
            <Whatsapp color="#294023" size="24" />
            <Link href="" className="font-mourich underline font-semibold">
              08123123987123
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease-out;
        }
      `}</style>
    </>
  );
}
