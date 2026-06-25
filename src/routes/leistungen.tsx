import { createFileRoute, Link } from "@tanstack/react-router";
import schallkopfAsset from "@/assets/ultraschall.png.asset.json";
import maskeAsset from "@/assets/maske.png.asset.json";
import spritzeAsset from "@/assets/spritze.png.asset.json";
import laborAsset from "@/assets/labor.png.asset.json";
import lungeAsset from "@/assets/lunge.png.asset.json";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Allgemeinarztpraxis Henstedt" },
      { name: "description", content: "Unser Leistungsspektrum: Vorsorge, chronische Erkrankungen, Akutversorgung, Labor, Impfungen und mehr." },
      { property: "og:title", content: "Leistungen — Allgemeinarztpraxis Henstedt" },
      { property: "og:description", content: "Unser Leistungsspektrum in der Allgemeinarztpraxis Henstedt." },
    ],
  }),
  component: LeistungenPage,
});

const services = [
  {
    title: "Gesundheits- und Vorsorgeuntersuchungen",
    description:
      "Vorbeugen ist besser als heilen. Wir unterstützen Sie dabei, Ihre Gesundheit aktiv zu schützen.",
    items: [
      "Gesundheitsuntersuchung für Frauen und Männer",
      "Hautkrebsscreening",
      "Krebsvorsorge für Männer",
      "Jugendgesundheitsuntersuchung",
      "Jugendarbeitsschutzuntersuchungen",
      "Impfberatung und Impfungen",
    ],
  },
  {
    title: "Disease Management Programme (DMP)",
    description:
      "Chronische Erkrankungen brauchen kontinuierliche Aufmerksamkeit. In unseren DMP-Programmen begleiten wir Sie medizinisch und menschlich – strukturiert, fundiert und verlässlich.",
    items: [
      "Diabetes mellitus Typ II",
      "Koronare Herzkrankheit (KHK)",
      "Asthma bronchiale",
      "Chronisch obstruktive Lungenerkrankung (COPD)",
      "Osteoporose",
    ],
  },
  {
    title: "Technische Untersuchungen",
    description:
      "Moderne Technik für präzise Diagnosen. Mit aktueller Ausstattung unterstützen wir die ärztliche Einschätzung durch aussagekräftige Untersuchungen.",
    items: [
      "Laboruntersuchungen mit POCT (akut sofort Labor Vorort) ",
      "Sonographie (Ultraschall Abdomen und Schilddrüse)",
      "Lungenfunktionsprüfung",
      "EKG und Belastungs-EKG (Ergometrie)",
      "Langzeit-EKG",
      "Langzeit-Blutdruckmessung",
    ],
  },
  {
    title: "Individuelle Gesundheitsleistungen (IGeL)",
    description:
      "Mehr Klarheit für Ihre Gesundheit. Diese freiwilligen Zusatzangebote ermöglichen Ihnen einen noch tieferen Einblick in Ihre gesundheitliche Situation.",
    items: [
      "Umfassender Gesundheitscheck inkl. Labor, EKG und Ultraschall (Schilddrüse und Oberbauch)",
      "Schilddrüsencheck",
      "Reiseimpfberatung und Reiseimpfungen",
      "Vitaminaufbauspritzen",
      "Hörtest",
      "Sehtest",
    ],
  },
  {
    title: "Untersuchung für Atemschutzgeräteträger der Feuerwehr",
    description:
      "Sicher im Einsatz: Wir führen die gesetzlich vorgeschriebene Eignungsuntersuchung nach G26.3 für Mitglieder der Freiwilligen Feuerwehr direkt bei uns in der Praxis durch.",
    items: [
      "Ärztliches Gespräch und körperliche Untersuchung",
      "Blutabnahme",
      "Belastungs-EKG (Ergometrie)",
      "Lungenfunktionsprüfung",
      "Sehtest",
      "Hörtest",
    ],
  },
];

function LeistungenPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">Unsere Leistungen</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          So individuell wie Ihre Gesundheit und so umfassend wie Ihr Körper.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          In unserer Hausarztpraxis steht der Mensch im Mittelpunkt – mit all seinen
          gesundheitlichen Fragen, Bedürfnissen und Lebensphasen. Ob Vorsorge, akute
          Beschwerden oder langfristige Begleitung: Wir bieten medizinische Versorgung
          auf hohem fachlichen Niveau – mit Zeit, Ruhe und einem offenen Ohr.
        </p>
      </div>

      {/* EKG strip */}
      <div className="relative mt-10 h-16 w-full overflow-hidden bg-background">
        <style>{`
          @keyframes ekg-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .ekg-track { animation: ekg-scroll 8s linear infinite; }
        `}</style>
        <div className="ekg-track flex h-full w-[200%]">
          {[0, 1].map((i) => (
            <svg
              key={i}
              viewBox="0 0 600 64"
              preserveAspectRatio="none"
              className="h-full w-1/2 shrink-0 text-primary"
              aria-hidden="true"
            >
              <path
                d="M0 32 L60 32 Q72 22 84 32 L100 32 L104 36 L108 4 L112 60 L116 32 L140 32 Q155 22 170 32 L200 32 L260 32 Q272 22 284 32 L300 32 L304 36 L308 4 L312 60 L316 32 L340 32 Q355 22 370 32 L400 32 L460 32 Q472 22 484 32 L500 32 L504 36 L508 4 L512 60 L516 32 L540 32 Q555 22 570 32 L600 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`rounded-xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-md animate-in fade-in duration-700 fill-mode-backwards ${idx % 2 === 0 ? "slide-in-from-left-16" : "slide-in-from-right-16"} ${idx === 4 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""}`}
            style={{ animationDelay: `${idx * 120}ms`, animationFillMode: "backwards" }}
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-lg bg-sage/30 text-primary">
              {idx === 2 ? (
                <span
                  aria-label="Sonographie-Schallkopf"
                  role="img"
                  className="h-12 w-12 bg-primary"
                  style={{
                    WebkitMaskImage: `url(${schallkopfAsset.url})`,
                    maskImage: `url(${schallkopfAsset.url})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              ) : idx === 3 ? (
                <span
                  aria-label="Labor"
                  role="img"
                  className="h-12 w-12 bg-primary"
                  style={{
                    WebkitMaskImage: `url(${laborAsset.url})`,
                    maskImage: `url(${laborAsset.url})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              ) : idx === 4 ? (
                <span
                  aria-label="Atemschutzmaske"
                  role="img"
                  className="h-12 w-12 bg-primary"
                  style={{
                    WebkitMaskImage: `url(${maskeAsset.url})`,
                    maskImage: `url(${maskeAsset.url})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              ) : idx === 0 ? (
                <span
                  aria-label="Spritze"
                  role="img"
                  className="h-12 w-12 bg-primary"
                  style={{
                    WebkitMaskImage: `url(${spritzeAsset.url})`,
                    maskImage: `url(${spritzeAsset.url})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              ) : idx === 1 ? (
                <span
                  aria-label="Lunge"
                  role="img"
                  className="h-12 w-12 bg-primary"
                  style={{
                    WebkitMaskImage: `url(${lungeAsset.url})`,
                    maskImage: `url(${lungeAsset.url})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              ) : (
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">
              {service.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-foreground">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-12 rounded-xl bg-cream p-6 ring-1 ring-border">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Nicht das Richtige dabei?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Sprechen Sie uns einfach an. Bei Bedarf vermitteln wir Sie auch
              gerne an spezialisierte Fachärzte oder Kliniken in der Region.
            </p>
            <Link
              to="/kontakt"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-teal-dark"
            >
              Kontakt aufnehmen
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
