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
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onClick={() => window.open(link, "_blank")}
      className="cursor-pointer rounded-lg overflow-hidden border border-gray-800 bg-gray-900 hover:border-pink-500 transition"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-100">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}
