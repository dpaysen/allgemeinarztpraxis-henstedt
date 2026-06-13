import { createFileRoute } from "@tanstack/react-router";
import doctorImage from "@/assets/doctor-portrait.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Allgemeinarztpraxis Henstedt" },
      { name: "description", content: "Lernen Sie Heiko Bahnsen, Danny Paysen und ihr Praxisteam kennen. Erfahren, freundlich und immer für Sie da." },
      { property: "og:title", content: "Team — Allgemeinarztpraxis Henstedt" },
      { property: "og:description", content: "Lernen Sie Heiko Bahnsen, Danny Paysen und ihr Praxisteam kennen." },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Heiko Bahnsen",
    role: "Facharzt für Allgemeinmedizin",
    bio: "Heiko Bahnsen ist als Hausarzt in Henstedt-Ulzburg tätig. Nach seinem Studium und der Facharztweiterbildung hat er sich auf chronische Erkrankungen und Vorsorgemedizin spezialisiert.",
    image: doctorImage,
    focus: ["Chronische Erkrankungen", "Vorsorge", "Geriatrie"],
  },
  {
    name: "Danny Paysen",
    role: "Facharzt für Allgemeinmedizin",
    bio: "Danny Paysen ergänzt das Ärzteteam mit langjähriger Erfahrung in der Allgemeinmedizin. Sein Schwerpunkt liegt in der Akutversorgung und der Betreuung von Patienten aller Altersgruppen.",
    image: undefined,
    focus: ["Akutversorgung", "Innere Medizin", "Kinder- und Jugendmedizin"],
  },
  {
    name: "Sarah Weber",
    role: "Medizinische Fachangestellte",
    bio: "Sarah ist seit 2018 Teil unseres Teams und die freundliche Stimme am Telefon. Sie kümmert sich um Terminvereinbarungen, Laborwerte und die Organisation des Praxisalltags.",
    focus: ["Terminmanagement", "Labor", "Patientenbetreuung"],
  },
  {
    name: "Markus Schäfer",
    role: "Medizinischer Fachangestellter",
    bio: "Markus unterstützt Dr. Müller bei den Untersuchungen, führt EKGs und Lungenfunktionstests durch und sorgt für einen reibungslosen Ablauf in der Behandlung.",
    focus: ["EKG", "Lungenfunktion", "Impfungen"],
  },
];

function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Unser Team
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Ein engagiertes Team, das sich mit Herz und Kompetenz um Ihre
          Gesundheit kümmert.
        </p>
      </div>

      {/* Team members */}
      <div className="mt-12 grid gap-8">
        {team.map((member, i) => (
          <div
            key={member.name}
            className={`flex flex-col gap-8 rounded-2xl bg-card p-6 ring-1 ring-border sm:flex-row sm:items-center sm:p-8 ${
              i % 2 === 1 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="shrink-0">
              <div className="mx-auto h-48 w-48 overflow-hidden rounded-xl bg-muted sm:mx-0 sm:h-56 sm:w-56">
                {"image" in member && member.image ? (
                  <img
                    src={member.image}
                    alt={`Portrait von ${member.name}`}
                    className="h-full w-full object-cover"
                    width={400}
                    height={500}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-sage/20">
                    <svg className="h-16 w-16 text-sage" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                {member.focus.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-sage/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mt-16 rounded-2xl bg-cream p-8 ring-1 ring-border sm:p-12">
        <h2 className="text-center text-2xl font-bold text-foreground">
          Was uns wichtig ist
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Zeit für Sie",
              desc: "Wir nehmen uns die Zeit, die Sie brauchen. Kein Hektik, keine überfüllten Wartezimmer.",
            },
            {
              title: "Auf Augenhöhe",
              desc: "Gemeinsam entscheiden wir über Ihre Behandlung. Sie sind Expertin oder Experte für Ihren Körper.",
            },
            {
              title: "Kontinuität",
              desc: "Wir begleiten Sie langfristig. Ihre Krankengeschichte kennen wir — und Sie kennen uns.",
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-base font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
