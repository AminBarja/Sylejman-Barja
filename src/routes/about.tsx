import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpen, Users, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-justice.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Avokat Sylejman Barja — Attorney in Mitrovica" },
      { name: "description", content: "Learn about Avokat Sylejman Barja, an experienced attorney serving clients in Mitrovica, Kosovo with integrity and dedication." },
      { property: "og:title", content: "About Avokat Sylejman Barja" },
      { property: "og:description", content: "Experienced attorney serving Mitrovica, Kosovo." },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero text-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">About</span>
          <div className="gold-divider mt-3 mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-tight">
            Avokat Sylejman Barja
          </h1>
          <p className="text-background/75 text-lg mt-6 max-w-2xl">
            A respected legal practitioner whose work is defined by careful
            preparation, unwavering ethics, and a deep commitment to every client.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-elegant sticky top-28">
              <img
                src={heroImage}
                alt="Avokat Sylejman Barja"
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-10">
            <div>
              <h2 className="font-serif text-3xl text-ink mb-4">Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The law, at its best, is an instrument of dignity. My practice
                is built on the conviction that every client — regardless of the
                size or complexity of their matter — deserves clear advice,
                honest assessment, and tireless representation.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-ink mb-4">Background</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based in Mitrovica e Veriut, the firm serves clients across
                Kosovo in matters ranging from criminal defense and civil
                disputes to family law, inheritance, and commercial questions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Years of courtroom practice have shaped a measured approach:
                pursue settlement when it serves the client, and litigate
                forcefully when it does not.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-ink mb-6">Commitments to Every Client</h2>
              <ul className="space-y-4">
                {[
                  "Clear, jargon-free communication at every stage",
                  "Strict confidentiality and discretion",
                  "Honest evaluation of strengths and risks",
                  "Personal attention — your case is never delegated away",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, label: "Years in Practice", value: "20+" },
            { icon: Users, label: "Clients Represented", value: "500+" },
            { icon: BookOpen, label: "Areas of Law", value: "Multiple" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center bg-card p-10 rounded-sm border border-border">
              <Icon className="h-8 w-8 text-gold mx-auto mb-4" />
              <div className="font-serif text-5xl text-ink mb-2">{value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-4xl text-ink mb-6">Ready to discuss your case?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-ink transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
