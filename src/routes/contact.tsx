import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

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
  return (
    <>
      <section className="bg-hero text-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Contact</span>
          <div className="gold-divider mt-3 mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-tight">
            Let's discuss your matter.
          </h1>
          <p className="text-background/75 text-lg mt-6 max-w-2xl">
            Every inquiry is treated with complete confidentiality. Reach out
            by phone or send a message and you'll receive a personal response.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl text-ink mb-2">Office</h2>
              <div className="gold-divider mb-6" />
            </div>

            {[
              { icon: MapPin, title: "Address", body: <>Bedri Gjinaj<br />Mitrovica e Veriut 40000<br />Republic of Kosovo</> },
              { icon: Phone, title: "Telephone", body: <a href="tel:+38345883034" className="hover:text-gold">+383 45 883 034</a> },
              { icon: Mail, title: "Email", body: <a href="mailto:office@avokatbarja.com" className="hover:text-gold">office@avokatbarja.com</a> },
              { icon: Clock, title: "Hours", body: <>Monday – Friday<br />9:00 AM – 5:00 PM</> },
            ].map(({ icon: Icon, title, body }) => (
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

          {/* Form */}
          <div>
            <h2 className="font-serif text-3xl text-ink mb-2">Send a Message</h2>
            <div className="gold-divider mb-8" />
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const subject = encodeURIComponent(`Consultation request — ${data.get("name")}`);
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
                );
                window.location.href = `mailto:office@avokatbarja.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="name" label="Full Name" required />
                <Field name="phone" label="Phone" type="tel" />
              </div>
              <Field name="email" label="Email" type="email" required />
              <Field name="subject" label="Subject" />
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-ink transition"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                By sending this message you consent to be contacted regarding your inquiry. All communication is confidential.
              </p>
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
