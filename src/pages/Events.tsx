import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Pitch Night 2024",
      date: "15 Mars 2024",
      time: "19:00 - 22:00",
      location: "HEC Paris Campus",
      attendees: 150,
      description: "Soirée de pitchs où les entrepreneurs présentent leurs projets devant un jury d'investisseurs.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      category: "Pitch"
    },
    {
      id: 2,
      title: "Workshop: Growth Hacking",
      date: "22 Mars 2024",
      time: "14:00 - 17:00",
      location: "Salle de Conférence A",
      attendees: 80,
      description: "Atelier pratique sur les stratégies de croissance rapide pour startups.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      category: "Workshop"
    },
    {
      id: 3,
      title: "Networking Entrepreneurs",
      date: "5 Avril 2024",
      time: "18:30 - 21:00",
      location: "Le Perchoir, Paris",
      attendees: 200,
      description: "Soirée networking pour connecter entrepreneurs, investisseurs et mentors.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop",
      category: "Networking"
    }
  ];

  const pastEvents = [
    {
      title: "Start'HEC Summit 2023",
      date: "Novembre 2023",
      description: "Le plus grand événement entrepreneurial étudiant d'Europe avec 500+ participants.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop"
    },
    {
      title: "Demo Day Automne 2023",
      date: "Octobre 2023",
      description: "Présentation des projets incubés avec levées de fonds à la clé.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop"
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
              <span className="gradient-text">Nos Événements</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Participez à nos événements pour développer votre réseau, apprendre des meilleurs et faire décoller votre projet entrepreneurial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Événements à venir
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-2xl overflow-hidden hover-lift group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-brand rounded-full text-white text-sm font-semibold">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 gradient-text">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-purple" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-purple" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-purple" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-brand-purple" />
                      <span>{event.attendees} participants attendus</span>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full px-6 py-3 gradient-brand text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-glow-strong">
                    S'inscrire
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-b from-transparent to-brand-blue/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Événements passés
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover-lift"
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-brand-purple font-semibold mb-3">{event.date}</p>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;