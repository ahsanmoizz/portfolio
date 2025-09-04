"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-black">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-100"
      >
       Blockchain Developer & Full-Stack Engineer
      </motion.h1>

      {/* Typing roles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-lg md:text-2xl text-pink-500 font-semibold"
      >
        <Typewriter
          options={{
            strings: [
            "Blockchain Engineer (EVM & Smart Contracts)",
      "Full-Stack Developer (Next.js, React, Node.js)",
      "AI-Driven Application Builder"
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      {/* Subtitle */}
    <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="mt-4 max-w-2xl text-gray-400"
>
  I design and build <span className="text-gray-200 font-medium">secure blockchain systems</span>, 
  <span className="text-gray-200 font-medium"> scalable web apps</span>, and 
  <span className="text-gray-200 font-medium"> AI-powered solutions</span> — 
  delivering real-world impact.
</motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/projects"
          className="px-6 py-3 rounded-md bg-pink-600 hover:bg-pink-500 transition text-white font-semibold"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-md border border-gray-600 hover:border-pink-500 transition text-gray-200"
        >
          Hire Me
        </a>
      </motion.div>
    </section>
  );
}
