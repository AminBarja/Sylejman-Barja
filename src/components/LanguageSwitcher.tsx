import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const opts: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "sq", label: "SQ" },
  ];
  return (
    <div className={`inline-flex items-center rounded-sm border border-border overflow-hidden text-xs font-semibold ${className}`}>
      {opts.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`px-2.5 py-1.5 transition-colors ${
            lang === o.code
              ? "bg-gold-gradient text-ink"
              : "bg-transparent text-foreground/65 hover:text-gold"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
