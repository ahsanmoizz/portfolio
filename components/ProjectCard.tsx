"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  img,
  link,
  description,
}: {
  title: string;
  img: string;
  link: string;
  description: string;
}) {
  function handleClick() {
   
    // open project link
    window.open(link, "_blank");
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={handleClick}
      className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden cursor-pointer shadow-lg hover:shadow-pink-500/50 border border-gray-700/50"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-pink-400 drop-shadow-[0_0_10px_#ff16d1]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
