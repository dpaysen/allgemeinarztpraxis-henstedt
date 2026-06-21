import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode, useState } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import praxisLogo from "../assets/praxis-logo.png";

/* ---------- Navigation ---------- */
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Startseite" },
    { to: "/leistungen", label: "Leistungen" },
    { to: "/team", label: "Team" },
    { to: "/kontakt", label: "Kontakt" },
    { to: "/notdienst", label: "Notdienst" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
        >
          <img
            src={praxisLogo.url}
            alt="Praxis-Logo"
            className="h-8 w-auto"
            style={{ filter: "brightness(1.15) hue-rotate(-12deg) saturate(0.9)" }}
          />
          Allgemeinarztpraxis Henstedt
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary font-medium" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-md px-3 py-2 text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="ml-3 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-dark"
          >
            Termin vereinbaren
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Menü öffnen"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-dark"
            >
              Termin vereinbaren
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <img src={praxisLogo.url} alt="Praxis-Logo" className="h-7 w-auto" style={{ filter: "brightness(1.15) hue-rotate(-12deg) saturate(0.9)" }} />
              Allgemeinarztpraxis Henstedt
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ihre Allgemeinarztpraxis in Henstedt-Ulzburg. Persönliche Betreuung
              und moderne Medizin.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Schnelllinks</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-foreground">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="transition-colors hover:text-foreground">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/team" className="transition-colors hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="transition-colors hover:text-foreground">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Kontakt</h3>
            <address className="mt-3 space-y-2 text-sm not-italic text-muted-foreground">
              <p>Maurepasstr. 74</p>
              <p>24558 Henstedt-Ulzburg</p>
              <p>
                Tel.:{" "}
                <a href="tel:+4941935029990" className="underline underline-offset-4 transition-colors hover:text-foreground">
                  04193 5029990
                </a>
              </p>
              <p>
                Fax:{" "}
                <a href="tel:+4941935029999" className="underline underline-offset-4 transition-colors hover:text-foreground">
                  04193 5029999
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Allgemeinarztpraxis Henstedt. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground">
            Arztpraxis — Kein Ersatz für den Notruf 112
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center gap-3 text-center">
          <Link
            to="/impressum"
            className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Impressum
          </Link>
          <span className="text-xs text-muted-foreground">|</span>
          <Link
            to="/datenschutz"
            className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Error / Not Found ---------- */
function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Seite nicht gefunden
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-dark"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Diese Seite konnte nicht geladen werden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Etwas ist schiefgelaufen. Versuchen Sie es erneut oder kehren Sie zur
          Startseite zurück.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-dark"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Root route ---------- */
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Allgemeinarztpraxis Henstedt — Allgemeinmedizin in Henstedt-Ulzburg" },
      { name: "description", content: "Ihre Allgemeinarztpraxis in Henstedt-Ulzburg. Hausärztliche Versorgung, Vorsorge, chronische Erkrankungen und mehr. Termine online vereinbaren." },
      { name: "author", content: "Allgemeinarztpraxis Henstedt" },
      { property: "og:title", content: "Allgemeinarztpraxis Henstedt — Allgemeinmedizin in Henstedt-Ulzburg" },
      { property: "og:description", content: "Ihre Allgemeinarztpraxis in Henstedt-Ulzburg. Hausärztliche Versorgung, Vorsorge, chronische Erkrankungen und mehr." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

// Need to import HeadContent / Scripts / useRouter in the same file
// They were already imported above, but let's check...
// Yes, HeadContent, Scripts, and useRouter are imported at the top.
