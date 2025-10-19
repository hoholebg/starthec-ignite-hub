import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Target, Zap, DollarSign, FileText, TrendingUp, Code, PieChart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import missionImage from "@/assets/mission-consulting.jpg";

export const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const values = [
    {
      icon: Target,
      title: "Expertise de qualité",
      description: "Des livrables professionnels réalisés par des étudiants HEC formés",
    },
    {
      icon: Zap,
      title: "Rapidité d'exécution",
      description: "Délais compétitifs grâce à notre équipe mobilisée",
    },
    {
      icon: DollarSign,
      title: "Tarifs accessibles",
      description: "Des prix étudiants pour un service de consultant",
    },
  ];

  const filters = ["Tous", "Étude de marché", "Business Plan", "Stratégie Marketing", "Conseil Financier", "Digital"];

  const missions = [
    {
      category: "Étude de marché",
      title: "Analyse du marché de la mobilité urbaine",
      description: "Étude complète du marché français de la mobilité électrique partagée",
      tags: ["Market Research", "Mobilité", "B2C"],
      status: "Complété",
    },
    {
      category: "Business Plan",
      title: "Business Plan pour startup EdTech",
      description: "Modèle économique et projections financières sur 5 ans",
      tags: ["Finance", "EdTech", "Seed"],
      status: "Complété",
    },
    {
      category: "Stratégie Marketing",
      title: "Stratégie de lancement produit SaaS",
      description: "Plan marketing complet pour une solution B2B en cybersécurité",
      tags: ["Marketing", "SaaS", "B2B"],
      status: "Complété",
    },
    {
      category: "Conseil Financier",
      title: "Modélisation financière pour levée de fonds",
      description: "Prévisions financières et pitch deck pour Série A",
      tags: ["Finance", "Fundraising", "Série A"],
      status: "Complété",
    },
    {
      category: "Digital",
      title: "Transformation digitale retail",
      description: "Stratégie omnicanale et implémentation e-commerce",
      tags: ["Digital", "Retail", "Transformation"],
      status: "Complété",
    },
    {
      category: "Étude de marché",
      title: "Benchmark concurrentiel FoodTech",
      description: "Analyse approfondie des acteurs du marché de la livraison de repas",
      tags: ["Benchmark", "FoodTech", "Concurrence"],
      status: "Complété",
    },
  ];

  const filteredMissions = selectedFilter === "Tous"
    ? missions
    : missions.filter((m) => m.category === selectedFilter);

  return (
    <section id="mission" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Premium Background */}
      <div className="absolute inset-0 gradient-subtle" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-20 shadow-premium"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${missionImage})` }}
          />
          <div className="absolute inset-0 gradient-hero opacity-95" />
          
          <div className="relative z-10 px-8 md:px-16 py-20 text-white">
            <Badge className="mb-4 bg-secondary text-primary">Pôle Mission</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Donnez vie à votre projet entrepreneurial
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl leading-relaxed text-white/90 font-light">
              Notre équipe d'experts accompagne les entrepreneurs dans leurs projets stratégiques : études de
              marché, business plans, stratégies digitales, et plus encore. Des prestations de conseil de
              qualité professionnelle, réalisées par des étudiants passionnés.
            </p>
          </div>
        </motion.div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-premium hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl gradient-premium flex items-center justify-center mb-6 shadow-glow">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Portfolio de <span className="gradient-text">nos missions</span>
          </h3>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className="transition-all"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredMissions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <Badge className="mb-4">{mission.category}</Badge>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {mission.title}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{mission.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {mission.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">{mission.status}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-3xl gradient-premium p-12 text-center shadow-premium"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Votre projet mérite notre expertise
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis gratuit
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8">
              Demander un devis gratuit
            </Button>

            {/* Testimonial */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-white text-lg italic mb-4 leading-relaxed">
                "Start'HEC nous a livré une étude de marché digne d'un grand cabinet de conseil, avec la
                réactivité et l'engagement d'une équipe passionnée."
              </p>
              <p className="text-white/80 font-medium">- Alexandre D., Fondateur d'une Startup Seed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
