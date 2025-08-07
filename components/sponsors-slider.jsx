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
    { name: "Zachej", logo: "/sponzori/Zachej.png" },
  ];

  // Duplikujeme sponzorov, aby sme vytvorili plynulú slučku.
  // Dve sady sponzorov sú zvyčajne dostatočné pre plynulý prechod.
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative w-full overflow-hidden py-8 border-l-2 border-[#19ff7d] border-r-2">
      <motion.div
        className="flex flex-nowrap" // Zabezpečí, aby sa položky neobalovali na nový riadok
        animate={{
          // Animujeme z 0% na -50% celkovej šírky motion.div.
          // Keďže motion.div obsahuje dve sady sponzorov, -50% znamená posun
          // presne o šírku jednej sady, čím sa vytvorí plynulá slučka.
          x: ["0%", "-50%"],
          transition: {
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20, // Upravené trvanie pre rýchlejšiu animáciu
              ease: "linear",
            },
          },
        }}
      >
        {duplicatedSponsors.map((sponsor, index) => (
          <div
            key={index}
            // Responzívne šírky:
            // Na najmenších obrazovkách (mobil) 2 sponzori (w-1/2)
            // Na malých obrazovkách (sm breakpoint) 3 sponzori (sm:w-1/3)
            // Na stredných obrazovkách (md breakpoint) 4 sponzori (md:w-1/4)
            // Na veľkých obrazovkách (lg breakpoint) 5 sponzorov (lg:w-1/5)
            // Na extra veľkých obrazovkách (xl breakpoint) 6 sponzorov (xl:w-1/6)
            className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 flex items-center justify-center p-4"
          >
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              width={150}
              height={80}
              className="object-contain" // Použitie Tailwind triedy pre object-fit
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
