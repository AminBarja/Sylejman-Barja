import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale, ShieldCheck, Gavel, Award, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-justice.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avokat Sylejman Barja — Attorney at Law in Mitrovica, Kosovo" },
      { name: "description", content: "Trusted legal counsel in Mitrovica. Avokat Sylejman Barja provides experienced representation in civil, criminal, family, and business law." },
      { property: "og:title", content: "Avokat Sylejman Barja — Attorney at Law" },
      { property: "og:description", content: "Trusted legal counsel in Mitrovica, Kosovo." },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero text-background overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={heroImage}
            alt="Scales of justice on a desk"
            width={1600}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-6">
              <span className="h-px w-8 bg-gold" /> Established Legal Practice
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
              Principled counsel.<br />
              <span className="text-gold italic">Resolute</span> representation.
            </h1>
            <p className="text-lg md:text-xl text-background/80 max-w-xl mb-10 leading-relaxed">
              Avokat Sylejman Barja delivers thoughtful, dedicated legal advocacy
              for clients across Mitrovica and throughout Kosovo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gold-gradient text-ink font-semibold rounded-sm shadow-gold hover:opacity-95 transition"
              >
                Schedule a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-4 border border-background/30 text-background hover:border-gold hover:text-gold rounded-sm transition"
              >
                Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gold mt-0.5" />
            <div>
              <div className="font-semibold text-ink">Office Location</div>
              <div className="text-muted-foreground">Bedri Gjinaj, Mitrovica e Veriut 40000</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-gold mt-0.5" />
            <div>
              <div className="font-semibold text-ink">Direct Line</div>
              <a href="tel:+38345883034" className="text-muted-foreground hover:text-gold">+383 45 883 034</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 text-gold mt-0.5" />
            <div>
              <div className="font-semibold text-ink">Trusted Counsel</div>
              <div className="text-muted-foreground">Member of the Kosovo Bar Association</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-elegant relative">
              <img
                src={heroImage}
                alt="Law office"
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-gradient p-6 shadow-gold rounded-sm hidden md:block">
                <div className="font-serif text-4xl text-ink">20+</div>
                <div className="text-xs uppercase tracking-widest text-ink/80">Years of Practice</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">About the Attorney</span>
            <div className="gold-divider mt-3 mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              A lifetime devoted to justice and to clients.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              For more than two decades, Avokat Sylejman Barja has represented
              individuals, families, and businesses in matters that demand both
              legal precision and human understanding. Each case is treated with
              the seriousness it deserves.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From quiet negotiations to firm courtroom advocacy, the practice
              is grounded in one principle: the client always comes first.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-ink font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all"
            >
              Read Full Biography <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS PREVIEW */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Areas of Practice</span>
            <div className="gold-divider mx-auto mt-3 mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              Comprehensive legal services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Gavel, title: "Criminal Defense", desc: "Strategic defense in criminal proceedings, from investigation through appeal." },
              { icon: Scale, title: "Civil Litigation", desc: "Resolving disputes between individuals, businesses, and institutions." },
              { icon: ShieldCheck, title: "Family & Property", desc: "Inheritance, divorce, custody, and property disputes handled with care." },
            ].map(({ icon: Icon, title, desc }) => (
              <article key={title} className="bg-card p-10 rounded-sm border border-border hover:border-gold transition group">
                <div className="h-14 w-14 rounded-sm bg-gold-gradient flex items-center justify-center mb-6 shadow-gold">
                  <Icon className="h-7 w-7 text-ink" strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-2xl text-ink mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 text-ink font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all"
            >
              View All Practice Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero text-background py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Discuss your matter in <span className="text-gold italic">confidence</span>.
          </h2>
          <p className="text-background/75 text-lg mb-10 max-w-xl mx-auto">
            Every consultation is private, attentive, and free of obligation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-ink font-semibold rounded-sm shadow-gold hover:opacity-95 transition"
          >
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
