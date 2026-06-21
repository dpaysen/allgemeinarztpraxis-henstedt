import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Pill, Siren, Smartphone } from "lucide-react";

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

      <div className="mt-12 flex flex-col gap-8 lg:flex-row">
        {/* Linke Spalte */}
        <div className="flex flex-1 flex-col gap-8">
          {/* Notruf 112 */}
          <div className="flex-1 rounded-xl bg-card p-6 ring-1 ring-border">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                <Siren className="h-6 w-6 text-destructive" />
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
                <Smartphone className="mr-2 h-5 w-5" />
                Notruf 112
              </a>
            </div>
          </div>

          {/* Giftnotruf */}
          <div className="flex-1 rounded-xl bg-card p-6 ring-1 ring-border">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <FlaskConical className="h-6 w-6 text-amber-700" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Vergiftungsnotfall
              </h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Bei Verdacht auf eine akute Vergiftung (z. B. durch Medikamente, Chemikalien oder Pflanzen)
              wenden Sie sich umgehend an die Giftnotruf-Zentrale:
            </p>
            <div className="mt-4">
              <a
                href="tel:03019240"
                className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-amber-700"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                030 19240
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Giftnotruf der Charité Berlin — bundesweit erreichbar, rund um die Uhr.
            </p>
          </div>
        </div>

        {/* Ärztlicher Bereitschaftsdienst */}
        <div className="flex-1 rounded-xl bg-card p-6 ring-1 ring-border">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v18" />
                <path d="M9 19c0-3 3-4 3-7s-3-4-3-7" />
                <path d="M8.5 6c.5-.5 1.5-1 2.5-1s2 .5 2.5 1" />
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
              <Smartphone className="mr-2 h-5 w-5" />
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
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
            <img
              src={apothekeIcon.url}
              alt="Apotheken-Symbol"
              className="h-6 w-6 object-contain"
              width={48}
              height={48}
              loading="lazy"
            />
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
