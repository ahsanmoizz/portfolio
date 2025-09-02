
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ResumeButton() {
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);

    // Trigger browser download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // <-- place your resume file in /public/resume.pdf
    link.download = "resume.pdf";
    link.click();

    // Revert animation after 1.2s
    setTimeout(() => setAnimating(false), 1200);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 rounded-lg font-semibold text-white
                 bg-pink-600 hover:bg-pink-700 shadow-lg
                 transition-all overflow-hidden"
    >
      {!animating ? (
        "Download Resume"
      ) : (
        <motion.div
          className="flex gap-1 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              variants={{
                hidden: { scale: 0, y: 0 },
                visible: {
                  scale: 1,
                  y: [-3, 3, -3], // floating effect
                  transition: {
                    repeat: Infinity,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                },
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  );
}
