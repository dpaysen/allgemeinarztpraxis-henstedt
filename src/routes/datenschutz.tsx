import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Allgemeinarztpraxis Henstedt" },
      { name: "description", content: "Datenschutzerklärung der Allgemeinarztpraxis Henstedt." },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Datenschutzerklärung
      </h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Datenschutz</h2>
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
            Bei Fragen zum Datenschutz erreichen Sie uns unter den im Impressum
            genannten Kontaktdaten.
          </p>
        </div>
      </section>
    </div>
  );
}