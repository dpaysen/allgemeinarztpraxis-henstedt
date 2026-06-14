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
        Datenschutz
      </h1>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>Sehr geehrte Patientin, sehr geehrter Patient,</p>
        <p>
          der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nach der
          EU-Datenschutz-Grundverordnung (DSGVO) sind wir verpflichtet, Sie darüber
          zu informieren, zu welchem Zweck unsere Praxis Daten erhebt, speichert
          oder weiterleitet. Der Information können Sie auch entnehmen, welche
          Rechte Sie in puncto Datenschutz haben.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-foreground">
          1. Verantwortung für die Datenverarbeitung
        </h2>
        <p>Heiko Bahnsen und Danny Paysen</p>
        <p>Bismarckallee 8-12, 23795 Bad Segeberg</p>
        <p>Telefon: 04193-5029990</p>
        <p>Datenschutzbeauftragte:</p>
        <p>Heiko Bahnsen und Danny Paysen</p>

        <h2 className="mt-8 text-lg font-semibold text-foreground">
          2. Zweck der Datenverarbeitung
        </h2>
        <p>
          Die Datenverarbeitung erfolgt aufgrund gesetzlicher Vorgaben, um den
          Behandlungsvertrag zwischen Ihnen und Ihrem Arzt und die damit
          verbundenen Pflichten zu erfüllen.
        </p>
        <p>
          Hierzu verarbeiten wir Ihre personenbezogenen Daten, insbesondere Ihre
          Gesundheitsdaten. Dazu zählen Anamnesen, Diagnosen, Therapievorschläge
          und Befunde, die wir oder andere Ärzte erheben. Zu diesen Zwecken
          können uns auch andere Ärzte oder Psychotherapeuten, bei denen Sie in
          Behandlung sind, Daten zur Verfügung stellen (z.B. in Arztbriefen).
        </p>
        <p>
          Die Erhebung von Gesundheitsdaten ist Voraussetzung für Ihre
          Behandlung. Werden die notwendigen Informationen nicht bereitgestellt,
          kann eine sorgfältige Behandlung nicht erfolgen.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-foreground">
          3. Empfänger Ihrer Daten
        </h2>
        <p>
          Wir übermitteln Ihre personenbezogenen Daten nur dann an Dritte, wenn
          dies gesetzlich erlaubt ist oder Sie eingewilligt haben.
        </p>
        <p>
          Empfänger Ihrer personenbezogenen Daten können vor allem andere Ärzte
          / Psychotherapeuten, Kassenärztliche Vereinigungen, Krankenkassen, der
          Medizinische Dienst der Krankenversicherung, Ärztekammern und
          privatärztliche Verrechnungsstellen sein.
        </p>
        <p>
          Die Übermittlung erfolgt überwiegend zum Zwecke der Abrechnung der bei
          Ihnen erbrachten Leistungen, zur Klärung von medizinischen und sich
          aus Ihrem Versicherungsverhältnis ergebenden Fragen. Im Einzelfall
          erfolgt die Übermittlung von Daten an weitere berechtigte Empfänger.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-foreground">
          4. Speicherung Ihrer Daten
        </h2>
        <p>
          Wir bewahren Ihre personenbezogenen Daten nur solange auf, wie dies
          für die Durchführung der Behandlung erforderlich ist.
        </p>
        <p>
          Aufgrund rechtlicher Vorgaben sind wir dazu verpflichtet, diese Daten
          mindestens 10 Jahre nach Abschluss der Behandlung aufzubewahren. Nach
          anderen Vorschriften können sich längere Aufbewahrungsfristen ergeben,
          zum Beispiel 30 Jahre bei Röntgenaufzeichnungen laut Paragraf 28
          Absatz 3 der Röntgenverordnung.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-foreground">
          5. Ihre Rechte
        </h2>
        <p>
          Sie haben das Recht, über die Sie betreffenden personenbezogenen Daten
          Auskunft zu erhalten. Auch können Sie die Berichtigung unrichtiger
          Daten verlangen.
        </p>
        <p>
          Darüber hinaus steht Ihnen unter bestimmten Voraussetzungen das Recht
          auf Löschung von Daten, das Recht auf Einschränkung der
          Datenverarbeitung sowie das Recht auf Datenübertragbarkeit zu.
        </p>
        <p>
          Die Verarbeitung Ihrer Daten erfolgt auf Basis von gesetzlichen
          Regelungen. Nur in Ausnahmefällen benötigen wir Ihr Einverständnis. In
          diesen Fällen haben Sie das Recht, die Einwilligung für die zukünftige
          Verarbeitung zu widerrufen.
        </p>
        <p>
          Sie haben ferner das Recht, sich bei der zuständigen Aufsichtsbehörde
          für den Datenschutz zu beschweren, wenn Sie der Ansicht sind, dass die
          Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.
        </p>

        <h2 className="mt-8 text-lg font-semibold text-foreground">
          6. Rechtliche Grundlagen
        </h2>
        <p>Rechtsgrundlagen für die Datenverarbeitung sind insbesondere:</p>
        <p>– Art. 6 Abs. 1 lit. b) DSGVO (Vertragserfüllung)</p>
        <p>– Art. 6 Abs. 1 lit. f) DSGVO (berechtigtes Interesse)</p>
        <p>
          – Art. 9 Abs. 2 lit. h) DSGVO i. V. m. § 22 Abs. 1 Nr. 1 lit. b) BDSG
          (Gesundheitsdaten)
        </p>
        <p>Sollten Sie Fragen haben, können Sie sich gern an uns wenden.</p>

        <h2 className="mt-8 text-lg font-semibold text-foreground">
          7. Hinweis zur Verwendung von Adobe Fonts
        </h2>
        <p>
          Unsere Webseite verwendet Adobe Fonts zur einheitlichen Darstellung
          von Schriftarten. Anbieter ist Adobe Systems Incorporated, 345 Park
          Avenue, San Jose, CA 95110-2704, USA. Beim Aufruf unserer Seite lädt
          Ihr Browser die benötigten Schriftarten direkt von Adobe, wodurch
          Adobe Ihre IP-Adresse erfährt. Weitere Informationen finden Sie in
          der Datenschutzerklärung von Adobe:{" "}
          <a
            href="https://www.adobe.com/de/privacy/policies/adobe-fonts.html"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.adobe.com/de/privacy/policies/adobe-fonts.html
          </a>
        </p>

        <h2 className="mt-8 text-lg font-semibold text-foreground">
          8. Hinweis zu externen Links
        </h2>
        <p>
          Unsere Webseite kann Links zu externen Webseiten Dritter enthalten.
          Wir haben keinen Einfluss auf deren Inhalte und übernehmen keine
          Haftung für deren Datenschutzbestimmungen. Zum Zeitpunkt der
          Verlinkung wurden die externen Seiten überprüft, eine dauerhafte
          Kontrolle ist jedoch nicht möglich. Sollten Rechtsverstöße bekannt
          werden, entfernen wir entsprechende Links umgehend.
        </p>
      </div>
    </div>
  );
}