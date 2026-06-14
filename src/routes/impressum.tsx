import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Allgemeinarztpraxis Henstedt" },
      { name: "description", content: "Impressum der Allgemeinarztpraxis Henstedt." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Impressum
      </h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Anbieter</h2>
        <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p><strong>Allgemeinarztpraxis Henstedt<br />Heiko Bahnsen und Danny Paysen</strong></p>
          <p>Maurepasstr. 74</p>
          <p>24558 Henstedt-Ulzburg</p>
          <p>Telefon: 04193-5029990</p>
          <p>Fax: 04193-5029999</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Vertretungsberechtigte Ärzte</h2>
        <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>Heiko Bahnsen, Facharzt für Allgemeinmedizin</p>
          <p>Danny Paysen, Facharzt für Allgemeinmedizin</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Berufsrechtliche Angaben</h2>
        <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>Ärztekammer Schleswig-Holstein</p>
          <p>Bismarckallee 8-12, 23795 Bad Segeberg</p>
          <p>
            <a href="https://www.aeksh.de" className="underline underline-offset-4 hover:text-foreground" target="_blank" rel="noopener noreferrer">
              www.aeksh.de
            </a>
          </p>
          <p>Zuständige Aufsichtsbehörde: Landesamt für soziale Dienste Schleswig-Holstein</p>
          <p>Berufsbezeichnung: Facharzt für Allgemeinmedizin (verliehen in der Bundesrepublik Deutschland)</p>
        </div>
      </section>
    </div>
  );
}
