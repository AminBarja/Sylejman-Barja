import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { I18nProvider } from "@/lib/i18n";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-ink">404</h1>
        <div className="gold-divider mx-auto my-6" />
        <h2 className="mt-2 text-xl font-serif text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-ink transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Avokat Sylejman Barja — Attorney at Law in Mitrovica" },
      { name: "description", content: "Avokat Sylejman Barja offers trusted legal counsel in Mitrovica, Kosovo. Experienced attorney for civil, criminal, family, and business law." },
      { name: "author", content: "Avokat Sylejman Barja" },
      { property: "og:title", content: "Avokat Sylejman Barja — Attorney at Law in Mitrovica" },
      { property: "og:description", content: "Avokat Sylejman Barja offers trusted legal counsel in Mitrovica, Kosovo. Experienced attorney for civil, criminal, family, and business law." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Avokat Sylejman Barja — Attorney at Law in Mitrovica" },
      { name: "twitter:description", content: "Avokat Sylejman Barja offers trusted legal counsel in Mitrovica, Kosovo. Experienced attorney for civil, criminal, family, and business law." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9eb253cc-c0cc-40e4-911d-03b9e2aa5301/id-preview-8b2fa798--65fc081b-0fbf-4157-91c8-9b8258fb07c9.lovable.app-1777119538576.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9eb253cc-c0cc-40e4-911d-03b9e2aa5301/id-preview-8b2fa798--65fc081b-0fbf-4157-91c8-9b8258fb07c9.lovable.app-1777119538576.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
