import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Allgemeinarztpraxis Henstedt" },
      {
        name: "description",
        content:
          "Impressum und rechtliche Angaben der Allgemeinarztpraxis Henstedt GbR in Henstedt-Ulzburg.",
      },
      {
        property: "og:title",
        content: "Impressum — Allgemeinarztpraxis Henstedt",
      },
      {
        property: "og:description",
        content:
          "Impressum und rechtliche Angaben der Allgemeinarztpraxis Henstedt GbR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ImpressumPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function ExternalLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="underline underline-offset-4 hover:text-foreground"
      target="_blank"
      rel="noopener noreferrer"
    >
      {href.replace(/^https?:\/\//, "")}
    </a>
  );
}

function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Impressum
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
      </p>

      <section className="mt-10">
        <div className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">
              Allgemeinarztpraxis Henstedt GbR
            </strong>
          </p>
          <p>
            vertreten durch die Gesellschafter Heiko Bahnsen und Danny Paysen
          </p>
          <p>Maurepasstr. 74</p>
          <p>24558 Henstedt-Ulzburg</p>
        </div>
      </section>

      <Section title="Kontakt">
        <p>
          Telefon:{" "}
          <a
            href="tel:+4941935029990"
            className="underline underline-offset-4 hover:text-foreground"
          >
            04193 502999-0
          </a>
        </p>
        <p>Telefax: 04193 502999-9</p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:info@allgemeinarztpraxis-henstedt.de"
            className="underline underline-offset-4 hover:text-foreground"
          >
            info@allgemeinarztpraxis-henstedt.de
          </a>
        </p>
      </Section>

      <Section title="Berufsbezeichnung und berufsrechtliche Regelungen">
        <p>Gesetzliche Berufsbezeichnung: Arzt</p>
        <p>Verliehen in: Bundesrepublik Deutschland</p>
        <p>
          Facharztbezeichnung: jeweils Facharzt für Allgemeinmedizin
        </p>
      </Section>

      <Section title="Zuständige Kammer">
        <p>Ärztekammer Schleswig-Holstein</p>
        <p>Bismarckallee 8-12, 23795 Bad Segeberg</p>
        <p>
          <ExternalLink href="https://www.aeksh.de" />
        </p>
      </Section>

      <Section title="Zuständige Aufsichtsbehörde / Kassenärztliche Vereinigung">
        <p>
          Kassenärztliche Vereinigung Schleswig-Holstein, Körperschaft des
          öffentlichen Rechts
        </p>
        <p>Bismarckallee 1-6, 23795 Bad Segeberg</p>
        <p>
          <ExternalLink href="https://www.kvsh.de" />
        </p>
      </Section>

      <Section title="Es gelten folgende berufsrechtliche Regelungen">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Berufsordnung der Ärztekammer Schleswig-Holstein</li>
          <li>Heilberufekammergesetz (HBKG) Schleswig-Holstein</li>
          <li>
            Gebührenordnung für Ärzte (GOÄ):{" "}
            <ExternalLink href="https://www.gesetze-im-internet.de/go__1982/" />
          </li>
          <li>
            Weiterbildungsordnung:{" "}
            <ExternalLink href="https://www.aeksh.de/aerztinnen-und-aerzte/weiterbildung" />
          </li>
        </ul>
        <p className="pt-2">
          Die Regelungen finden Sie auf der Website der Ärztekammer
          Schleswig-Holstein:{" "}
          <ExternalLink href="https://www.aeksh.de/aerztinnen-und-aerzte/recht/berufsrecht" />
        </p>
      </Section>

      <Section title="Umsatzsteuer">
        <p>
          Ärztliche Heilbehandlungen sind nach § 4 Nr. 14 UStG von der
          Umsatzsteuer befreit.
        </p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE315030970
        </p>
      </Section>

      <Section title="Berufshaftpflichtversicherung">
        <p>HDI Versicherung AG</p>
        <p>HDI-Platz 1, 30659 Hannover</p>
        <p>Geltungsbereich: Bundesrepublik Deutschland</p>
      </Section>

      <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>Heiko Bahnsen und Danny Paysen</p>
        <p>Maurepasstr. 74, 24558 Henstedt-Ulzburg</p>
      </Section>

      <Section title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </Section>
    </div>
  );
}
