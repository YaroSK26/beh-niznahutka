import Link from "next/link";

export const metadata = {
  title: "Zásady cookies",
  description: "Informácie o cookies používaných na stránke niznahutkabeh.eu.",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#05371b] text-white">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#19ff7d] hover:underline mb-8 text-sm"
        >
          ← Späť na hlavnú stránku
        </Link>

        <h1 className="text-4xl font-bold text-[#19ff7d] font-vina-sans uppercase mb-2">
          Zásady cookies
        </h1>
        <p className="text-white/60 text-sm mb-10">
          Platné od: 19. mája 2026 · Posledná aktualizácia: 19. mája 2026
        </p>

        <article className="space-y-8 text-white/90 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">Čo sú cookies?</h2>
            <p>
              Cookies sú malé textové súbory, ktoré webová stránka ukladá do vášho prehliadača.
              Umožňujú stránke zapamätať si vaše nastavenia alebo sledovať správanie pre analytické účely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">Cookies na tejto stránke</h2>

            <h3 className="text-lg font-semibold text-white mb-2 mt-4">Analytika — Vercel Analytics</h3>
            <div className="bg-[#05371b] border border-[#19ff7d]/30 rounded-lg overflow-hidden mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#19ff7d]/20">
                    <th className="text-left px-4 py-3 text-[#19ff7d] font-semibold">Názov</th>
                    <th className="text-left px-4 py-3 text-[#19ff7d] font-semibold">Poskytovateľ</th>
                    <th className="text-left px-4 py-3 text-[#19ff7d] font-semibold">Účel</th>
                    <th className="text-left px-4 py-3 text-[#19ff7d] font-semibold">Platnosť</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs" colSpan={4}>
                      <span className="text-[#19ff7d]">Žiadne cookies</span> — Vercel Analytics je cookieless. Zbiera iba anonymizované agregované štatistiky (krajina, zariadenie, stránka). Nevyžaduje súhlas podľa ePrivacy.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 mt-6">Google Maps (iba po udelení súhlasu)</h3>
            <p className="text-sm text-white/70 mb-3">
              Tieto cookies nastaví Google pri načítaní vložených máp. Načítajú sa <strong>iba ak súhlasíte s cookies</strong>.
            </p>
            <div className="bg-[#05371b] border border-[#19ff7d]/30 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[500px]">
                  <thead>
                    <tr className="border-b border-[#19ff7d]/20">
                      <th className="text-left px-4 py-3 text-[#19ff7d] font-semibold">Názov</th>
                      <th className="text-left px-4 py-3 text-[#19ff7d] font-semibold">Poskytovateľ</th>
                      <th className="text-left px-4 py-3 text-[#19ff7d] font-semibold">Účel</th>
                      <th className="text-left px-4 py-3 text-[#19ff7d] font-semibold">Platnosť</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#19ff7d]/10">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">CONSENT</td>
                      <td className="px-4 py-3 text-xs">Google LLC</td>
                      <td className="px-4 py-3 text-xs">Ukladá preferencie súhlasu používateľa</td>
                      <td className="px-4 py-3 text-xs">2 roky</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">SOCS</td>
                      <td className="px-4 py-3 text-xs">Google LLC</td>
                      <td className="px-4 py-3 text-xs">Nastavenia súhlasu s cookies (Google)</td>
                      <td className="px-4 py-3 text-xs">13 mesiacov</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">NID</td>
                      <td className="px-4 py-3 text-xs">Google LLC</td>
                      <td className="px-4 py-3 text-xs">Personalizácia obsahu a reklám Google</td>
                      <td className="px-4 py-3 text-xs">6 mesiacov</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">1P_JAR</td>
                      <td className="px-4 py-3 text-xs">Google LLC</td>
                      <td className="px-4 py-3 text-xs">Štatistiky a ochrana pred zneužitím</td>
                      <td className="px-4 py-3 text-xs">30 dní</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs">AEC</td>
                      <td className="px-4 py-3 text-xs">Google LLC</td>
                      <td className="px-4 py-3 text-xs">Ochrana pred automatizovanými útokmi</td>
                      <td className="px-4 py-3 text-xs">6 mesiacov</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-white/50 mt-2">
              Zoznam Google cookies sa môže meniť. Úplné informácie:{" "}
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19ff7d] hover:underline"
              >
                policies.google.com/technologies/cookies
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">Správa súhlasu</h2>
            <p>
              Pri prvej návšteve zobrazíme lištu s možnosťou <strong>Prijať</strong> alebo <strong>Odmietnuť</strong> cookies tretích strán.
              Váš výber sa uloží lokálne v prehliadači (<code className="text-[#19ff7d] text-xs bg-black/30 px-1 py-0.5 rounded">localStorage</code>)
              — nie je to cookie.
            </p>
            <p className="mt-2">
              Súhlas môžete kedykoľvek odvolať vymazaním údajov prehliadača alebo kontaktovaním prevádzkovateľa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">Správa cookies v prehliadači</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Chrome:</strong> Nastavenia → Súkromie a zabezpečenie → Súbory cookie a iné údaje stránok
              </li>
              <li>
                <strong>Firefox:</strong> Nastavenia → Súkromie a zabezpečenie → Cookies a údaje stránok
              </li>
              <li>
                <strong>Safari:</strong> Nastavenia → Safari → Ochrana súkromia
              </li>
              <li>
                <strong>Edge:</strong> Nastavenia → Súkromie, vyhľadávanie a služby → Súbory cookie
              </li>
            </ul>
          </section>

        </article>

        <div className="mt-12 pt-6 border-t border-[#19ff7d]/20 text-center text-xs text-white/40">
          <Link href="/" className="hover:text-[#19ff7d] transition-colors">
            niznahutkabeh.eu
          </Link>
          {" · "}
          <Link href="/ochrana-sukromia" className="hover:text-[#19ff7d] transition-colors">
            Ochrana súkromia
          </Link>
        </div>
      </div>
    </div>
  );
}
