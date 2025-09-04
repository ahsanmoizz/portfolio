"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop vs mobile
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setSidebarOpen(desktop); // open by default only on desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.div
  initial={{ x: -300 }}
  animate={{
    x:
      sidebarOpen ||
      (typeof window !== "undefined" && window.innerWidth >= 768)
        ? 0
        : -300,
  }}
  transition={{ type: "spring", stiffness: 220, damping: 26 }}
 className="fixed inset-y-0 left-0 w-72 bg-black border-r border-black z-40 md:relative md:h-screen"

>
            <Sidebar open={true} onClose={() => setSidebarOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {!isDesktop && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black z-30"
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          isDesktop && sidebarOpen ? "ml-72" : "ml-0"
        }`}
      >
        {children}
      </main>

      {/* Hamburger (mobile + desktop when closed) */}
      {!sidebarOpen && (
        <motion.button
          onClick={() => setSidebarOpen(true)}
          whileTap={{ scale: 0.9 }}
          className="fixed top-4 left-4 z-50 flex flex-col justify-center items-center 
                     w-10 h-10 rounded-md bg-neutral-900/90 border border-neutral-700
                     hover:bg-neutral-800 transition"
        >
          <span className="block w-6 h-0.5 bg-white rounded-sm" />
          <span className="block w-6 h-0.5 bg-white rounded-sm my-1" />
          <span className="block w-6 h-0.5 bg-white rounded-sm" />
        </motion.button>
      )}
    </div>
  );
}
