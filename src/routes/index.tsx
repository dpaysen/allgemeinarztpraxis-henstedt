import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/praxis-henstedt.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Allgemeinarztpraxis Henstedt — Ihr Allgemeinarzt in Henstedt-Ulzburg" },
      { name: "description", content: "Willkommen in der Allgemeinarztpraxis Henstedt in Henstedt-Ulzburg. Hausärztliche Versorgung, Vorsorge und moderne Medizin." },
      { property: "og:title", content: "Allgemeinarztpraxis Henstedt — Ihr Allgemeinarzt in Henstedt-Ulzburg" },
      { property: "og:description", content: "Willkommen in der Allgemeinarztpraxis Henstedt in Henstedt-Ulzburg." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAsset.url}
            alt="Moderne Arztpraxis mit natürlichem Licht"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-sage/30 px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-sage/40">
              Allgemeinmedizin & Hausärztliche Versorgung
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-in fade-in slide-in-from-right-16 duration-700 fill-mode-backwards">
              Da sein, wenn es{" "}
              <span className="text-primary">darauf ankommt</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-left-16 duration-700 fill-mode-backwards" style={{ animationDelay: "200ms" }}>
              Willkommen in der Allgemeinarztpraxis Henstedt — Ihrer
              Allgemeinarztpraxis in Henstedt-Ulzburg. Wir bieten Ihnen umfassende hausärztliche
              Versorgung mit persönlicher Betreuung und modernster Medizin.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal-dark"
              >
                Termin vereinbaren
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            icon={<ClockIcon />}
            title="Sprechzeiten"
            description="Mo–Fr: 8:00–12:00 & 13:00–15:30."
            link="/kontakt"
            linkText="Alle Zeiten"
          />
          <InfoCard
            icon={<PhoneIcon />}
            title="Terminvereinbarung"
            description="Rufen Sie uns an und vereinbaren Sie einen Termin."
            link="/kontakt"
            linkText="Kontakt"
          />
          <InfoCard
            icon={<HeartIcon />}
            title="Leistungen"
            description="Von der Vorsorge bis zur chronischen Betreuung — wir sind für Sie da."
            link="/leistungen"
            linkText="Mehr erfahren"
          />
        </div>
      </section>

      {/* Welcome / About teaser */}
      <section className="bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Persönliche Betreuung
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              In unserer Praxis stehen Sie als Patient im Mittelpunkt. Heiko Bahnsen,
              Danny Paysen und ihr Team nehmen sich Zeit für Ihre Anliegen und begleiten Sie
              kompetent auf dem Weg zu mehr Gesundheit und Wohlbefinden.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Wir behandeln Erwachsene aller Altersgruppen und bieten ein breites
              Spektrum an hausärztlichen Leistungen — von der Akutversorgung bis
              zur langfristigen Betreuung chronischer Erkrankungen.
            </p>
            <Link
              to="/team"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-teal-dark"
            >
              Unser Team kennenlernen
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
              <h3 className="text-lg font-semibold text-foreground">Warum unsere Praxis?</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Langjährige Erfahrung in der Allgemeinmedizin",
                  "Moderne diagnostische Ausstattung",
                  "Kurzfristige Terminvergabe möglich",
                  "Kooperation mit Fachärzten & Kliniken",
                  "Barrierefreier Praxiszugang",
                  "Alle gesetzlichen Krankenkassen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Wir bieten ein umfassendes Spektrum hausärztlicher Leistungen für
            Ihre Gesundheit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Vorsorge", desc: "Gesundheits-Check-ups, Krebsvorsorge, Impfungen" },
            { title: "Chronische Erkrankungen", desc: "Diabetes, Bluthochdruck, Asthma & COPD" },
            { title: "Akutversorgung", desc: "Schnelle Hilfe bei akuten Beschwerden" },
            { title: "Labor & Diagnostik", desc: "Blutentnahme, EKG, Lungenfunktion" },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage/30 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/leistungen"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Alle Leistungen anzeigen
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 mb-16 rounded-2xl bg-primary px-6 py-16 text-center sm:mx-8 lg:mx-auto lg:max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Bereit für Ihren Termin?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Vereinbaren Sie bequem einen Termin online oder rufen Sie uns an. Wir
          freuen uns auf Sie!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white"
          >
            Termin vereinbaren
          </Link>
          <a
            href="tel:+4941935029990"
            className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            04193 5029990
          </a>
        </div>
      </section>

      {/* News Bubble — fixed bottom right */}
      <Link
        to="/kontakt"
        aria-label="Aktuelle Nachrichten"
        className="group fixed bottom-6 right-6 z-40 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-primary-foreground/40 transition-transform hover:scale-105 sm:h-44 sm:w-44"
      >
        <span className="text-[10px] font-semibold uppercase tracking-wider opacity-90 sm:text-xs">
          Aktuell
        </span>
        <span className="mt-2 px-4 text-center text-[10px] font-bold leading-tight whitespace-pre-line sm:text-xs">
          {`Die Praxis\nist vom 26.-30.09.26\naufgrund\u00a0`}
        </span>
      </Link>
    </>
  );
}

/* ---------- Subcomponents ---------- */
function InfoCard({
  icon,
  title,
  description,
  link,
  linkText,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="rounded-xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage/30 text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link
        to={link}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-teal-dark"
      >
        {linkText}
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M15 3V1" />
      <path d="M9 21h6" />
      <rect x="8" y="6" width="8" height="10" rx="0.5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}
