import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Praxis Dr. Müller" },
      { name: "description", content: "So erreichen Sie uns: Adresse, Telefon, E-Mail und Öffnungszeiten der Allgemeinarztpraxis Dr. Müller in Henstedt-Ulzburg." },
      { property: "og:title", content: "Kontakt — Praxis Dr. Müller" },
      { property: "og:description", content: "Kontakt & Öffnungszeiten der Allgemeinarztpraxis Dr. Müller in Henstedt-Ulzburg." },
    ],
  }),
  component: KontaktPage,
});

const hours = [
  { day: "Montag", morning: "8:00 – 12:00", afternoon: "15:00 – 18:00" },
  { day: "Dienstag", morning: "8:00 – 12:00", afternoon: "15:00 – 18:00" },
  { day: "Mittwoch", morning: "8:00 – 12:00", afternoon: "Geschlossen" },
  { day: "Donnerstag", morning: "8:00 – 12:00", afternoon: "15:00 – 18:00" },
  { day: "Freitag", morning: "8:00 – 12:00", afternoon: "Geschlossen" },
  { day: "Samstag", morning: "Nach Vereinbarung", afternoon: "" },
  { day: "Sonntag", morning: "Geschlossen", afternoon: "" },
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
          Wir freuen uns auf Ihre Nachricht oder Ihren Anruf. Termine können Sie
          telefonisch oder per E-Mail vereinbaren.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          <div className="rounded-xl bg-card p-6 ring-1 ring-border">
            <h2 className="text-lg font-semibold text-foreground">
              Praxis Dr. Klaus Müller
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
                <svg className="h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-1.024-.73-1.907-1.736-2.085l-5.29-.882a1.875 1.875 0 00-2.097 1.185l-.353 1.06a1.125 1.125 0 01-1.27.633L8.89 17.31a15.032 15.032 0 01-5.29-5.29l1.507-1.073a1.125 1.125 0 01.633-1.27l1.06-.353a1.875 1.875 0 001.185-2.097l-.882-5.29A2.25 2.25 0 001.623 4.5H.75A2.25 2.25 0 00-1.5 6.75v.75z" />
                </svg>
                <a href="tel:+4930123456789" className="underline underline-offset-4 transition-colors hover:text-foreground">
                  030 123 456 789
                </a>
              </p>
              <p className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:praxis@drmueller.de" className="underline underline-offset-4 transition-colors hover:text-foreground">
                  praxis@drmueller.de
                </a>
              </p>
              <p className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.485 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.052 0-3.99.518-5.661 1.422m11.322 0a9.004 9.004 0 01-5.661 1.422M6.25 12a9.004 9.004 0 0111.322 0" />
                </svg>
                <a
                  href="https://www.praxis-drmueller.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  www.praxis-drmueller.de
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
