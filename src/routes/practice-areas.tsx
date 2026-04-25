import { createFileRoute, Link } from "@tanstack/react-router";
import { Gavel, Scale, ShieldCheck, Briefcase, Home, FileText, Users, Building2 } from "lucide-react";

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

const areas = [
  { icon: Gavel, title: "Criminal Defense", desc: "Defense in criminal investigations, pre-trial proceedings, trials, and appeals — protecting your rights at every step." },
  { icon: Scale, title: "Civil Litigation", desc: "Representation in disputes involving contracts, damages, debts, and obligations between individuals or organizations." },
  { icon: Home, title: "Property & Real Estate", desc: "Title disputes, property transfers, registration matters, and ownership claims handled with thorough diligence." },
  { icon: Users, title: "Family Law", desc: "Divorce, child custody, alimony, and matters of personal status approached with sensitivity and clarity." },
  { icon: FileText, title: "Inheritance & Succession", desc: "Wills, estates, succession proceedings, and resolution of disputes between heirs." },
  { icon: Briefcase, title: "Labor & Employment", desc: "Employment contracts, wrongful dismissal claims, and workplace disputes for both employees and employers." },
  { icon: Building2, title: "Business & Commercial", desc: "Company formation, commercial contracts, and ongoing legal counsel for small and medium-sized enterprises." },
  { icon: ShieldCheck, title: "Administrative Law", desc: "Representation before government agencies, licensing matters, and challenges to administrative decisions." },
];

function PracticeAreasPage() {
  return (
    <>
      <section className="bg-hero text-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Practice Areas</span>
          <div className="gold-divider mt-3 mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-tight">
            Legal services tailored to your matter.
          </h1>
          <p className="text-background/75 text-lg mt-6 max-w-2xl">
            Each area below reflects active, current practice. If your matter
            falls elsewhere, a brief consultation can clarify whether the firm
            can help or refer you appropriately.
          </p>
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
          <h2 className="font-serif text-4xl text-ink mb-6">Not sure where your case fits?</h2>
          <p className="text-muted-foreground mb-8">
            A short conversation is often all it takes to understand your
            options. Reach out to discuss your situation in confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-ink transition"
          >
            Contact the Office
          </Link>
        </div>
      </section>
    </>
  );
}
