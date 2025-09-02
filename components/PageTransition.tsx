"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Generate shards of various sizes
const generateShards = (count: number) =>
  Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 40 + Math.random() * 80;

    const x1 = 50 + Math.cos(angle) * radius;
    const y1 = 50 + Math.sin(angle) * radius;
    const x2 = 50 + Math.cos(angle + Math.random() * 0.4) * (radius + 20);
    const y2 = 50 + Math.sin(angle + Math.random() * 0.4) * (radius + 20);

    return {
      clip: `polygon(50% 50%, ${x1}% ${y1}%, ${x2}% ${y2}%)`,
      angle,
    };
  });

const shards = generateShards(40); // more shards = more realism

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    setShowOverlay(true);
    const timer = setTimeout(() => setShowOverlay(false), 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        {showOverlay && (
          <motion.div
            key={pathname}
            className="fixed inset-0 z-50 bg-black pointer-events-none overflow-hidden"
          >
            {/* 🔹 Crack Flash */}
            <motion.div
               initial={{ opacity: 1 }}
  animate={{ opacity: 0 }}
  transition={{ duration: 0.4, delay: 0.4 }}
  className="absolute inset-0 bg-gradient-to-br 
             from-cyan-100/70 via-blue-200/50 to-white/20
             backdrop-blur-[2px] border border-white/10"
            >
              <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,rgba(255,255,255,0.7)_1px,transparent_2px,transparent_20px)] opacity-40" />
            </motion.div>

            {/* 🔹 Glass Shards */}
            {shards.map((s, i) => {
              const driftX = (Math.random() - 0.5) * 800; // scatter randomly left/right
              const driftY = 600 + Math.random() * 400; // fall different depths
              const spin = Math.random() * 720; // random rotation
              const delay = 0.4 + Math.random() * 0.3; // uneven start

              return (
                <motion.div
                  key={i}
                  initial={{ clipPath: s.clip, opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
                  animate={{
                    y: driftY,
                    x: driftX,
                    rotate: spin,
                    opacity: 0,
                    scale: 0.8 + Math.random() * 0.4,
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 0.8,
                    delay,
                    ease: [0.2, 0.8, 0.3, 1], // more natural easing
                  }}
                  className="absolute inset-0 bg-gradient-to-br 
                             from-cyan-100/70 via-blue-200/50 to-white/20
                             backdrop-blur-[2px] border border-white/10
                             shadow-[0_0_15px_rgba(180,220,255,0.6)]"
                  style={{ clipPath: s.clip }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Reveal Page AFTER shards clear */}
      <motion.div
        key={pathname + "-content"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.6 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
