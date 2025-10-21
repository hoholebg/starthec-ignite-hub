import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const RocketLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-brand-blue/5 to-brand-purple/10"
        >
          <div className="relative w-64 h-64">
            {/* Fusée en Flat Design avec animation de dessin */}
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              {/* Corps de la fusée */}
              <motion.path
                d="M100 30 L120 90 L120 130 L80 130 L80 90 Z"
                fill="url(#gradient1)"
                stroke="hsl(var(--brand-blue))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              {/* Fenêtre */}
              <motion.circle
                cx="100"
                cy="70"
                r="12"
                fill="hsl(var(--brand-magenta))"
                stroke="hsl(var(--brand-purple))"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              />
              
              {/* Aileron gauche */}
              <motion.path
                d="M80 110 L60 150 L80 130 Z"
                fill="url(#gradient2)"
                stroke="hsl(var(--brand-purple))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
              />
              
              {/* Aileron droit */}
              <motion.path
                d="M120 110 L140 150 L120 130 Z"
                fill="url(#gradient2)"
                stroke="hsl(var(--brand-purple))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
              />
              
              {/* Flammes */}
              <motion.path
                d="M85 130 L90 155 L95 140 L100 160 L105 140 L110 155 L115 130"
                fill="none"
                stroke="hsl(var(--brand-red))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 0.8, 1],
                  y: [0, 5, 0]
                }}
                transition={{ 
                  pathLength: { delay: 0.8, duration: 0.4 },
                  opacity: { delay: 0.8, duration: 0.4 },
                  y: { delay: 1.2, duration: 0.6, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Définition des gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--brand-blue))" />
                  <stop offset="100%" stopColor="hsl(var(--brand-purple))" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--brand-purple))" />
                  <stop offset="100%" stopColor="hsl(var(--brand-magenta))" />
                </linearGradient>
              </defs>
            </svg>

            {/* Animation de décollage */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
              initial={{ y: 0 }}
              animate={{ y: -300 }}
              transition={{ delay: 1.5, duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="opacity-0"
              >
                <motion.path
                  d="M100 30 L120 90 L120 130 L80 130 L80 90 Z"
                  fill="url(#gradient1)"
                  stroke="hsl(var(--brand-blue))"
                  strokeWidth="3"
                  className="opacity-100"
                />
              </svg>
            </motion.div>

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 1, 0], y: 0 }}
              transition={{ duration: 3, times: [0, 0.2, 0.7, 1] }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
            >
              <p className="text-2xl font-bold gradient-text">Start'HEC</p>
              <p className="text-sm text-muted-foreground mt-1">Préparation au décollage...</p>
            </motion.div>

            {/* Particules d'étoiles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-gradient-accent"
                style={{
                  left: `${50 + Math.cos(i * Math.PI / 6) * 40}%`,
                  top: `${50 + Math.sin(i * Math.PI / 6) * 40}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  delay: 1.8 + i * 0.05,
                  duration: 0.8,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
