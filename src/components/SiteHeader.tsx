import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/practice-areas", label: t("nav.practice") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-gradient shadow-gold">
            <Scale className="h-5 w-5 text-primary" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-semibold text-ink">Sylejman Barja</span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {t("header.role")}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <a
            href="tel:+38345883034"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-sm bg-primary text-primary-foreground hover:bg-ink transition-colors"
          >
            +383 45 883 034
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            aria-label="Toggle menu"
            className="p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-2"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+38345883034"
              className="mt-2 text-center px-5 py-3 rounded-sm bg-primary text-primary-foreground font-semibold"
            >
              {t("header.callMobile")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
