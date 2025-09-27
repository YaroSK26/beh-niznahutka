"use client";
import Image from "next/image";

// Konfigurácia sponzorov - vynesená do vlastnej konštanty
const SPONSORS_DATA = [
  { name: "Srdcom i telom", logo: "/sponzori/srdcomitelom.png" },
  { name: "Pebar", logo: "/sponzori/pebar.png" },
  { name: "Kaufland", logo: "/sponzori/kaufland.png" },
  { name: "Exodus Coworking", logo: "/sponzori/logo-exodus.svg" },
  { name: "Zachej", logo: "/sponzori/zachej.png" },
  { name: "ProCare", logo: "/sponzori/procare.svg" },
  { name: "Fresh ", logo: "/sponzori/fresh.svg" },
  { name: "Online Relax", logo: "/sponzori/logo-onlinerelax.png" },
  { name: "Kalap", logo: "/sponzori/kalap.jpg" },
  { name: "Masážny salón Patty", logo: "/sponzori/patty.png" },
  { name: "Mercedes-Benz", logo: "/sponzori/mercedes.png" },
  { name: "Sedem Vaša kreatívna ", logo: "/sponzori/sedem.webp" },
  { name: "Biblia a financie", logo: "/sponzori/baf.png" },
];

// Jednotlivý sponzor komponent pre lepšiu čitateľnosť
function SponsorCard({ sponsor }) {
  return (
    <div className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200">
      <Image
        src={sponsor.logo || "/placeholder.svg"}
        alt={`Logo ${sponsor.name}`}
        width={170}
        height={90}
        className="object-contain max-w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}

// Hlavný komponent
export default function SponsorsGrid() {
  // Rozdelenie sponzorov na riadky 4-5-4 pre symetrické zobrazenie
  const firstRow = SPONSORS_DATA.slice(0, 4);
  const secondRow = SPONSORS_DATA.slice(4, 9);
  const thirdRow = SPONSORS_DATA.slice(9);

  return (
    <section className="w-full py-8 border-l-2 border-[#19ff7d] border-r-2">
      <div className="container mx-auto px-4">
        {/* Nadpis sekcie (voliteľný) */}
        <h2 className="text-2xl font-bold text-center mb-6 sr-only">
          Naši sponzori
        </h2>

        {/* Prvý riadok - 4 sponzori */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {firstRow.map((sponsor) => (
            <SponsorCard key={sponsor.logo} sponsor={sponsor} />
          ))}
        </div>

        {/* Druhý riadok - 5 sponzorov (s Fresh v strede) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-4">
          {secondRow.map((sponsor) => (
            <SponsorCard key={sponsor.logo} sponsor={sponsor} />
          ))}
        </div>

        {/* Tretí riadok - 4 sponzori */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {thirdRow.map((sponsor) => (
            <SponsorCard key={sponsor.logo} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}
