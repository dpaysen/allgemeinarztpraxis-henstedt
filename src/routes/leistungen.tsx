import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Praxis Dr. Müller" },
      { name: "description", content: "Unser Leistungsspektrum: Vorsorge, chronische Erkrankungen, Akutversorgung, Labor, Impfungen und mehr." },
      { property: "og:title", content: "Leistungen — Praxis Dr. Müller" },
      { property: "og:description", content: "Unser Leistungsspektrum in der Allgemeinarztpraxis Dr. Müller." },
    ],
  }),
  component: LeistungenPage,
});

const services = [
  {
    title: "Vorsorge & Gesundheits-Check-ups",
    description:
      "Regelmäßige Vorsorgeuntersuchungen sind die Basis für langfristige Gesundheit. Wir bieten Check-ups ab 35, Krebsvorsorge, Impfberatung und individuelle Gesundheitspläne.",
  },
  {
    title: "Chronische Erkrankungen",
    description:
      "Bei Diabetes, Bluthochdruck, Asthma, COPD und anderen chronischen Erkrankungen begleiten wir Sie kontinuierlich und passen Ihre Behandlung individuell an.",
  },
  {
    title: "Akutversorgung",
    description:
      "Bei plötzlichen Beschwerden wie Fieber, Infekten, Schmerzen oder Verletzungen bieten wir kurzfristige Termine und eine schnelle Erstversorgung.",
  },
  {
    title: "Labor & Diagnostik",
    description:
      "Blutentnahme, Urinuntersuchungen, EKG, Lungenfunktionstests und weitere diagnostische Verfahren führen wir direkt in unserer Praxis durch.",
  },
  {
    title: "Impfungen",
    description:
      "Wir beraten Sie umfassend zu allen empfohlenen Impfungen für Kinder und Erwachsene und führen die Impfungen direkt in der Praxis durch.",
  },
  {
    title: "Reisemedizin",
    description:
      "Vor Ihrer Reise beraten wir Sie zu notwendigen Impfungen und Vorbeugemaßnahmen für Ihr Reiseziel und stellen Ihnen ein Reiseapotheke zusammen.",
  },
  {
    title: "Geriatrie & Altersmedizin",
    description:
      "Besondere Aufmerksamkeit für ältere Patienten: Medikamentenmanagement, Sturzprophylaxe, Gedächtnisleistung und Koordination der Versorgung.",
  },
  {
    title: "Hausärztliche Betreuung",
    description:
      "Als Ihr Hausarzt sind wir Ihr erster Ansprechpartner bei allen gesundheitlichen Fragen und koordinieren gegebenenfalls die Überweisung zu Fachärzten.",
  },
];

function LeistungenPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Unsere Leistungen
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Ein breites Spektrum moderner hausärztlicher Versorgung für Ihre
          Gesundheit — persönlich, kompetent und auf Augenhöhe.
        </p>
      </div>

      {/* Services grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage/30 text-primary">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">
              {service.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
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
