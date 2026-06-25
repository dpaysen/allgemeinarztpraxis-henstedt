import { createFileRoute, Link } from "@tanstack/react-router";

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

      {/* Services grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`rounded-xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-md ${idx === 4 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""}`}
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-lg bg-sage/30 text-primary">
              {idx === 2 ? (
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  {/* Linearschallkopf */}
                  {/* Kabel */}
                  <path d="M12 2v2.5" />
                  {/* Griff (schmal, länglich) */}
                  <rect x="9.5" y="4.5" width="5" height="7" rx="1" />
                  {/* Übergang zur Schallfläche */}
                  <path d="M8 11.5h8l-1 2H9l-1-2z" />
                  {/* Lineare Schallfläche (flach, breit) */}
                  <rect x="6" y="13.5" width="12" height="1.6" rx="0.3" />
                  {/* Element-Marker auf der Fläche */}
                  <path d="M8 14.3h.01M10 14.3h.01M12 14.3h.01M14 14.3h.01M16 14.3h.01" />
                  {/* Schallwellen (planar / parallel) */}
                  <path d="M7 17h10" />
                  <path d="M7.5 19.5h9" />
                </svg>
              ) : idx === 4 ? (
                <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  {/* Feuerwehr-Atemschutzmaske (Vollmaske) */}
                  {/* Bänderung */}
                  <path d="M4 7l3 1.5" />
                  <path d="M4 12h2.5" />
                  <path d="M4 17l3 -1.5" />
                  <path d="M20 7l-3 1.5" />
                  <path d="M20 12h-2.5" />
                  <path d="M20 17l-3 -1.5" />
                  {/* Maskenkörper */}
                  <path d="M12 3.5c3.2 0 5.5 2.2 5.5 5.3v3.4c0 1.6-.6 3-1.7 4l-1.6 1.5c-.6.5-1.4.8-2.2.8s-1.6-.3-2.2-.8l-1.6-1.5c-1.1-1-1.7-2.4-1.7-4V8.8C6.5 5.7 8.8 3.5 12 3.5z" />
                  {/* Sichtscheibe */}
                  <path d="M9 8.5c0-.6.5-1 1-1h4c.5 0 1 .4 1 1v2.2c0 .5-.4 1-1 1h-4c-.6 0-1-.5-1-1V8.5z" />
                  {/* Atemfilter / Regulator */}
                  <circle cx="12" cy="15.2" r="1.5" />
                </svg>
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
