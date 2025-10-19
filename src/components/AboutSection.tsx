import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, Award } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "500+", label: "Membres actifs", icon: Users },
    { number: "95%", label: "Taux de réussite", icon: Award },
    { number: "100+", label: "Événements par an", icon: Lightbulb },
    { number: "2009", label: "Année de création", icon: Target },
  ];

  const timeline = [
    { year: "2009", title: "Création", description: "Fondation de Start'HEC" },
    { year: "2015", title: "Expansion", description: "Lancement du Pôle Mission" },
    { year: "2020", title: "Innovation", description: "Programme d'incubation" },
    { year: "2024", title: "Leadership", description: "N°1 en Europe" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À propos de <span className="gradient-text">Start'HEC</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Start'HEC est la première association d'entrepreneuriat étudiante d'Europe. Notre mission est
            d'accompagner les entrepreneurs HEC dans la concrétisation de leurs projets innovants, de l'idée
            initiale jusqu'au lancement et au-delà.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-premium hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <stat.icon className="w-8 h-8 text-primary mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Notre Histoire</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full gradient-premium flex items-center justify-center text-white font-bold text-xl mb-4 shadow-glow">
                    {item.year}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
