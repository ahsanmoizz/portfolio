"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      
      {/* Large blurred rotating gradient circle (smooth infinite spin) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute w-[140vmax] h-[140vmax] rounded-full 
                   bg-[conic-gradient(at_center,_#ff16d1,_#ff4d6d,_#9b00ff,_#00f2ff,_#ff16d1)] 
                   opacity-25 blur-[100px]"
      />

      {/* Color-morphing conic gradient (clockwise ↔ anticlockwise) */}
      <motion.div
        animate={{
          rotate: [0, 360, 0, -360, 0],
          background: [
            "conic-gradient(at center, #ff16d1, #ff4d6d, #9b00ff, #00f2ff, #ff16d1)",
            "conic-gradient(at center, #00f2ff, #9b00ff, #ff16d1, #ffea00, #00f2ff)",
            "conic-gradient(at center, #ffea00, #00ff9b, #00f2ff, #ff16d1, #ffea00)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute inset-0 w-full h-full rounded-full opacity-30 blur-3xl"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold 
                   bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 
                   bg-clip-text text-transparent 
                   drop-shadow-[0_0_30px_#ff16d1]"
      >
      Blockchain Technology and AI powered Applications
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl"
      >
         Full-Stack Developer specializing in Blockchain, Smart Contracts, and Intelligent Web Solutions
      
      </motion.p>

      {/* CTA */}
 
    </section>
  );
}
