import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notdienst")({
  head: () => ({
    meta: [
      { title: "Notdienst — Allgemeinarztpraxis Henstedt" },
      { name: "description", content: "Medizinischer Notdienst außerhalb der Sprechzeiten. Notruf 112 und ärztlicher Bereitschaftsdienst 116117 für Henstedt-Ulzburg." },
      { property: "og:title", content: "Notdienst — Allgemeinarztpraxis Henstedt" },
      { property: "og:description", content: "Was tun bei medizinischen Notfällen außerhalb der Sprechzeiten? Notruf 112 und ärztlicher Bereitschaftsdienst 116117." },
    ],
  }),
  component: NotdienstPage,
});

function NotdienstPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Notdienst
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Bei akuten Erkrankungen und medizinischen Notfällen außerhalb unserer Sprechzeiten
          stehen Ihnen verschiedene Anlaufstellen zur Verfügung.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Notruf 112 */}
        <div className="rounded-xl bg-card p-6 ring-1 ring-border">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <svg className="h-6 w-6 text-destructive" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              Lebensbedrohliche Notfälle
            </h2>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Bei lebensbedrohlichen Zuständen wie schweren Verletzungen, Brustschmerzen,
            Atemnot oder Bewusstlosigkeit wählen Sie sofort den Notruf:
          </p>
          <div className="mt-4">
            <a
              href="tel:112"
              className="inline-flex items-center justify-center rounded-lg bg-destructive px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-1.024-.73-1.907-1.736-2.085l-5.29-.882a1.875 1.875 0 00-2.097 1.185l-.353 1.06a1.125 1.125 0 01-1.27.633L8.89 17.31a15.032 15.032 0 01-5.29-5.29l1.507-1.073a1.125 1.125 0 01.633-1.27l1.06-.353a1.875 1.875 0 001.185-2.097l-.882-5.29A2.25 2.25 0 001.623 4.5H.75A2.25 2.25 0 00-1.5 6.75v.75z" />
              </svg>
              Notruf 112
            </a>
          </div>
        </div>

        {/* Ärztlicher Bereitschaftsdienst */}
        <div className="rounded-xl bg-card p-6 ring-1 ring-border">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              Ärztlicher Bereitschaftsdienst
            </h2>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Bei akuten Erkrankungen außerhalb der Praxis-Sprechzeiten, die nicht
            lebensbedrohlich sind, erreichen Sie den ärztlichen Bereitschaftsdienst:
          </p>
          <div className="mt-4">
            <a
              href="tel:116117"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-teal-dark"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-1.024-.73-1.907-1.736-2.085l-5.29-.882a1.875 1.875 0 00-2.097 1.185l-.353 1.06a1.125 1.125 0 01-1.27.633L8.89 17.31a15.032 15.032 0 01-5.29-5.29l1.507-1.073a1.125 1.125 0 01.633-1.27l1.06-.353a1.875 1.875 0 001.185-2.097l-.882-5.29A2.25 2.25 0 001.623 4.5H.75A2.25 2.25 0 00-1.5 6.75v.75z" />
              </svg>
              116 117
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Europaweit einheitlich, 24 Stunden erreichbar. Oder online unter{" "}
            <a
              href="https://www.116117.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              116117.de
            </a>
          </p>

          <div className="mt-6 rounded-lg bg-accent/50 p-4">
            <p className="text-sm font-semibold text-foreground">
              Paracelsus Klinik in Henstedt-Ulzburg
            </p>
            <p className="text-xs text-muted-foreground">(nur Erwachsene)</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Wilstedter Straße 134<br />
              24558 Henstedt-Ulzburg
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              Rund um die Uhr geöffnet
            </p>

            <div className="mt-3 border-t border-border pt-3">
              <p className="text-sm font-semibold text-foreground">
                Öffnungszeiten der Anlaufpraxis KVSH
              </p>
              <p className="text-xs text-muted-foreground">
                (in der Paracelsus Klinik Henstedt-Ulzburg)
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Mo + Di + Do: 19:00–21:00 Uhr</li>
                <li>Mi + Fr: 17:00–21:00 Uhr</li>
                <li>Sa + So + Feiertage: 10:00–13:00 Uhr und 17:00–21:00 Uhr</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Notfall-Apotheken */}
      <div className="mt-8 rounded-xl bg-card p-6 ring-1 ring-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
            <svg className="h-6 w-6 text-accent-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.57-.393A9.065 9.065 0 0121 12a9.065 9.065 0 00-1.196-5.228l-1.57-.393m-14.4 8.4l-1.57.393A9.065 9.065 0 003 12a9.065 9.065 0 001.196 5.228l1.57.393" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Notdienst-Apotheken
          </h2>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Informationen zu aktuellen Notdienst-Apotheken in Henstedt-Ulzburg und Umgebung
          finden Sie über die Apothekennotdienst-Suche:
        </p>
        <div className="mt-4">
          <a
            href="https://www.aksh-service.de/notdienst_kalender.php?id=12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Notdienst-Apotheke suchen
          </a>
        </div>
      </div>

      {/* Hinweis */}
      <div className="mt-8 rounded-lg bg-cream p-6 ring-1 ring-border">
        <h3 className="text-base font-semibold text-foreground">
          Wann ist ein Notfall gegeben?
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-destructive" />
            <span>
              <strong className="text-foreground">Lebensbedrohlich:</strong> Bewusstlosigkeit, schwere Atemnot, starke Blutungen, Brustschmerzen, allergische Reaktionen mit Atemnot — sofort <a href="tel:112" className="font-semibold text-destructive underline underline-offset-2">112</a> wählen.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Akut erkrankt, aber nicht lebensbedrohlich:</strong> Hohes Fieber, starke Schmerzen, Verdacht auf Infektion — <a href="tel:116117" className="font-semibold text-primary underline underline-offset-2">116117</a> oder Bereitschaftsdienst.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-muted-foreground" />
            <span>
              <strong className="text-foreground">Nicht dringend:</strong> Termin bei uns in der Praxis vereinbaren.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
