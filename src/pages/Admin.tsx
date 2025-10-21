import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Edit2, Save, X } from "lucide-react";
import { motion } from "framer-motion";

interface ContentSection {
  id: string;
  section_type: string;
  title: string;
  content: string;
  image_url?: string;
  order_index: number;
  created_at: string;
}

const Admin = () => {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newSection, setNewSection] = useState({
    section_type: "event",
    title: "",
    content: "",
    image_url: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchSections();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    setIsLoading(false);
  };

  const fetchSections = async () => {
    const { data, error } = await supabase
      .from("content_sections")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les sections",
        variant: "destructive",
      });
    } else {
      setSections(data || []);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Erreur de connexion",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setIsAuthenticated(true);
      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans l'administration",
      });
    }
  };

  const handleAddSection = async () => {
    if (!newSection.title || !newSection.content) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase.from("content_sections").insert([
      {
        ...newSection,
        order_index: sections.length,
      },
    ]);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter la section",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Section ajoutée avec succès",
      });
      setNewSection({
        section_type: "event",
        title: "",
        content: "",
        image_url: "",
      });
      fetchSections();
    }
  };

  const handleUpdateSection = async (section: ContentSection) => {
    const { error } = await supabase
      .from("content_sections")
      .update({
        title: section.title,
        content: section.content,
        image_url: section.image_url,
      })
      .eq("id", section.id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la section",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Section mise à jour avec succès",
      });
      setEditingId(null);
      fetchSections();
    }
  };

  const handleDeleteSection = async (id: string) => {
    const { error } = await supabase
      .from("content_sections")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la section",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Section supprimée avec succès",
      });
      fetchSections();
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-animated gradient-mesh">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 gradient-text">
              Administration des Contenus
            </h1>

            {/* Add New Section */}
            <div className="glass-strong rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Ajouter une nouvelle section</h2>
              
              <div className="space-y-4">
                <select
                  value={newSection.section_type}
                  onChange={(e) => setNewSection({ ...newSection, section_type: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg glass"
                >
                  <option value="event">Événement</option>
                  <option value="resource">Ressource</option>
                  <option value="team">Membre de l'équipe</option>
                  <option value="news">Actualité</option>
                </select>

                <Input
                  placeholder="Titre"
                  value={newSection.title}
                  onChange={(e) => setNewSection({ ...newSection, title: e.target.value })}
                />

                <Textarea
                  placeholder="Contenu"
                  value={newSection.content}
                  onChange={(e) => setNewSection({ ...newSection, content: e.target.value })}
                  rows={4}
                />

                <Input
                  placeholder="URL de l'image (optionnel)"
                  value={newSection.image_url}
                  onChange={(e) => setNewSection({ ...newSection, image_url: e.target.value })}
                />

                <Button
                  onClick={handleAddSection}
                  className="gradient-brand text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter la section
                </Button>
              </div>
            </div>

            {/* Existing Sections */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Sections existantes</h2>
              
              {sections.map((section) => (
                <div key={section.id} className="glass-strong rounded-2xl p-6">
                  {editingId === section.id ? (
                    <div className="space-y-4">
                      <Input
                        value={section.title}
                        onChange={(e) =>
                          setSections(
                            sections.map((s) =>
                              s.id === section.id ? { ...s, title: e.target.value } : s
                            )
                          )
                        }
                      />
                      <Textarea
                        value={section.content}
                        onChange={(e) =>
                          setSections(
                            sections.map((s) =>
                              s.id === section.id ? { ...s, content: e.target.value } : s
                            )
                          )
                        }
                        rows={4}
                      />
                      <Input
                        value={section.image_url || ""}
                        onChange={(e) =>
                          setSections(
                            sections.map((s) =>
                              s.id === section.id ? { ...s, image_url: e.target.value } : s
                            )
                          )
                        }
                        placeholder="URL de l'image"
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleUpdateSection(section)}
                          className="gradient-brand text-white"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Enregistrer
                        </Button>
                        <Button
                          onClick={() => setEditingId(null)}
                          variant="outline"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Annuler
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-xs px-2 py-1 bg-brand-purple/20 rounded">
                            {section.section_type}
                          </span>
                          <h3 className="text-xl font-bold mt-2">{section.title}</h3>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => setEditingId(section.id)}
                            variant="outline"
                            size="sm"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => handleDeleteSection(section.id)}
                            variant="destructive"
                            size="sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{section.content}</p>
                      {section.image_url && (
                        <img
                          src={section.image_url}
                          alt={section.title}
                          className="mt-4 rounded-lg max-h-40 object-cover"
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const LoginForm = ({ onLogin }: { onLogin: (email: string, password: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-animated gradient-mesh">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-strong rounded-2xl p-8 max-w-md w-full mx-4"
      >
        <h1 className="text-3xl font-bold mb-6 gradient-text text-center">
          Administration
        </h1>
        
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={() => onLogin(email, password)}
            className="w-full gradient-brand text-white"
          >
            Se connecter
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Admin;
