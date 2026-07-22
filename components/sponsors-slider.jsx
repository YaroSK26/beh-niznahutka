"use client";
import Image from "next/image";

// Konfigurácia sponzorov podľa ročníka
const SPONSORS_BY_YEAR = {
  2025: [
    { name: "Srdcom i telom", logo: "/sponzori2025/srdcomitelom.png" },
    { name: "Pebar", logo: "/sponzori2025/pebar.png" },
    { name: "Kaufland", logo: "/sponzori2025/kaufland.png" },
    { name: "Exodus Coworking", logo: "/sponzori2025/logo-exodus.svg" },
    { name: "Zachej", logo: "/sponzori2025/zachej.png" },
    { name: "ProCare", logo: "/sponzori2025/procare.svg" },
    { name: "Fresh ", logo: "/sponzori2025/fresh.svg" },
    { name: "Online Relax", logo: "/sponzori2025/logo-onlinerelax.png" },
    { name: "Kalap", logo: "/sponzori2025/kalap.jpg" },
    { name: "Masážny salón Patty", logo: "/sponzori2025/patty.png" },
    { name: "Mercedes-Benz", logo: "/sponzori2025/mercedes.png" },
    { name: "Sedem Vaša kreatívna ", logo: "/sponzori2025/sedem.webp" },
    { name: "Biblia a financie", logo: "/sponzori2025/baf.png" },
  ],
  2026: [
    { name: "Srdcom i telom", logo: "/sponzori2025/srdcomitelom.png" },
    { name: "Pebar", logo: "/sponzori2025/pebar.png" },
    { name: "Zachej", logo: "/sponzori2025/zachej.png" },
    { name: "Exodus Coworking", logo: "/sponzori2025/logo-exodus.svg" },
    { name: "Masážny salón Patty", logo: "/sponzori2025/patty.png" },
    { name: "Bruxel Bike", logo: "/sponzori2025/bruxel.webp" },
    { name: "Aqua Pro", logo: "/sponzori2025/aquapro.png" },
    { name: "Kalap", logo: "/sponzori2025/kalap.jpg" },
  ],
};

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
export default function SponsorsGrid({ year = 2025 }) {
  const sponsors = SPONSORS_BY_YEAR[year] || [];

  return (
    <section className="w-full py-8 border-l-2 border-[#19ff7d] border-r-2">
      <div className="container mx-auto px-4">
        {/* Nadpis sekcie (voliteľný) */}
        <h2 className="text-2xl font-bold text-center mb-6 sr-only">
          Naši sponzori {year}
        </h2>

        {sponsors.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.logo} sponsor={sponsor} />
            ))}
          </div>
        ) : (
          <p className="text-center text-white/60 font-sans py-8">
            Sponzori {year} čoskoro pribudnú.
          </p>
        )}
      </div>
    </section>
  );
}
