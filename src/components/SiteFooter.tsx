import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Scale } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold-gradient">
              <Scale className="h-5 w-5 text-ink" strokeWidth={2.2} />
            </span>
            <span className="font-serif text-xl">Sylejman Barja</span>
          </div>
          <p className="text-sm text-background/65 leading-relaxed max-w-xs">
            Dedicated legal representation in Mitrovica with integrity, discretion, and decades of courtroom experience.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Office</h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Bedri Gjinaj, Mitrovica e Veriut 40000</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> +383 45 883 034</li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Mon–Fri · 9:00 AM – 5:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-background/80 hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="text-background/80 hover:text-gold">About</Link></li>
            <li><Link to="/practice-areas" className="text-background/80 hover:text-gold">Practice Areas</Link></li>
            <li><Link to="/contact" className="text-background/80 hover:text-gold">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-background/55 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Avokat Sylejman Barja. All rights reserved.</span>
          <span>Mitrovica, Republic of Kosovo</span>
        </div>
      </div>
    </footer>
  );
}
