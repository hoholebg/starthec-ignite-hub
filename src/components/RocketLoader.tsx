import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

export const RocketLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animation dure 2.5 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          {/* Logo et Fusée */}
          <div className="relative">
            {/* Fusée qui décolle */}
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ 
                y: -400, 
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 1.2],
              }}
              transition={{ 
                duration: 2.5,
                times: [0, 0.2, 0.8, 1],
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="relative"
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-brand rounded-full blur-2xl"
                />
                
                {/* Rocket Icon */}
                <div className="relative w-20 h-20 rounded-full gradient-brand flex items-center justify-center shadow-glow-strong">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Trail effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-brand-magenta to-transparent"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
              className="absolute top-32 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
            >
              <p className="text-2xl font-bold gradient-text">Start'HEC</p>
              <p className="text-sm text-muted-foreground text-center mt-1">Décollage imminent...</p>
            </motion.div>
          </div>

          {/* Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0,
                scale: 0 
              }}
              animate={{ 
                x: Math.cos(i * Math.PI / 4) * 200,
                y: Math.sin(i * Math.PI / 4) * 200,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5,
                delay: 1,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 bg-gradient-accent rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
