"use client";
import Image from "next/image";

// Konfigurácia sponzorov podľa ročníka
const SPONSORS_BY_YEAR = {
  2025: [
    { name: "Srdcom i telom", logo: "/sponzori/srdcomitelom.png", large: true },
    { name: "Pebar", logo: "/sponzori/pebar.png" },
    { name: "Kaufland", logo: "/sponzori/kaufland.png" },
    { name: "Exodus Coworking", logo: "/sponzori/logo-exodus.svg" },
    { name: "Zachej", logo: "/sponzori/zachej.png" },
    { name: "ProCare", logo: "/sponzori/procare.svg" },
    { name: "Fresh ", logo: "/sponzori/fresh.svg" },
    { name: "Online Relax", logo: "/sponzori/logo-onlinerelax.png" },
    { name: "Kalap", logo: "/sponzori/kalap2.png", small: true },
    { name: "Masážny salón Patty", logo: "/sponzori/patty.png" },
    { name: "Mercedes-Benz", logo: "/sponzori/mercedes.png" },
    { name: "Sedem Vaša kreatívna ", logo: "/sponzori/sedem.webp" },
    { name: "Biblia a financie", logo: "/sponzori/baf.png" },
  ],
  2026: [
    { name: "Srdcom i telom", logo: "/sponzori/srdcomitelom.png", large: true },
    { name: "VSZP", logo: "/sponzori/vszp.png" },
    { name: "Kebabizňa", logo: "/sponzori/kebabizna.png" },
    { name: "UNLP", logo: "/sponzori/unlp.png" },
    { name: "Kaufland", logo: "/sponzori/kaufland.png" },
    { name: "Curaprox", logo: "/sponzori/curaprox.png" },
    { name: "Zachej", logo: "/sponzori/zachej.png" },
    { name: "Bruxel Bike", logo: "/sponzori/bruxel.webp" },
    { name: "Aqua Pro", logo: "/sponzori/aquapro.png" },
    { name: "Exodus Coworking", logo: "/sponzori/logo-exodus.svg" },
    { name: "Kalap", logo: "/sponzori/kalap2.png", small: true },
    { name: "Masážny salón Patty", logo: "/sponzori/patty.png" },
    { name: "Sedem Vaša kreatívna ", logo: "/sponzori/sedem.webp" },
    { name: "Pebar", logo: "/sponzori/pebar.png" },
    { name: "Letná záhradka", logo: "/sponzori/letna_zahradka.png" },
    { name: "Plus lekáreň", logo: "/sponzori/pluslekaren.png" },
    { name: "Iba z dreva", logo: "/sponzori/ibazdreva.png" },
  ],
};

// Jednotlivý sponzor komponent pre lepšiu čitateľnosť
function SponsorCard({ sponsor }) {
  const width = sponsor.large ? 220 : sponsor.small ? 100 : 140;
  const height = sponsor.large ? 118 : sponsor.small ? 54 : 74;
  return (
    <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform duration-200">
      <Image
        src={sponsor.logo || "/placeholder.svg"}
        alt={`Logo ${sponsor.name}`}
        width={width}
        height={height}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
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
