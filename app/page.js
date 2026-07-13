"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SponsorsSlider from "@/components/sponsors-slider";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
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
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] h-16 flex items-center justify-between px-4 lg:px-6 shadow-lg bg-[#05371b] rounded-full border-l-2 border-r-2 border-[#19ff7d] z-50">
        <Link
          href="/"
          className="flex items-center justify-center text-[#19ff7d] font-bold text-3xl sm:text-4xl font-vina-sans  h-full pl-2 relative"
        >
          Beh Srdcom i telom
        </Link>
        <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
          <HoverUnderlineLink href="#program">Program</HoverUnderlineLink>
          <HoverUnderlineLink href="#hostia">Hostia</HoverUnderlineLink>
          <HoverUnderlineLink href="#trasy">Trasy</HoverUnderlineLink>
          <HoverUnderlineLink href="#registracia">
            Registrácia
          </HoverUnderlineLink>
          <HoverUnderlineLink href="#kontakt">Kontakt</HoverUnderlineLink>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
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
              href="#registracia"
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

          <div className="relative z-10 flex flex-col items-center justify-center container px-4 md:px-6 mx-auto pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 text-4xl sm:text-6xl font-bold text-[#19ff7d] font-vina-sans  drop-shadow-lg"
            >
              <span>Beh Srdcom i telom</span>
              <span>v Nižnej Hutke</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-2 text-lg md:text-xl text-white font-sans drop-shadow"
            >
              27. September 2026 | Strelnica, Nižná Hutka <br />
              Rozhodca: Peter Buc
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
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
            >
              <Button
                asChild
                className="bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg"
              >
                <Link href="#registracia">Registrovať sa</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-2 border-[#19ff7d] text-[#19ff7d] hover:text-[#19ff7d] hover:bg-transparent font-bold text-lg px-8 py-6 rounded-full"
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
            <h2 className="text-5xl font-bold text-center mb-12 text-[#19ff7d] font-vina-sans">
              Program Podujatia 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#19ff7d] shadow-xl">
                  <Image
                    src="/poster2026.png"
                    alt="Event Poster Placeholder"
                    layout="fill"
                  />
                </div>
              </div>
              <div>
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
                    time="14:00"
                    title="Štart hlavného behu"
                    description="Trasa 5 km pre dospelých."
                  />
                  <TimelineItem
                    time="14:10"
                    title="Štart detského behu"
                    description="Trasa 500 m pre najmenších."
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
                  <TimelineItem
                    time="16:00"
                    title="Hudobný program"
                    description="Koncert skupiny Kalap."
                  />
                </Timeline>
              </div>
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
            <h2 className="text-5xl font-bold text-center mb-12 text-[#19ff7d] font-vina-sans">
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
            <h2 className="text-5xl font-bold text-center mb-12 text-[#19ff7d] font-vina-sans">
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
                      src="https://www.google.com/maps/embed?pb=!1m48!1m12!1m3!1d8674.777698640837!2d21.3503050711282!3d48.660060940891974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m33!3e2!4m5!1s0x473f274dffbddbf1%3A0x614f86687427ac!2zVXJiw6Fyc2vDoSwgMDQwIDE4IE5pxb5uw6EgSHV0a2E!3m2!1d48.6555134!2d21.363513299999997!4m5!1s0x473f274dd1a31f59%3A0x13a2fb158c25e32d!2s040%2018%20Ni%C5%BEn%C3%A1%20Hutka%2C%20Slovensko!3m2!1d48.6594738!2d21.3604763!4m3!3m2!1d48.662298299999996!2d21.353879!4m3!3m2!1d48.6630098!2d21.360084699999998!4m3!3m2!1d48.662998599999995!2d21.3659832!4m3!3m2!1d48.6582875!2d21.3643347!4m3!3m2!1d48.654427399999996!2d21.364972599999998!5e1!3m2!1ssk!2ssk!4v1758983671914!5m2!1ssk!2ssk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
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
                    href="https://www.google.com/maps/embed?pb=!1m32!1m12!1m3!1d1084.471241279228!2d21.364561088783315!3d48.654295142826285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m17!3e2!4m3!3m2!1d48.6546137!2d21.365284499999998!4m3!3m2!1d48.6535078!2d21.3672225!4m3!3m2!1d48.6550825!2d21.3644847!4m3!3m2!1d48.6546982!2d21.3653007!5e1!3m2!1ssk!2ssk!4v1759085145372!5m2!1ssk!2ssk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zobraziť na mape
                  </Link>
                </Button>
              </div>

              <div className="bg-[#05371b] p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-[#19ff7d] font-sans">
                  500m detský beh
                </h3>
                <p className="text-lg mb-4 font-sans">
                  Zábavná trasa pre najmenších.
                </p>
                <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden border-2 border-[#19ff7d]">
                  {cookiesAccepted ? (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m32!1m12!1m3!1d1084.471241279228!2d21.364561088783315!3d48.654295142826285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m17!3e2!4m3!3m2!1d48.6546137!2d21.365284499999998!4m3!3m2!1d48.6535078!2d21.3672225!4m3!3m2!1d48.6550825!2d21.3644847!4m3!3m2!1d48.6546982!2d21.3653007!5e1!3m2!1ssk!2ssk!4v1759085145372!5m2!1ssk!2ssk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kids route map"
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
                    href="https://www.google.com/maps/dir/48.6549185,21.3647534/48.655751,21.359613/48.6561994,21.3607563/48.6549733,21.3647796/@48.6553347,21.3596083,498m/data=!3m1!1e3!4m2!4m1!3e2?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zobraziť na mape
                  </Link>
                </Button>
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
            <h2 className="text-5xl font-bold mb-8 text-[#19ff7d] font-vina-sans relative">
              Registracia 2026
              <span className="absolute top-0 left-[50%] translate-x-[-10px] -translate-y-[0px] text-4xl text-[#19ff7d]">
                ´
              </span>
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
                href="https://pretekaj.sk/hutcanska5"
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
            <h2 className="text-5xl font-bold mb-12 text-[#19ff7d] font-vina-sans relative">
              Naši Sponzori 2026
            </h2>
            <SponsorsSlider />
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
            <h2 className="text-5xl font-bold mb-12 text-[#19ff7d] font-vina-sans relative">
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
            <h2 className="text-5xl font-bold mb-8 text-[#19ff7d] font-vina-sans">
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
