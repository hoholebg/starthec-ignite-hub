import { Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-starthec.png";

export const Footer = () => {
  const links = {
    association: [
      { name: "À propos", href: "#about" },
      { name: "Notre équipe", href: "#team" },
      { name: "Nous rejoindre", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    poles: [
      { name: "Pôle Mission", href: "#mission" },
      { name: "Pôle Startups", href: "#poles" },
      { name: "Pôle Événements", href: "#events" },
      { name: "Pôle Alumni", href: "#poles" },
    ],
    ressources: [
      { name: "Blog", href: "#resources" },
      { name: "Guides entrepreneuriaux", href: "#resources" },
      { name: "Templates", href: "#resources" },
      { name: "Success Stories", href: "#" },
    ],
  };

  const partners = [
    "HEC Paris",
    "BNP Paribas",
    "McKinsey & Company",
    "Station F",
  ];

  return (
    <footer className="relative bg-primary text-white pt-16 pb-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-animated opacity-80" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="glass-strong bg-white/10 rounded-3xl p-8 md:p-12 mb-16 border border-white/20 shadow-glow-strong">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Restez informé</h3>
            <p className="text-white/80 mb-6">
              Recevez nos dernières actualités, événements et opportunités entrepreneuriales
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white text-primary border-0 flex-1"
              />
              <Button className="gradient-accent hover:scale-105 shadow-glow-strong transition-all font-semibold">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-brand rounded-xl blur-xl opacity-50" />
              <img src={logo} alt="Start'HEC" className="relative h-20 w-auto" />
            </div>
            <p className="text-white/90 mb-6 leading-relaxed text-lg">
              La première association d'entrepreneuriat étudiante d'Europe. Nous accompagnons les
              entrepreneurs HEC dans la réalisation de leurs ambitions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@starthec.com"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Association</h4>
            <ul className="space-y-2">
              {links.association.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Nos Pôles</h4>
            <ul className="space-y-2">
              {links.poles.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Ressources</h4>
            <ul className="space-y-2">
              {links.ressources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="font-semibold text-center mb-6">Nos Partenaires</h4>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <span key={partner} className="text-white/60 hover:text-white transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>HEC Paris, 1 Rue de la Libération, 78350 Jouy-en-Josas</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>

        <div className="text-center text-white/40 text-sm mt-8">
          © {new Date().getFullYear()} Start'HEC. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};
