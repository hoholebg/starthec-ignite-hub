import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Team = () => {
  const [activeTab, setActiveTab] = useState("bureau");

  const teamSections = {
    bureau: [
      {
        name: "Sophie Martin",
        role: "Présidente",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "sophie.martin@starthec.com"
      },
      {
        name: "Thomas Dubois",
        role: "Vice-Président",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "thomas.dubois@starthec.com"
      },
      {
        name: "Marie Leroy",
        role: "Trésorière",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "marie.leroy@starthec.com"
      },
      {
        name: "Pierre Bernard",
        role: "Secrétaire Général",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "pierre.bernard@starthec.com"
      }
    ],
    mission: [
      {
        name: "Camille Rousseau",
        role: "Responsable Pôle Mission",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "camille.rousseau@starthec.com"
      },
      {
        name: "Lucas Moreau",
        role: "Chef de Projet Consulting",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "lucas.moreau@starthec.com"
      },
      {
        name: "Emma Laurent",
        role: "Analyste Business",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "emma.laurent@starthec.com"
      }
    ],
    startups: [
      {
        name: "Alexandre Simon",
        role: "Responsable Pôle Startups",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "alexandre.simon@starthec.com"
      },
      {
        name: "Julie Petit",
        role: "Coordinatrice Incubation",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "julie.petit@starthec.com"
      }
    ],
    events: [
      {
        name: "Maxime Roux",
        role: "Responsable Pôle Événements",
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "maxime.roux@starthec.com"
      },
      {
        name: "Léa Girard",
        role: "Coordinatrice Communication",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
        linkedin: "#",
        email: "lea.girard@starthec.com"
      }
    ]
  };

  const tabs = [
    { id: "bureau", label: "Bureau" },
    { id: "mission", label: "Pôle Mission" },
    { id: "startups", label: "Pôle Startups" },
    { id: "events", label: "Pôle Événements" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-animated gradient-mesh overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Notre Équipe</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Des étudiants passionnés, engagés pour accompagner les entrepreneurs de demain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? "gradient-brand text-white shadow-glow-strong scale-105"
                    : "glass hover:scale-105"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamSections[activeTab as keyof typeof teamSections].map((member, index) => (
              <motion.div
                key={member.email}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 hover-lift group text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 gradient-brand rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-background shadow-glow-strong relative z-10"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-1 gradient-text">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-5 h-5 text-brand-blue" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 glass rounded-lg hover:scale-110 transition-transform"
                  >
                    <Mail className="w-5 h-5 text-brand-purple" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-animated gradient-mesh">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 text-center max-w-3xl mx-auto shadow-glow-strong"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Rejoignez l'aventure !
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nous recrutons régulièrement des étudiants motivés pour renforcer notre équipe. Envie de faire partie de la première association entrepreneuriale étudiante d'Europe ?
            </p>
            <button className="px-8 py-4 gradient-brand text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-glow-strong">
              Postuler maintenant
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;