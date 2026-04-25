import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Avokat Sylejman Barja, Attorney in Mitrovica" },
      { name: "description", content: "Contact Avokat Sylejman Barja in Mitrovica, Kosovo. Office on Bedri Gjinaj. Phone +383 45 883 034." },
      { property: "og:title", content: "Contact Avokat Sylejman Barja" },
      { property: "og:description", content: "Reach the office in Mitrovica for a confidential consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();

  const items = [
    { icon: MapPin, title: t("contact.address"), body: <>Bedri Gjinaj<br />Mitrovica e Veriut 40000<br />Republic of Kosovo</> },
    { icon: Phone, title: t("contact.phone"), body: <a href="tel:+38345883034" className="hover:text-gold">+383 45 883 034</a> },
    { icon: Mail, title: t("contact.email"), body: <a href="mailto:office@avokatbarja.com" className="hover:text-gold">office@avokatbarja.com</a> },
    { icon: Clock, title: t("contact.hours"), body: <span className="whitespace-pre-line">{t("contact.hoursValue")}</span> },
  ];

  return (
    <>
      <section className="bg-hero text-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">{t("contact.eyebrow")}</span>
          <div className="gold-divider mt-3 mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-tight">{t("contact.title")}</h1>
          <p className="text-background/75 text-lg mt-6 max-w-2xl">{t("contact.lead")}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl text-ink mb-2">{t("contact.office")}</h2>
              <div className="gold-divider mb-6" />
            </div>

            {items.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5">
                <div className="h-12 w-12 rounded-sm bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold">
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{title}</div>
                  <div className="text-foreground leading-relaxed">{body}</div>
                </div>
              </div>
            ))}

            <div className="rounded-sm overflow-hidden border border-border shadow-elegant">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=Bedri+Gjinaj,+Mitrovica+e+Veriut,+Kosovo&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-ink mb-2">{t("contact.formTitle")}</h2>
            <div className="gold-divider mb-8" />
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const subject = encodeURIComponent(`${t("contact.subjectPrefix")} — ${data.get("name")}`);
                const body = encodeURIComponent(
                  `${t("contact.fName")}: ${data.get("name")}\n${t("contact.fPhone")}: ${data.get("phone")}\n${t("contact.fEmail")}: ${data.get("email")}\n\n${data.get("message")}`
                );
                window.location.href = `mailto:office@avokatbarja.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="name" label={t("contact.fName")} required />
                <Field name="phone" label={t("contact.fPhone")} type="tel" />
              </div>
              <Field name="email" label={t("contact.fEmail")} type="email" required />
              <Field name="subject" label={t("contact.fSubject")} />
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{t("contact.fMessage")}</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-ink transition">
                {t("contact.fSubmit")} <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">{t("contact.disclaimer")}</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
      />
    </div>
  );
}
