"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SponsorsSlider from "@/components/sponsors-slider";
import { motion } from "framer-motion";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { HoverUnderlineLink } from "../components/hover-underline-link";
import { Timeline, TimelineItem } from "@/components/timeline";
import { CountdownTimer } from "@/components/countdown-timer"; // Import the new component

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Animation variants for sections
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

  // Set the target date for the main run (September 28, 15:00)
  // Assuming the current year is 2025 based on the provided context date.
  const eventTargetDate = "2025-09-28T15:00:00";

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black to-[#05371b] text-white">
      {/* Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] h-16 flex items-center justify-between px-4 lg:px-6 shadow-lg bg-[#05371b] rounded-full border-l-2 border-r-2 border-[#19ff7d] z-50">
        <Link
          href="/"
          className="flex items-center justify-center text-[#19ff7d] font-bold text-4xl font-vina-sans h-full pl-2 relative" // Changed to text-4xl for consistent size
        >
          HUTCANSKA 5
          {/* Adjusted text size for decorative characters to match new heading size */}
          <span className="absolute top-0 left-[20%] translate-x-[20px] translate-y-[10px] text-2xl text-[#19ff7d]">
            ˇ
          </span>
          <span className="absolute top-0 left-[50%] translate-x-[47.5px] translate-y-[10px] text-2xl text-[#19ff7d]">
            ´
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
          <HoverUnderlineLink href="#program">Program</HoverUnderlineLink>
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
      <main className="flex-1 pt-24 flex justify-center items-center flex-col">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-center overflow-hidden p-4">
          <div className="relative z-10 flex flex-col items-center justify-center container px-4 md:px-6 mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className=" text-4xl sm:text-6xl font-bold text-[#19ff7d] font-vina-sans drop-shadow-lg relative" // Changed to text-6xl for consistent size
            >
              HUTCANSKA 5 S VIEROU
              {/* Adjusted text size for decorative characters to match new heading size */}
              <span className="absolute top-0 left-[20%] -translate-x-[12px] -translate-y-[0px] text-4xl text-[#19ff7d]">
                ˇ
              </span>
              <span className="absolute top-0 left-[50%] -translate-x-[15px] -translate-y-[0px] text-4xl text-[#19ff7d]">
                ´
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-4 text-xl lg:text-2xl text-white font-sans"
            >
              Beh srdcom i telom
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-2 text-lg md:text-xl text-white font-sans"
            >
              28. September 2025 | Strelnica, Nižná Hutka
            </motion.p>
            {/* Countdown Timer */}
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
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} // Adjusted delay
            >
              <Button
                asChild
                className="mt-8 bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg"
              >
                <Link href="https://www.pretekaj.sk/" target="_blank">
                  Registrovať sa
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        {/* Program Section */}
        <motion.section
          id="program"
          className="w-full py-16 md:py-24 text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 text-[#19ff7d] font-vina-sans">
              Program Podujatia
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Poster Image Placeholder - Left on desktop, top on mobile */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#19ff7d] shadow-xl">
                  <Image
                    src="/poster.png" // You can replace this with your actual poster image path
                    alt="Event Poster Placeholder"
                    layout="fill"
                  />
                </div>
              </div>
              {/* Timeline - Right on desktop, bottom on mobile */}
              <div>
                <Timeline>
                  <TimelineItem
                    time="13:00"
                    title="Registrácia účastníkov"
                    description="Príprava na podujatie."
                  />
                  <TimelineItem
                    time="14:00"
                    title="Rozcvička pre deti"
                    description="Krátka rozcvička (cca 5 min)."
                  />
                  <TimelineItem
                    time="14:15"
                    title="Štart detského behu"
                    description="Trasa 500 m pre najmenších."
                  />
                  <TimelineItem
                    time="14:30"
                    title="Krátka kázeň / bohoslužba s farárkou"
                    description="Duchovné zamyslenie (cca 10–15 min)."
                  />
                  <TimelineItem
                    time="14:45"
                    title="Rozcvička pre dospelých"
                    description="Krátka rozcvička (cca 5 min)."
                  />
                  <TimelineItem
                    time="15:00"
                    title="Štart hlavného behu"
                    description="Trasa 5 km pre dospelých."
                  />
                  <TimelineItem
                    time="15:00 - 17:00"
                    title="Občerstvenie"
                    description="Guláš a ďalšie dobroty pre všetkých účastníkov."
                  />
                  <TimelineItem
                    time="16:00"
                    title="Vyhodnotenie + poďakovanie + tombola"
                    description="Vyhlásenie víťazov, poďakovanie a tombola."
                  />
                  <TimelineItem
                    time="17:00"
                    title="Panelová diskusia"
                    description="Diskusia: Peter Polák + Peter Gombita."
                  />
                  <TimelineItem
                    time="18:30"
                    title="Hudobný program"
                    description="Koncert skupiny Kalap / iná skupina."
                  />
                </Timeline>
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
              Trasy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#05371b] p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-[#19ff7d] font-sans">
                  5 km hlavný beh
                </h3>
                <p className="text-lg mb-4 font-sans">Pre skúsených bežcov.</p>
                {/* Image for 5 km route */}
                <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden border-2 border-[#19ff7d]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d8674.803168941631!2d21.350305060493238!3d48.659912940890806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e2!4m3!3m2!1d48.654196!2d21.3660183!4m3!3m2!1d48.658684!2d21.360505999999997!4m3!3m2!1d48.662298299999996!2d21.353879!4m3!3m2!1d48.6630098!2d21.360084699999998!4m3!3m2!1d48.662998599999995!2d21.3659832!4m3!3m2!1d48.6582875!2d21.3643347!4m3!3m2!1d48.6541314!2d21.366131199999998!5e1!3m2!1ssk!2ssk!4v1752834633766!5m2!1ssk!2ssk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="5 km route map"
                  ></iframe>
                </div>
                <Button
                  asChild
                  className="bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold rounded-full shadow-lg"
                >
                  <Link
                    href="https://www.google.com/maps/dir/48.6545984,21.3652617/040+18+Ni%C5%BEn%C3%A1+Hutka,+Slovensko/48.6622983,21.353879/48.6630098,21.3600847/48.6629986,21.3659832/48.6582875,21.3643347/48.6544274,21.3649726/@48.6593348,21.3646067,1790m/data=!3m1!1e3!4m19!4m18!1m0!1m10!1m1!1s0x473f274dd1a31f59:0x13a2fb158c25e32d!2m2!1d21.3604763!2d48.6594738!3m4!1m2!1d21.3564506!2d48.6588108!3s0x473f275299bace8b:0xaa2ec4b0ccf58d44!1m0!1m0!1m0!1m0!1m0!3e2?hl=sk-SK&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
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
                {/* Image for Kids route */}
                <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden border-2 border-[#19ff7d]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2168.945228184228!2d21.36338242645262!3d48.65423132130512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m3!3m2!1d48.6534951!2d21.3672447!4m3!3m2!1d48.6549676!2d21.36467!4m3!3m2!1d48.653653399999996!2d21.3671987!5e1!3m2!1ssk!2ssk!4v1753130637868!5m2!1ssk!2ssk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kids route map"
                  ></iframe>
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
          className="w-full py-16 md:py-24 text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container px-4 md:px-6 text-center relative mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-[#19ff7d] font-vina-sans relative">
              Registracia
              {/* Adjusted text size for decorative characters to match new heading size */}
              <span className="absolute top-0 left-[50%] translate-x-[35px] -translate-y-[0px] text-4xl text-[#19ff7d]">
                ´
              </span>
            </h2>
            <p className="text-lg md:text-xl mb-6 font-sans">
              Registrovať sa môžete len online. Štartovné čísla, spinky, zoznam účastníkov budú pripravené.
            </p>
           
            <Button
              asChild
              className="bg-[#19ff7d] text-[#05371b] hover:bg-[#19ff7d]/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg"
            >
              <Link
                href="https://www.pretekaj.sk/"
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
              Nasi Sponzori
              {/* Adjusted text size for decorative characters to match new heading size */}
              <span className="absolute top-0 left-[50%] -translate-x-[72px] -translate-y-[0px] text-4xl text-[#19ff7d]">
                ˇ
              </span>
            </h2>
            <SponsorsSlider />
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
            <div className="grid md:grid-cols-2 gap-8 items-stretch justify-center">
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
                <p className="text-lg font-sans text-white ">
                  obecniznahutka@netkosice.sk
                </p>
                <p className="text-lg font-sans">+421 903 553 735</p>
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
                  className="text-lg font-sans text-white "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.srdcomitelom.sk
                </HoverUnderlineLink>
                <p className="text-lg font-sans text-white ">
                  srdcomitelom@gmail.com
                </p>
                <p className="text-lg font-sans">+421 917 085 569</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
