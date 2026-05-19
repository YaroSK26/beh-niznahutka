import Link from "next/link";

export const metadata = {
  title: "Ochrana súkromia",
  description:
    "Zásady ochrany osobných údajov webu Beh Srdcom i telom — niznahutkabeh.eu.",
  robots: { index: false },
};

export default function OchranaSukromia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#05371b] text-white">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#19ff7d] hover:underline mb-8 text-sm"
        >
          ← Späť na hlavnú stránku
        </Link>

        <h1 className="text-4xl font-bold text-[#19ff7d] font-vina-sans mb-2">
          Zásady ochrany osobných údajov
        </h1>
        <p className="text-white/60 text-sm mb-10">
          Platné od: 19. mája 2026 · Posledná aktualizácia: 19. mája 2026
        </p>

        <article className="prose prose-invert prose-green max-w-none space-y-8 text-white/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">
              1. Prevádzkovateľ
            </h2>
            <p>
              Prevádzkovateľom tejto webovej stránky (
              <strong>www.niznahutkabeh.eu</strong>) je:
            </p>
            <div className="bg-[#05371b] border border-[#19ff7d]/30 rounded-lg p-4 mt-3 space-y-1 text-sm">
              <p>
                <strong>Jaroslav Barabáš — Srdcom i telom</strong>
              </p>
              <p>IČO: 56652216</p>
              <p>DIČ: 1130024159</p>
              <p>Sídlo: Košice</p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:srdcomitelom@gmail.com"
                  className="text-[#19ff7d] hover:underline"
                >
                  srdcomitelom@gmail.com
                </a>
              </p>
              <p>Telefón: +421 917 085 569</p>
              <p>
                Web:{" "}
                <a
                  href="https://www.srdcomitelom.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#19ff7d] hover:underline"
                >
                  www.srdcomitelom.sk
                </a>
              </p>
            </div>
            <p className="mt-3">Spoluorganizátor podujatia:</p>
            <div className="bg-[#05371b] border border-[#19ff7d]/30 rounded-lg p-4 mt-2 space-y-1 text-sm">
              <p>
                <strong>Obec Nižná Hutka</strong>
              </p>
              <p>IČO: 00690317</p>
              <p>DIČ: 2021261242</p>
              <p>Sídlo: Ortášska 85/8, 040 18 Nižná Hutka</p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:starosta@niznahutka.sk"
                  className="text-[#19ff7d] hover:underline"
                >
                  starosta@niznahutka.sk
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">
              2. Aké údaje spracúvame
            </h2>
            <p>
              Táto webová stránka{" "}
              <strong>
                nezbiera ani nespracúva osobné údaje návštevníkov priamo
              </strong>
              . Neobsahuje kontaktný formulár, registráciu ani prihlasovanie.
            </p>
            <p className="mt-2">
              Stránka využíva nasledujúce externé služby, ktoré môžu spracúvať
              určité technické údaje:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Vercel Analytics</strong> — anonymizované štatistiky
                návštevnosti bez cookies (pozri nižšie)
              </li>
              <li>
                <strong>Google Maps</strong> — vkladané mapy tras; Google
                spracúva údaje podľa vlastných podmienok (iba po udelení
                súhlasu)
              </li>
            </ul>
            <p className="mt-2">
              Registrácia na beh prebieha cez externú platformu{" "}
              <a
                href="https://pretekaj.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19ff7d] hover:underline"
              >
                pretekaj.sk
              </a>
              , ktorá je samostatným prevádzkovateľom a spracúva osobné údaje
              účastníkov podľa vlastných zásad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">
              3. Vercel Analytics
            </h2>
            <p>
              Stránka používa <strong>Vercel Analytics</strong> — nástroj na
              meranie návštevnosti, ktorý je navrhnutý s ohľadom na súkromie.
              Vercel Analytics:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>nepoužíva súbory cookies</li>
              <li>neidentifikuje konkrétnych používateľov</li>
              <li>
                zbiera iba agregované štatistiky (počet návštev, krajina,
                zariadenie)
              </li>
              <li>nezdieľa údaje s tretími stranami na reklamné účely</li>
            </ul>
            <p className="mt-2">
              Právny základ: oprávnený záujem (čl. 6 ods. 1 písm. f) GDPR) —
              sledovanie výkonu a zlepšovanie stránky.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">
              4. Google Maps
            </h2>
            <p>
              Na stránke sú vložené mapy trás od spoločnosti Google LLC. Tieto
              mapy sa načítajú <strong>iba po udelení vášho súhlasu</strong> s
              cookies. Google môže pri zobrazení máp spracúvať vašu IP adresu a
              nastaviť súbory cookies podľa svojich{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19ff7d] hover:underline"
              >
                Zásad ochrany súkromia
              </a>
              .
            </p>
            <p className="mt-2">
              Právny základ: súhlas (čl. 6 ods. 1 písm. a) GDPR). Súhlas môžete
              kedykoľvek odvolať vymazaním cookies v prehliadači.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">
              5. Vaše práva
            </h2>
            <p>Podľa GDPR máte právo:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Právo na prístup</strong> — vedieť, aké údaje o vás
                spracúvame
              </li>
              <li>
                <strong>Právo na opravu</strong> — požiadať o opravu nesprávnych
                údajov
              </li>
              <li>
                <strong>Právo na vymazanie</strong> — &quot;právo byť
                zabudnutý&quot;
              </li>
              <li>
                <strong>Právo namietať</strong> — namietať spracúvanie na
                základe oprávneného záujmu
              </li>
              <li>
                <strong>Právo na prenositeľnosť</strong> — získať svoje údaje v
                strojovo čitateľnom formáte
              </li>
              <li>
                <strong>Právo podať sťažnosť</strong> — na Úrad na ochranu
                osobných údajov SR (
                <a
                  href="https://www.dataprotection.gov.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#19ff7d] hover:underline"
                >
                  dataprotection.gov.sk
                </a>
                )
              </li>
            </ul>
            <p className="mt-2">
              Na uplatnenie práv nás kontaktujte na:{" "}
              <a
                href="mailto:srdcomitelom@gmail.com"
                className="text-[#19ff7d] hover:underline"
              >
                srdcomitelom@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">
              6. Cookies
            </h2>
            <p>
              Podrobný zoznam cookies používaných na tejto stránke nájdete v{" "}
              <Link href="/cookies" className="text-[#19ff7d] hover:underline">
                Zásadách cookies
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#19ff7d] mb-3">
              7. Zmeny zásad
            </h2>
            <p>
              Tieto zásady môžeme aktualizovať. Aktuálna verzia je vždy dostupná
              na tejto stránke s dátumom poslednej aktualizácie.
            </p>
          </section>
        </article>

        <div className="mt-12 pt-6 border-t border-[#19ff7d]/20 text-center text-xs text-white/40">
          <Link href="/" className="hover:text-[#19ff7d] transition-colors">
            niznahutkabeh.eu
          </Link>
          {" · "}
          <Link
            href="/cookies"
            className="hover:text-[#19ff7d] transition-colors"
          >
            Zásady cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
