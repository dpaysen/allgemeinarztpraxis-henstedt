import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum und Datenschutz — Allgemeinarztpraxis Henstedt" },
      { name: "description", content: "Impressum und Datenschutzerklärung der Allgemeinarztpraxis Henstedt." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Impressum und Datenschutz
      </h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Impressum</h2>
        <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p><strong>Allgemeinarztpraxis Henstedt</strong></p>
          <p>Maurepasstr. 74</p>
          <p>24558 Henstedt-Ulzburg</p>
          <p>Tel.: 04193 5029990</p>
          <p>Fax: 04193 5029999</p>
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
          <p>Bergstraße 64, 23669 Timmendorfer Strand</p>
          <p>
            <a href="https://www.aeksh.de" className="underline underline-offset-4 hover:text-foreground" target="_blank" rel="noopener noreferrer">
              www.aeksh.de
            </a>
          </p>
          <p>Zuständige Aufsichtsbehörde: Landesamt für soziale Dienste Schleswig-Holstein</p>
          <p>Berufsbezeichnung: Facharzt für Allgemeinmedizin (verliehen in der Bundesrepublik Deutschland)</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Datenschutzerklärung</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
            Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der
            gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung
            (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
          </p>
          <p>
            Bei der Nutzung unserer Website werden keine personenbezogenen Daten
            erhoben, gespeichert oder an Dritte weitergegeben, soweit dies nicht
            technisch erforderlich ist (z. B. Server-Logfiles).
          </p>
          <p>
            Bei Fragen zum Datenschutz erreichen Sie uns unter den oben genannten
            Kontaktdaten.
          </p>
        </div>
      </section>
    </div>
  );
}
