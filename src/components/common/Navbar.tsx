"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/navigation";
const menuItems = [
  {
    name: "About",
    path: "/pages/About",
  },
  {
    name: "Skills",
    path: "/pages/Skillsets",
  },
  {
    name: "Projects",
    path: "/pages/Projects",
  },
  {
    name: "Contact",
    path: "/pages/Contact",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            onClick={() => router.push("/")}
            className="
              font-[var(--font-bebas)]
              text-xl md:text-4xl
              tracking-[0.25em]
              text-black cursor-pointer
            "
          >
            GOKULANAND
          </motion.h1>

          {/* Desktop Menu */}
          <div
            className="
              hidden md:flex
              items-center
              gap-10
              font-[var(--font-space)]
              uppercase
              tracking-[0.2em]
              text-sm
              text-gray-600
            "
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => router.push(item.path)}
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                }}
                className="
      hover:text-black
      transition-colors
      cursor-pointer
    "
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <HiOutlineMenuAlt4 />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-0
                right-0
                z-[60]
                h-screen
                w-[80%]
                bg-white
                p-8
              "
            >
              <div className="flex justify-end">
                <button
                  className="text-4xl text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <HiX />
                </button>
              </div>

              <div className="mt-16 flex flex-col gap-8">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      router.push(item.path);
                      setIsOpen(false);
                    }}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="
      text-left
      text-xl
      uppercase
      tracking-[0.15em]
      font-[var(--font-space)]
      text-gray-700
      cursor-pointer
    "
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
