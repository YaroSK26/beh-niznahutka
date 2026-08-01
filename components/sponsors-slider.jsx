"use client";
import Image from "next/image";

// Konfigurácia sponzorov podľa ročníka
const SPONSORS_BY_YEAR = {
  2025: [
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
  ],
  2026: [
    { name: "Srdcom i telom", logo: "/sponzori/srdcomitelom.png" },
    { name: "Pebar", logo: "/sponzori/pebar.png" },
    { name: "Zachej", logo: "/sponzori/zachej.png" },
    { name: "Exodus Coworking", logo: "/sponzori/logo-exodus.svg" },
    { name: "Masážny salón Patty", logo: "/sponzori/patty.png" },
    { name: "Bruxel Bike", logo: "/sponzori/bruxel.webp" },
    { name: "Aqua Pro", logo: "/sponzori/aquapro.png" },
    { name: "Kalap", logo: "/sponzori/kalap.jpg" },
    { name: "Kaufland", logo: "/sponzori/kaufland.png" },
    { name: "Curaprox", logo: "/sponzori/curaprox.png" },
    { name: "Sedem Vaša kreatívna ", logo: "/sponzori/sedem.webp" },
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
