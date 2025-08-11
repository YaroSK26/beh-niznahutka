"use client";
import Image from "next/image";

export default function SponsorsGrid() {
  const sponsors = [
    { name: "Srdcom i telom", logo: "/sponzori/srdcomitelom.png" },
    { name: "Pebar", logo: "/sponzori/pebar.png" },
    { name: "Kaufland", logo: "/sponzori/kaufland.png" },
    { name: "Exodus Coworking", logo: "/sponzori/logo-exodus.svg" },
    { name: "Zachej", logo: "/sponzori/Zachej.png" },
    { name: "ProCare", logo: "/sponzori/procare.svg" },
    { name: "Biblia a financie", logo: "/sponzori/baf.png" },
    { name: "Online Relax", logo: "/sponzori/logo-onlinerelax.png" },
    { name: "Kalap", logo: "/sponzori/kalap.jpg" },
    { name: "Masážny salón Patty", logo: "/sponzori/patty.png" },
  ];

  return (
    <div className="w-full py-8 border-l-2 border-[#19ff7d] border-r-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}