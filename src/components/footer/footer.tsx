"use client";

import { motion } from "framer-motion";
import { Instagram } from "iconsax-react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-toby-forest-ash">
      <div className="grid m-6 md:grid-cols-2 min-h-[452px]">
        <div className="flex flex-col md:justify-between">
          <div className="grid md:grid-cols-2 font-mourich text-2xl text-toby-frosted-pearl tracking-tight font-semibold">
            {["HOME", "CONTACT US", "ABOUT US"].map((text, index) => (
              <Link
                key={index}
                href={`#${text.toLowerCase().replace(" ", "")}`}
              >
                <motion.p
                  whileHover={{
                    scale: 1.1,
                    color: "#F7F4E8",
                  }}
                >
                  {text}
                </motion.p>
              </Link>
            ))}
          </div>
          <div className="flex md:flex-col gap-6 mt-12">
            <Link href="https://instagram.com" target="_blank">
              <motion.div
                whileHover={{ scale: 1.2, originX: 0 }}
                className="flex items-center justify-start"
              >
                <Instagram color="#f7f4e8" size="24" />
              </motion.div>
            </Link>

            <Link href="https://tiktok.com" target="_blank">
              <motion.div
                whileHover={{ scale: 1.2, originX: 0 }}
                className="flex items-center justify-start"
              >
                <Image src="tiktok.svg" alt="Tiktok" width={24} height={24} />
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:justify-between">
          <div>
            <hr className="border-toby-frosted-pearl mt-3 md:mt-0 opacity-20" />
            <div className="grid md:grid-cols-2">
              <div>
                <div className="font-mourich text-toby-frosted-pearl text-base mt-6 font-semibold">
                  {["08123123987123", "TobyHolding@gmail.com"].map(
                    (item, index) => (
                      <motion.p
                        key={index}
                        whileHover={{ scale: 1.1, color: "#F7F4E8" }}
                      >
                        {item}
                      </motion.p>
                    ),
                  )}
                </div>
                <div className="font-mourich text-toby-frosted-pearl text-base mt-8 font-semibold flex flex-col gap-2">
                  {[
                    { platform: "Instagram", link: "https://instagram.com" },
                    { platform: "Tiktok", link: "https://tiktok.com" },
                    {
                      platform: "Whatsapp",
                      link: "https://wa.me/628123123987",
                    },
                  ].map((item, index) => (
                    <Link key={index} href={item.link} target="_blank">
                      <motion.div
                        className="flex gap-2 items-center group"
                        whileHover={{ scale: 1.1, color: "#F7F4E8" }}
                      >
                        <p>{item.platform}</p>
                        <motion.div transition={{ duration: 0.5 }}>
                          <ArrowUpRight color="#f7f4e8" size={18} />
                        </motion.div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
              <motion.p
                className="font-mourich text-3xl font-bold text-toby-frosted-pearl text-right mt-6 cursor-pointer"
                whileHover={{ scale: 1.1, color: "#F7F4E8" }}
              >
                <Link href="/#home">TOBY HOLDINGS</Link>
              </motion.p>
            </div>
          </div>
          <div className="flex justify-between font-mourich text-xl text-toby-frosted-pearl font-semibold mt-12">
            <Link href="">
              <motion.p whileHover={{ scale: 1.1, color: "#F7F4E8" }}>
                Privacy
              </motion.p>
            </Link>
            <motion.p whileHover={{ scale: 1.1, color: "#F7F4E8" }}>
              © 2025 — Copyright
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
