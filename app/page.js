"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SponsorsSlider from "@/components/sponsors-slider";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { HoverUnderlineLink } from "../components/hover-underline-link";
import { Timeline, TimelineItem } from "@/components/timeline";
import { CountdownTimer } from "@/components/countdown-timer";
import { CookieBanner } from "@/components/cookie-banner";

function MapPlaceholder({ onAccept }) {
  return (
    <div className="flex items-center justify-center w-full h-64 rounded-md border-2 border-[#19ff7d] bg-[#05371b]/50 text-center p-4">
      <div>
        <p className="text-white mb-3 text-sm">
          Pre zobrazenie mapy je potrebný súhlas s cookies.
        </p>
        <button
          onClick={onAccept}
          className="bg-[#19ff7d] text-[#05371b] font-bold px-4 py-2 rounded-full text-sm hover:bg-[#19ff7d]/90 transition-colors cursor-pointer"
        >
          Prijať cookies
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(null);
  const sponsorYears = [2025, 2026];
  const [sponsorYear, setSponsorYear] = useState(2026);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") setCookiesAccepted(true);
    else if (consent === "declined") setCookiesAccepted(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setCookiesAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setCookiesAccepted(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const eventTargetDate = "2026-09-27T14:00:00";

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black to-[#05371b] text-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 h-16 md:h-20 flex items-center px-4 lg:px-8 bg-[#05371b]/75 backdrop-blur-md border-b border-[#19ff7d]/40 z-50">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0 text-[#19ff7d] font-bold text-base sm:text-2xl md:text-xl lg:text-2xl font-vina-sans uppercase whitespace-nowrap tracking-wide"
        >
          Beh Srdcom i telom
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <HoverUnderlineLink href="#program">Program</HoverUnderlineLink>
          <HoverUnderlineLink href="#hostia">Hostia</HoverUnderlineLink>
          <HoverUnderlineLink href="#trasy">Trasy</HoverUnderlineLink>
          <HoverUnderlineLink
            href="https://pretekaj.sk/sk/podujatia/hutcanska5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registrácia
          </HoverUnderlineLink>
          <HoverUnderlineLink href="#kontakt">Kontakt</HoverUnderlineLink>
        </nav>
        <Button
          asChild
          className="hidden md:inline-flex ml-auto bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold rounded-full text-base px-6 py-5"
        >
          <Link
            href="https://pretekaj.sk/sk/podujatia/hutcanska5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registrovať sa
          </Link>
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#05371b]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden pt-14"
        >
          <nav className="flex flex-col gap-6 text-2xl font-bold text-white">
            <Link
              href="#program"
              className="hover:underline underline-offset-4"
              onClick={toggleMobileMenu}
            >
              Program
            </Link>
            <Link
              href="#hostia"
              className="hover:underline underline-offset-4"
              onClick={toggleMobileMenu}
            >
              Hostia
            </Link>
            <Link
              href="#trasy"
              className="hover:underline underline-offset-4"
              onClick={toggleMobileMenu}
            >
              Trasy
            </Link>
            <Link
              href="https://pretekaj.sk/sk/podujatia/hutcanska5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
              onClick={toggleMobileMenu}
            >
              Registrácia
            </Link>
            <Link
              href="#kontakt"
              className="hover:underline underline-offset-4"
              onClick={toggleMobileMenu}
            >
              Kontakt
            </Link>
          </nav>
        </motion.div>
      )}

      <main className="flex-1 flex justify-center items-center flex-col">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/beh/1-min.jpg"
            alt="Beh Srdcom i telom v Nižnej Hutke"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

          <div className="relative z-10 flex flex-col items-center justify-center container px-4 md:px-6 mx-auto pt-20 sm:pt-24">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-2 sm:gap-4 md:gap-6 text-2xl sm:text-5xl md:text-6xl font-bold text-[#19ff7d] font-vina-sans uppercase drop-shadow-lg"
            >
              <span>Beh Srdcom i telom</span>
              <span>v Nižnej Hutke</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-lg md:text-xl text-white font-sans drop-shadow"
            >
              27. September 2026 · Nižná Hutka
              <br />
              <span className="text-[#19ff7d] font-bold">
                Vylepšená trasa, čisto asfalt!
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <CountdownTimer targetDate={eventTargetDate} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-10 md:mt-12 justify-center"
            >
              <Button
                asChild
                className="bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg"
              >
                <Link
                  href="https://pretekaj.sk/sk/podujatia/hutcanska5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registrovať sa
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-2 border-[#19ff7d] text-[#19ff7d] hover:text-[#19ff7d] hover:bg-transparent font-bold text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full"
              >
                <Link href="https://pretekaj.sk/hutcanska5" target="_blank">
                  Výsledky 2025
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Guests Section */}

        {/* Program Section */}
        <motion.section
          id="program"
          className="w-full py-16 md:py-24 text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="container px-4 md:px-6 mx-auto ">
            <h2 className="text-5xl font-bold text-center mb-12 text-[#19ff7d] font-vina-sans uppercase">
              Program Podujatia 2026
            </h2>
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-x-10 items-center">
              {/* Desktop vertical line, centered on the middle (dot) column */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-[#19ff7d]"></div>
              <div className="flex justify-center md:[grid-column:1] md:[grid-row:1/span_6] md:self-center">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#19ff7d] shadow-xl">
                  <Image
                    src="/plagat-druhyrocnik-beh2.png"
                    alt="Event Poster Placeholder"
                    layout="fill"
                  />
                </div>
              </div>
              <Timeline>
                  <TimelineItem
                    time="12:30"
                    title="Registrácia účastníkov"
                    description="Príprava na podujatie."
                  />
                  {/* <TimelineItem
                    time="13:30"
                    title="Krátka kázeň / bohoslužba s farárkou"
                    description="Duchovné zamyslenie (cca 10–15 min)."
                  /> */}
                  <TimelineItem
                    time="13:30"
                    title="Štart detského behu"
                    description="Trasa 100 m,  500 m  pre deti."
                  />
                  <TimelineItem
                    time="14:30"
                    title="Štart hlavného behu"
                    description="Trasa 5 km pre dospelých."
                  />
                  
                  <TimelineItem
                    time="15:00"
                    title="Občerstvenie"
                    description="Guláš pre bežcov."
                  />
                  <TimelineItem
                    time="15:00-15:30"
                    title="Panelová diskusia"
                    description="Diskusia: Dušan Havrila + Jakub Marton."
                  />
                  <TimelineItem
                    time="15:30"
                    title="Vyhodnotenie + poďakovanie + tombola"
                    description="Vyhlásenie víťazov, poďakovanie a tombola."
                  />
                </Timeline>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="hostia"
          className="w-full py-16 md:py-24 text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 text-[#19ff7d] font-vina-sans uppercase">
              Hostia 2026
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col h-full bg-[#05371b] rounded-xl border-2 border-[#19ff7d] overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-[0_0_32px_0_rgba(25,255,125,0.25)]">
                <div className="relative aspect-square w-full flex-shrink-0">
                  <Image
                    src="/dusan-havrila.jpg"
                    alt="Dušan Havrila"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05371b] to-transparent" />
                </div>
                <div className="flex-1 p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#19ff7d] font-sans mb-1">
                    Dušan Havrila
                  </h3>
                  <p className="text-xs text-[#19ff7d]/70 font-sans mb-4 uppercase tracking-widest">
                    Evanjelický farár
                  </p>
                  <p className="text-white/85 font-sans leading-relaxed text-sm mb-5">
                    PaedDr. Dušan Havrila, PhD. pôsobí ako zborový farár ECAV v
                    Košiciach a duchovný správca evanjelického gymnázia J. A.
                    Komenského. Je konseniorom Košického seniorátu a nositeľom
                    Ceny mesta Košice za dlhoročnú verejnoprospešnú a ekumenickú
                    činnosť.
                  </p>
                </div>
              </div>

              <div className="flex flex-col h-full bg-[#05371b] rounded-xl border-2 border-[#19ff7d] overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-[0_0_32px_0_rgba(25,255,125,0.25)]">
                <div className="relative aspect-square w-full flex-shrink-0">
                  <Image
                    src="/jakub-marton.jpg"
                    alt="Jakub Marton"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05371b] to-transparent" />
                </div>
                <div className="flex-1 p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#19ff7d] font-sans mb-1">
                    Jakub Marton
                  </h3>
                  <p className="text-xs text-[#19ff7d]/70 font-sans mb-4 uppercase tracking-widest">
                    Športovec & Tréner
                  </p>
                  <p className="text-white/85 font-sans leading-relaxed text-sm mb-5">
                    Certifikovaný osobný tréner a športovec z Košíc. Dokončil
                    Ironman 70.3, ultramaratón aj výstup na himalájsky vrchol
                    Mera Peak (6&nbsp;476 m n. m.) — a to len zlomok jeho
                    športových výkonov. Klientom všetkých vekových kategórií
                    pomáha objavovať radosť z pohybu a zdravého životného štýlu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Routes Section */}
        <motion.section
          id="trasy"
          className="w-full py-16 md:py-24 text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 text-[#19ff7d] font-vina-sans uppercase">
              Trasy 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#05371b] p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-[#19ff7d] font-sans">
                  5 km hlavný beh
                </h3>
                <p className="text-lg mb-4 font-sans">Pre skúsených bežcov.</p>
                <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden border-2 border-[#19ff7d]">
                  {cookiesAccepted ? (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m48!1m12!1m3!1d8022.395670059714!2d21.36205566119287!3d48.65594077833344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m33!3e2!4m3!3m2!1d48.654517!2d21.3655136!4m3!3m2!1d48.659414299999995!2d21.3605523!4m3!3m2!1d48.6594208!2d21.356633499999997!4m3!3m2!1d48.6695219!2d21.3562981!4m3!3m2!1d48.6638448!2d21.3536841!4m3!3m2!1d48.6586863!2d21.3605952!4m3!3m2!1d48.656368699999994!2d21.3597526!4m3!3m2!1d48.6545451!2d21.365497599999998!5e1!3m2!1ssk!2ssk!4v1784736319283!5m2!1ssk!2ssk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="5 km route map"
                    />
                  ) : (
                    <MapPlaceholder onAccept={handleAccept} />
                  )}
                </div>
                <Button
                  asChild
                  className="bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold rounded-full shadow-lg"
                >
                  <Link
                    href="https://maps.app.goo.gl/ijMjTJmKvhkLsRTa6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zobraziť na mape
                  </Link>
                </Button>
              </div>

              <div className="bg-[#05371b] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold mb-2 text-[#19ff7d] font-sans">
                  100 m, 500 m detský beh
                </h3>
                <p className="text-lg mb-4 font-sans">
                  Trasa pre deti. Trasu, ktorá bude v areáli strelnice sa účastníci dozvedia priamo na podujatí.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Registration Section */}
        <motion.section
          id="registracia"
          className="w-full py-16 md:py-24 text-white bg-[#05371b]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 md:px-6 text-center relative mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-[#19ff7d] font-vina-sans uppercase relative">
              Registrácia 2026
            </h2>
            <p className="text-lg md:text-xl mb-6 font-sans">
              Registrovať sa môžete online aj osobne, osobne však bude poplatok
              väčší. Štartovné čísla, spinky, zoznam účastníkov budú pripravené.
            </p>
            <Button
              asChild
              className="bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg"
            >
              <Link
                href="https://pretekaj.sk/sk/podujatia/hutcanska5/registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                Registrovať sa online
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Sponsors Section */}
        <motion.section
          id="sponzori"
          className="w-full py-16 md:py-24 text-white overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 md:px-6 text-center relative mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <button
                onClick={() =>
                  setSponsorYear((y) =>
                    sponsorYears[
                      (sponsorYears.indexOf(y) - 1 + sponsorYears.length) %
                        sponsorYears.length
                    ]
                  )
                }
                aria-label="Predchádzajúci ročník"
                className="text-[#19ff7d] hover:scale-110 transition-transform cursor-pointer"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <h2 className="text-5xl font-bold text-[#19ff7d] font-vina-sans uppercase relative">
                Naši Sponzori {sponsorYear}
              </h2>
              <button
                onClick={() =>
                  setSponsorYear(
                    (y) =>
                      sponsorYears[
                        (sponsorYears.indexOf(y) + 1) % sponsorYears.length
                      ]
                  )
                }
                aria-label="Ďalší ročník"
                className="text-[#19ff7d] hover:scale-110 transition-transform cursor-pointer"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
            <SponsorsSlider year={sponsorYear} />
          </div>
        </motion.section>

        {/* VŠZP Section */}
        <motion.section
          id="vszp"
          className="w-full py-16 md:py-24 text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#19ff7d] shadow-xl">
                  <Image
                    src="/vszp-plagat.png"
                    alt="VŠZP plagát"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#19ff7d] font-vina-sans uppercase">
                  VŠZP na podujatí
                </h2>
                <p className="text-lg md:text-xl font-sans">
                  Všeobecná zdravotná poisťovňa bude priamo na podujatí s
                  vlastným stánkom. Príďte si zmerať zdravie a dozvedieť sa
                  viac o preventívnych programoch.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="fotky"
          className="w-full py-16 md:py-24 text-white overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 md:px-6 text-center relative mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-[#19ff7d] font-vina-sans uppercase relative">
              Fotky 2025
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { src: "/beh/1-min.jpg", alt: "Beh Srdcom i telom — foto 1" },
                { src: "/beh/2-min.jpg", alt: "Beh Srdcom i telom — foto 2" },
                { src: "/beh/3-min.jpg", alt: "Beh Srdcom i telom — foto 3" },
                { src: "/beh/8-min.jpg", alt: "Beh Srdcom i telom — foto 4" },
                { src: "/beh/10-min.jpg", alt: "Beh Srdcom i telom — foto 5" },
              ].map(({ src, alt }) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-md aspect-square relative block"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </a>
              ))}
            </div>
            <br />
            <Button
              asChild
              className="bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg"
            >
              <Link
                href="https://eu.zonerama.com/diperspective/Album/13934090?secret=hn5CLB1w62wV27vKCE0NYiwvn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ďalšie fotky
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="kontakt"
          className="w-full py-16 md:py-24 text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 md:px-6 text-center mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-[#19ff7d] font-vina-sans uppercase">
              Kontakt
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
              <div className="flex flex-col items-center space-y-4 h-full">
                <h3 className="text-2xl font-bold text-[#19ff7d] font-sans">
                  Obec Nižná Hutka
                </h3>
                <Image
                  src="/logo-niznahutka.png"
                  alt="Logo obce Nižná Hutka"
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
                <HoverUnderlineLink
                  href="https://www.niznahutka.sk/"
                  className="text-lg font-sans text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.niznahutka.sk
                </HoverUnderlineLink>
                <p className="text-lg font-sans text-white">
                  starosta@niznahutka.sk
                </p>
                <p className="text-lg font-sans">+421 903 553 735</p>
              </div>
              <div className="flex flex-col items-center space-y-4 h-full">
                <h3 className="text-2xl font-bold text-[#19ff7d] font-sans">
                  Hlavný rozhodca: Peter Buc
                </h3>
                <p className="text-lg font-sans text-white">
                  peter.buc59@gmail.com
                </p>
                <p className="text-lg font-sans">+421 905 299 189</p>
              </div>
              <div className="flex flex-col items-center space-y-4 h-full">
                <h3 className="text-2xl font-bold text-[#19ff7d] font-sans">
                  Srdcom i telom
                </h3>
                <Image
                  src="/logo-srdcomitelom.png"
                  alt="Logo Srdcom i telom"
                  width={70}
                  height={70}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <HoverUnderlineLink
                  href="https://www.srdcomitelom.sk/"
                  className="text-lg font-sans text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.srdcomitelom.sk
                </HoverUnderlineLink>
                <p className="text-lg font-sans text-white">
                  srdcomitelom@gmail.com
                </p>
                <p className="text-lg font-sans">+421 917 085 569</p>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="w-full py-6 text-center text-sm border-t border-[#19ff7d]/20">
          <p className="mb-2">
            Stránku vytvoril{" "}
            <a
              href="https://www.jaroslav-portfolio.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#19ff7d] hover:underline"
            >
              Jaroslav Barabáš
            </a>
          </p>
          <p className="flex justify-center gap-4 text-xs text-white/60">
            <Link
              href="/ochrana-sukromia"
              className="hover:text-[#19ff7d] transition-colors"
            >
              Ochrana súkromia
            </Link>
            <span>·</span>
            <Link
              href="/cookies"
              className="hover:text-[#19ff7d] transition-colors"
            >
              Zásady cookies
            </Link>
          </p>
        </footer>
      </main>

      {cookiesAccepted === null && (
        <CookieBanner onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </div>
  );
}
