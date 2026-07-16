"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const links = [
  { href: "/", text: "home", key: "h" },
  { href: "/projects", text: "projects", key: "p" },
  { href: "/collab", text: "collab projects", key: "c" },
  { href: "/skills", text: "skills", key: "s" },
];

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleKeyPress = (event: KeyboardEvent) => {
    // Avoid triggering when user is typing in form inputs
    if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
      return;
    }
    const key = event.key.toLowerCase();
    const link = links.find((link) => link.key === key);
    if (link) {
      router.push(link.href, { scroll: true });
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <div className="sticky top-6 z-50 flex flex-col items-center w-full mb-6 md:mb-8">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex glass-panel px-3 py-2 rounded-full items-center gap-2 shadow-lg shadow-black/20">
        {links.map(({ href, text, key }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={key}
              href={href}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                isActive 
                  ? "text-indigo-400 bg-white/5 shadow-inner" 
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
              }`}
            >
              <span className="opacity-50 text-[10px] font-mono bg-neutral-800 px-1 py-0.5 rounded border border-neutral-700">
                {key}
              </span>
              <span>{text}</span>
              {isActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-glow" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation Trigger */}
      <div className="md:hidden flex justify-between items-center w-full px-4">
        <div className="glass-panel p-2 rounded-full shadow-lg shadow-black/20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-neutral-400 hover:text-neutral-200 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-16 left-4 right-4 md:hidden glass-panel rounded-2xl p-4 shadow-xl shadow-black/40 flex flex-col gap-2 mt-2"
          >
            {links.map(({ href, text, key }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                    isActive 
                      ? "text-indigo-400 bg-white/5" 
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
                  }`}
                >
                  <span>{text}</span>
                  <span className="opacity-50 text-[10px] font-mono bg-neutral-800 px-1 py-0.5 rounded border border-neutral-700">
                    {key}
                  </span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

