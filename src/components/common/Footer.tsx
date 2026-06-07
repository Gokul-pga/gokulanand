"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Top */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-white/40 mb-4">
              Contact
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Let's Build
              <br />
              Something Great
            </h2>

            <a
              href="mailto:gokulanand2508@gmail.com"
              className="inline-block mt-8 text-lg text-white/70 hover:text-white transition"
            >
              gokulanand2508@gmail.com
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-5">
            <a
              target="_blank"
              href="https://github.com/Gokul-pga"
              className="hover:text-white/60 transition"
            >
              Github
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/gokulanand-p-b3a7341a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:text-white/60 transition"
            >
              LinkedIn
            </a>

            {/* <a href="#" className="hover:text-white/60 transition">
              Instagram
            </a> */}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40">
            © 2026 Gokulanand. All rights reserved.
          </p>

          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/Gokul-pga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:scale-110 transition cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/gokulanand-p-b3a7341a0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:scale-110 transition cursor-pointer" />
            </a>

            {/* <FaInstagram className="hover:scale-110 transition cursor-pointer" /> */}
          </div>
        </div>
      </div>

      {/* Huge Background Text */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          absolute
          bottom-[-50px]
          left-1/2
          -translate-x-1/2
          pointer-events-none
          select-none
        "
      >
        <h1
          className="
            font-black
            uppercase
            whitespace-nowrap
            text-[120px]
            md:text-[220px]
            lg:text-[180px]
            leading-none
          "
        >
          WEB DEVELOPER
        </h1>
      </motion.div>
    </footer>
  );
}
