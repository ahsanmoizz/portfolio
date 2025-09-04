"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa"; // 👈 desktop chevron

type NavItem = { title: string; href: string };

interface SidebarProps {
  open: boolean;
  items?: NavItem[];
  onClose: () => void;
}

export default function Sidebar({ open, items, onClose }: SidebarProps) {
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
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
     className="fixed inset-y-0 left-0 w-72 bg-black text-white 
           shadow-lg border-r border-black z-50"
    >
      {/* Close button — ❌ on mobile, chevron on desktop */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <span className="md:hidden">
          <FaTimes size={20} />
        </span>
        <span className="hidden md:inline">
          <FaChevronLeft size={20} />
        </span>
      </button>

      <nav className="flex flex-col mt-20 px-6 space-y-6">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: open ? 1 : 0, x: open ? 0 : -20 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="block px-3 py-2 rounded-md text-lg font-medium 
                         hover:bg-neutral-800 hover:text-pink-400 transition"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.aside>
  );
}
