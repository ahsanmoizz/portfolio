"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type NavItem = { title: string; href: string };

export default function Sidebar({
  open,
  items,
}: {
  open: boolean;
  items?: NavItem[];
}) {
  const bricks = Array.from({ length: 36 }).map((_, i) => i);

  const defaultNavLinks: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "About", href: "/about" },
    { title: "Resume", href: "/resume" },
    { title: "Contact", href: "/contact" },
  ];
  const navLinks = items ?? defaultNavLinks;

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: open ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed top-0 left-0 h-full w-72 bg-black/95 backdrop-blur-lg shadow-xl border-r border-pink-600 z-40 overflow-hidden"
    >
      {/* Brick animated background */}
      <div className="absolute inset-0 grid grid-cols-6 gap-1 opacity-30 pointer-events-none">
        {bricks.map((b, i) => (
          <motion.div
            key={b}
            initial={{ y: -200, opacity: 0 }}
            animate={open ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
            transition={{
              delay: i * 0.02,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
            className="bg-gradient-to-br from-pink-500/40 to-purple-700/40 rounded-sm"
          />
        ))}
      </div>

      {/* Navigation links (start lower → avoids hamburger overlap) */}
 <nav className="relative z-10 flex flex-col items-center justify-center h-full px-8 space-y-8">
  {open &&
    navLinks.map((link, i) => (
      <motion.div
        key={link.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.6 }}
        className="w-full text-center"
      >
        <Link
          href={link.href}
          className="group relative block text-2xl font-bold tracking-wide 
                     text-gray-200 
                     px-4 py-2 rounded-lg
                     bg-black/40 border border-pink-500/30 
                     hover:border-pink-500 hover:bg-black/60
                     transition-all duration-300"
        >
          <span className="relative z-10 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {link.title}
          </span>
          {/* Neon pulse border effect */}
          <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                           animate-pulse-slow 
                           bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
                           blur-md transition-opacity duration-500" />
        </Link>
      </motion.div>
    ))}
</nav>
    </motion.aside>
  );
}
