"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Feature() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create opacity and scale transforms for each image
  const imageVariants = [
    {
      opacity: useTransform(scrollYProgress, [0, 0.12], [0, 1]),
      scale: useTransform(scrollYProgress, [0, 0.12], [0.8, 1]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.12, 0.25], [0, 1]),
      scale: useTransform(scrollYProgress, [0.12, 0.25], [0.8, 1]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.25, 0.37], [0, 1]),
      scale: useTransform(scrollYProgress, [0.25, 0.37], [0.8, 1]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.37, 0.5], [0, 1]),
      scale: useTransform(scrollYProgress, [0.37, 0.5], [0.8, 1]),
    },
  ];

  return (
    <>
      <div className="font-libre-baskerville text-toby-forest-ash text-center text-2xl md:text-4xl mt-10">
        <h1 className="italic">“Toby Villas was everything</h1>
        <h1 className="">I didn’t know I needed.”</h1>
      </div>
      <div ref={ref} className="grid gap-5 pt-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          { src: "/assets/images/BedRoom.png", alt: "Bedroom" },
          { src: "/assets/images/DiningRoom.png", alt: "Dining Room" },
          { src: "/assets/images/Rooftop.png", alt: "Rooftop" },
          { src: "/assets/images/BathRoom.png", alt: "Bathroom" },
        ].map((image, index) => (
          <motion.div
            key={image.src}
            className="relative"
            style={{
              opacity: imageVariants[index].opacity,
              scale: imageVariants[index].scale,
            }}
          >
            <Image
              src={image.src}
              className="rounded-3xl h-80 w-96 lg:h-96 lg:w-80 object-cover"
              alt={image.alt}
              width={800}
              height={600}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
