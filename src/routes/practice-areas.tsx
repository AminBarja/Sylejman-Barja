import { createFileRoute, Link } from "@tanstack/react-router";
import { Gavel, Scale, ShieldCheck, Briefcase, Home, FileText, Users, Building2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Avokat Sylejman Barja" },
      { name: "description", content: "Legal services in criminal defense, civil litigation, family law, property, business, and contract law in Mitrovica, Kosovo." },
      { property: "og:title", content: "Practice Areas — Avokat Sylejman Barja" },
      { property: "og:description", content: "Comprehensive legal services in Mitrovica, Kosovo." },
    ],
  }),
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  const { t } = useI18n();
  const areas = [
    { icon: Gavel, title: t("practice.criminal.title"), desc: t("practice.criminal.desc") },
    { icon: Scale, title: t("practice.civil.title"), desc: t("practice.civil.desc") },
    { icon: Home, title: t("practice.property.title"), desc: t("practice.property.desc") },
    { icon: Users, title: t("practice.family.title"), desc: t("practice.family.desc") },
    { icon: FileText, title: t("practice.inherit.title"), desc: t("practice.inherit.desc") },
    { icon: Briefcase, title: t("practice.labor.title"), desc: t("practice.labor.desc") },
    { icon: Building2, title: t("practice.business.title"), desc: t("practice.business.desc") },
    { icon: ShieldCheck, title: t("practice.admin.title"), desc: t("practice.admin.desc") },
  ];

  return (
    <>
      <section className="bg-hero text-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">{t("practice.eyebrow")}</span>
          <div className="gold-divider mt-3 mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-tight">{t("practice.title")}</h1>
          <p className="text-background/75 text-lg mt-6 max-w-2xl">{t("practice.lead")}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="bg-card p-8 border border-border rounded-sm hover:border-gold hover:shadow-elegant transition group">
                <div className="h-12 w-12 rounded-sm bg-gold-gradient flex items-center justify-center mb-5 shadow-gold">
                  <Icon className="h-6 w-6 text-ink" strokeWidth={1.8} />
                </div>
                <h2 className="font-serif text-xl text-ink mb-3">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl text-ink mb-6">{t("practice.ctaTitle")}</h2>
          <p className="text-muted-foreground mb-8">{t("practice.ctaText")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-ink transition">
            {t("practice.ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
