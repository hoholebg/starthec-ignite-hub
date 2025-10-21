import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookOpen, Download, FileText, Video, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const resources = [
    {
      id: 1,
      title: "Guide Complet du Business Plan",
      category: "guide",
      description: "Méthodologie complète pour rédiger un business plan convaincant.",
      icon: FileText,
      format: "PDF",
      size: "2.5 MB",
      downloads: 1250
    },
    {
      id: 2,
      title: "Template Business Model Canvas",
      category: "template",
      description: "Modèle prêt à l'emploi pour structurer votre modèle d'affaires.",
      icon: Download,
      format: "PPTX",
      size: "1.2 MB",
      downloads: 980
    },
    {
      id: 3,
      title: "Masterclass : Pitcher son Projet",
      category: "video",
      description: "Vidéo tutoriel pour créer un pitch deck percutant en 10 minutes.",
      icon: Video,
      format: "Vidéo",
      duration: "45 min",
      views: 3400
    },
    {
      id: 4,
      title: "Étude de Marché : Méthodologie",
      category: "guide",
      description: "Guide pratique pour réaliser une étude de marché efficace.",
      icon: BookOpen,
      format: "PDF",
      size: "3.1 MB",
      downloads: 760
    },
    {
      id: 5,
      title: "Financial Projection Template",
      category: "template",
      description: "Modèle Excel pour vos prévisions financières sur 3 ans.",
      icon: Download,
      format: "XLSX",
      size: "850 KB",
      downloads: 1120
    },
    {
      id: 6,
      title: "Growth Hacking Strategies",
      category: "guide",
      description: "Les meilleures stratégies de croissance pour startups en 2024.",
      icon: FileText,
      format: "PDF",
      size: "1.8 MB",
      downloads: 890
    },
    {
      id: 7,
      title: "Legal Checklist pour Startups",
      category: "template",
      description: "Checklist des démarches juridiques essentielles.",
      icon: Download,
      format: "PDF",
      size: "650 KB",
      downloads: 540
    },
    {
      id: 8,
      title: "Webinar : Lever des Fonds",
      category: "video",
      description: "Replay du webinar avec des VCs sur les clés d'une levée réussie.",
      icon: Video,
      format: "Vidéo",
      duration: "1h 20min",
      views: 2100
    }
  ];

  const categories = [
    { id: "all", label: "Toutes les ressources" },
    { id: "guide", label: "Guides" },
    { id: "template", label: "Templates" },
    { id: "video", label: "Vidéos" }
  ];

  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  const articles = [
    {
      title: "Comment valider son idée de startup ?",
      excerpt: "Les 5 étapes essentielles pour tester votre concept avant de vous lancer.",
      date: "10 Janvier 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      title: "Marketing Digital pour Startups en 2024",
      excerpt: "Stratégies low-cost pour acquérir vos premiers clients.",
      date: "25 Décembre 2023",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    }
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
              <span className="gradient-text">Ressources</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Guides, templates et formations pour vous aider à réussir votre aventure entrepreneuriale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "gradient-brand text-white shadow-glow-strong scale-105"
                    : "glass hover:scale-105"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-strong rounded-2xl p-6 hover-lift group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 gradient-brand rounded-xl shadow-glow-strong group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 gradient-text">
                        {resource.title}
                      </h3>
                      <div className="flex gap-2 text-xs text-muted-foreground">
                        <span className="px-2 py-1 glass rounded">{resource.format}</span>
                        {resource.size && <span className="px-2 py-1 glass rounded">{resource.size}</span>}
                        {resource.duration && <span className="px-2 py-1 glass rounded">{resource.duration}</span>}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {resource.downloads && `${resource.downloads} téléchargements`}
                      {resource.views && `${resource.views} vues`}
                    </span>
                    <button className="flex items-center gap-2 px-4 py-2 gradient-brand text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                      <Download className="w-4 h-4" />
                      Accéder
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Blog Articles */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Articles & Insights
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-strong rounded-2xl overflow-hidden hover-lift group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex gap-3 text-sm text-muted-foreground mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 gradient-text">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>
                    
                    <button className="flex items-center gap-2 text-brand-purple font-semibold hover:gap-3 transition-all">
                      Lire l'article
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;