import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone } from "lucide-react";

function FaxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M7 3h10v6" />
      <rect x="3" y="9" width="18" height="9" rx="1" />
      <rect x="8" y="14" width="8" height="6" rx="1" />
      <circle cx="6" cy="12.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Allgemeinarztpraxis Henstedt" },
      { name: "description", content: "So erreichen Sie uns: Adresse, Telefon, E-Mail und Öffnungszeiten der Allgemeinarztpraxis Henstedt in Henstedt-Ulzburg." },
      { property: "og:title", content: "Kontakt — Allgemeinarztpraxis Henstedt" },
      { property: "og:description", content: "Kontakt & Öffnungszeiten der Allgemeinarztpraxis Henstedt in Henstedt-Ulzburg." },
    ],
  }),
  component: KontaktPage,
});

const hours = [
  { day: "Montag", morning: "8:00 – 12:00", afternoon: "13:00 – 15:30" },
  { day: "Dienstag", morning: "8:00 – 12:00", afternoon: "13:00 – 15:30" },
  { day: "Mittwoch", morning: "8:00 – 12:00", afternoon: "Geschlossen" },
  { day: "Donnerstag", morning: "8:00 – 12:00", afternoon: "15:30 – 18:00" },
  { day: "Freitag", morning: "8:00 – 12:00", afternoon: "Geschlossen" },
];

function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Kontakt
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Wir freuen uns auf Ihren Anruf. Termine können Sie telefonisch vereinbaren.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          <div className="rounded-xl bg-card p-6 ring-1 ring-border">
            <h2 className="text-lg font-semibold text-foreground">
              Allgemeinarztpraxis Henstedt
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
              <p className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  Maurepasstr. 74
                  <br />
                  24558 Henstedt-Ulzburg
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+4941935029990" className="underline underline-offset-4 transition-colors hover:text-foreground">
                  Telefon: 04193-5029990
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaxIcon className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+4941935029999" className="underline underline-offset-4 transition-colors hover:text-foreground">
                  Fax: 04193-5029999
                </a>
              </p>
            </address>
          </div>

          {/* Public transport / Anfahrt */}
          <div className="rounded-xl bg-card p-6 ring-1 ring-border">
            <h3 className="text-base font-semibold text-foreground">Anfahrt</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Auto:</strong> Über die A7 (Ausfahrt Henstedt-Ulzburg) oder B433 erreichbar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Bus:</strong> HVV-Buslinien in Henstedt-Ulzburg
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Bahn:</strong> S-Bahn und AKN nach Henstedt-Ulzburg
                </span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Barrierefreier Zugang zur Praxis vorhanden.
            </p>
          </div>
        </div>

        {/* Opening hours */}
        <div className="rounded-xl bg-card p-6 ring-1 ring-border">
          <h2 className="text-lg font-semibold text-foreground">Sprechzeiten</h2>
          <div className="mt-4 divide-y divide-border">
            {hours.map((slot) => (
              <div key={slot.day} className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-foreground">{slot.day}</span>
                <div className="text-right text-sm">
                  <span className="text-muted-foreground">{slot.morning}</span>
                  {slot.afternoon && (
                    <span className="block text-muted-foreground">
                      {slot.afternoon}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-cream p-4 ring-1 ring-border">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Notfälle außerhalb der Sprechzeiten:</strong>{" "}
              Bei lebensbedrohlichen Notfällen wählen Sie bitte den{" "}
              <a href="tel:112" className="font-semibold text-destructive underline underline-offset-2">
                Notruf 112
              </a>
              . Für medizinische Notfälle außerhalb der Sprechzeiten steht Ihnen der{" "}
              <a
                href="https://www.116117.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-foreground"
              >
                Ärztliche Bereitschaftsdienst (116117)
              </a>{" "}
              zur Verfügung.
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-8">
        <div className="h-80 w-full overflow-hidden rounded-xl ring-1 ring-border sm:h-96">
          <iframe
            title="Praxisstandort auf Google Maps"
            src="https://www.google.com/maps?q=Maurepasstr.+74,+24558+Henstedt-Ulzburg&t=m&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Maurepasstr.+74,+24558+Henstedt-Ulzburg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Größere Karte anzeigen
          </a>
        </p>
      </div>
    </div>
  );
}
