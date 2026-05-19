"use client";
import Link from "next/link";

export function CookieBanner({ onAccept, onDecline }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#05371b] border-t-2 border-[#19ff7d] shadow-2xl">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-white text-sm leading-relaxed">
            Tento web používa cookies tretích strán (Google Maps) pre zobrazenie máp.
            Analytika Vercel je bez cookies.{" "}
            <Link
              href="/cookies"
              className="text-[#19ff7d] underline hover:no-underline"
            >
              Zásady cookies
            </Link>
            {" · "}
            <Link
              href="/ochrana-sukromia"
              className="text-[#19ff7d] underline hover:no-underline"
            >
              Ochrana súkromia
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={onDecline}
            className="px-4 py-2 rounded-full border border-[#19ff7d] text-[#19ff7d] text-sm font-medium hover:bg-[#19ff7d]/10 transition-colors cursor-pointer"
          >
            Odmietnuť
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 rounded-full bg-[#19ff7d] text-[#05371b] text-sm font-bold hover:bg-[#19ff7d]/90 transition-colors cursor-pointer"
          >
            Prijať
          </button>
        </div>
      </div>
    </div>
  );
}
