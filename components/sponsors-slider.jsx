"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsorsSlider() {
  const sponsors = [
    { name: "Online Relax", logo: "/sponzori/logo-onlinerelax.png" },
    { name: "Exodus Coworking", logo: "/sponzori/logo-exodus.svg" },
    { name: "Masážny salón Patty", logo: "/sponzori/patty.png" },
    { name: "Srdcom i telom", logo: "/sponzori/srdcomitelom.png" },
    { name: "Kaufland", logo: "/sponzori/kaufland.png" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-8 border-l-2 border-[#19ff7d] border-r-2">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25, // Adjust duration for speed
              ease: "linear",
            },
          },
        }}
      >
        {/* Duplicate sponsors to create a seamless loop */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3 md:w-1/5 lg:w-1/6 flex items-center justify-center p-4"
          >
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              width={150}
              height={80}
              objectFit="contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
