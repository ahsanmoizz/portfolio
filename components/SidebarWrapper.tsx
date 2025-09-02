"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Main content area */}
      <motion.div
        animate={{ x: sidebarOpen ? 288 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="flex-1 flex flex-col min-h-screen"
      >
        {children}
      </motion.div>

      {/* Floating Hamburger */}
      <motion.button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        whileTap={{ scale: 0.9 }}
        className="fixed top-5 left-5 z-50 flex flex-col justify-center items-center 
                   w-12 h-12 rounded-full bg-gray-900/70 backdrop-blur-md
                   border border-pink-500/30 hover:border-pink-400
                   transition-colors shadow-lg"
      >
        {/* Hamburger/X icon */}
        <motion.span
          animate={{
            rotate: sidebarOpen ? 45 : 0,
            y: sidebarOpen ? 6 : 0,
          }}
          className="block w-6 h-0.5 bg-white rounded-sm"
        />
        <motion.span
          animate={{
            opacity: sidebarOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="block w-6 h-0.5 bg-white rounded-sm my-1"
        />
        <motion.span
          animate={{
            rotate: sidebarOpen ? -45 : 0,
            y: sidebarOpen ? -6 : 0,
          }}
          className="block w-6 h-0.5 bg-white rounded-sm"
        />
      </motion.button>
    </div>
  );
}
