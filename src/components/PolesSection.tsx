import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Calendar, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import startupsImage from "@/assets/startups-incubation.jpg";

export const PolesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const poles = [
    {
      icon: Rocket,
      title: "Pôle Startups",
      description:
        "Programme d'incubation complet pour accompagner les entrepreneurs HEC du MVP à la levée de fonds",
      features: ["Mentoring personnalisé", "Accès aux investisseurs", "Coworking space", "Support juridique"],
      color: "from-primary to-primary/80",
    },
    {
      icon: Calendar,
      title: "Pôle Événements",
      description:
        "Organisation de conférences, workshops et événements de networking pour connecter entrepreneurs et experts",
      features: ["Conférences mensuelles", "Pitch competitions", "Networking events", "Workshops pratiques"],
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Network,
      title: "Pôle Alumni",
      description:
        "Réseau puissant d'entrepreneurs HEC pour partager expériences, opportunités et partenariats",
      features: ["Réseau de 500+ alumni", "Opportunités de collaboration", "Mentorat", "Success stories"],
      color: "from-primary/80 to-secondary",
    },
  ];

  return (
    <section id="poles" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="gradient-text">Pôles d'Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trois pôles complémentaires pour soutenir l'écosystème entrepreneurial HEC à chaque étape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {poles.map((pole, index) => (
            <motion.div
              key={pole.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-glow-strong transition-all duration-300 border border-transparent hover:border-gradient cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pole.color} opacity-5 group-hover:opacity-15 transition-opacity`} />
              
              <div className="relative bg-card p-8">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 gradient-brand rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-16 h-16 rounded-xl gradient-brand flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <pole.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{pole.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{pole.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {pole.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  En savoir plus
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-premium"
        >
          <img
            src={startupsImage}
            alt="Incubation Startups"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-3">Rejoignez l'écosystème Start'HEC</h3>
              <p className="text-xl text-white/90 mb-6">
                Plus de 500 entrepreneurs font déjà partie de notre communauté
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Découvrir nos programmes
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
