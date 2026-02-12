import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">
              New <span className="text-gradient-gold">Asia</span>
            </h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Your trusted destination for premium fabrics and clothing for the entire family.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-light">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              {["Sarees", "Shalwar Kameez", "Tops", "Fabric", "New Arrivals"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-light">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              {["Size Guide", "Shipping", "Returns", "FAQs", "Track Order"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold-light">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" /> Lahore, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold" /> +92 300 1234567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold" /> info@rangmahal.com
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/30">
          © 2026 New Asia . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
