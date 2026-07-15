"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiMongodb,
  SiReactquery,
} from "react-icons/si";

import { TbTableFilled } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { FiCpu, FiLayers, FiActivity } from "react-icons/fi";

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    left: "12%",
    top: "18%",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    left: "72%",
    top: "15%",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    left: "48%",
    top: "30%",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    left: "20%",
    top: "50%",
    category: "frontend",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    left: "75%",
    top: "45%",
    category: "state",
  },
  {
    name: "TanStack Query",
    icon: SiReactquery,
    color: "#FF4154",
    left: "35%",
    top: "65%",
    category: "state",
  },
  {
    name: "TanStack Table",
    icon: TbTableFilled,
    color: "#FF6B35",
    left: "60%",
    top: "75%",
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38BDF8",
    left: "10%",
    top: "80%",
    category: "ui",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#007FFF",
    left: "82%",
    top: "78%",
    category: "ui",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    left: "30%",
    top: "85%",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    left: "50%",
    top: "12%",
    category: "backend",
  },
  {
    name: "React Native",
    icon: FaMobileAlt,
    color: "#61DAFB",
    left: "88%",
    top: "30%",
    category: "backend",
  },
];

const corePrinciples = [
  {
    title: "Performance First",
    desc: "Optimized bundle sizes, dynamic code-splitting, and perfect Core Web Vitals score baselines.",
    icon: FiActivity,
  },
  {
    title: "Type Safety & Security",
    desc: "End-to-end type integrity with rigid enterprise architecture schemas.",
    icon: FiCpu,
  },
  {
    title: "Scalable Architecture",
    desc: "Clean code structure engineered for progressive features and agile team cross-collaboration.",
    icon: FiLayers,
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend Core" },
    { id: "state", name: "Data & State" },
    { id: "ui", name: "UI Engineering" },
    { id: "backend", name: "Backend Ecosystem" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative bg-black overflow-hidden pt-24 pb-24 text-white"
    >
      {/* Huge Background Canvas Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h1 className="text-[24vw] font-black text-white/[0.015] uppercase tracking-wider">
          STACK
        </h1>
      </div>

      {/* Top Header Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="uppercase tracking-[0.4em] text-gray-500 mb-4 text-sm font-medium">
              Skills & Stack
            </p>
            <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Technologies
              <br />I Work With
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-white/20 pl-4">
              Building reliable web apps requires a balanced mixture of
              structured database layouts, predictable asynchronous global state
              modules, and intuitive component trees.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Constellation Visual Field (Hidden on smaller screens to prevent component layout collisions) */}
      <div className="relative h-[650px] hidden md:block max-w-7xl mx-auto z-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="absolute cursor-pointer"
              style={{
                left: skill.left,
                top: skill.top,
              }}
              animate={{
                y: [0, -20, 0, 15, 0],
                x: [0, 12, 0, -12, 0],
              }}
              transition={{
                duration: 8 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.25,
              }}
            >
              <div className="relative group flex flex-col items-center">
                {/* Glow Mask */}
                <div
                  className="absolute w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-500"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Main Icon */}
                <Icon
                  size={64}
                  style={{ color: skill.color }}
                  className="relative z-10 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                />

                {/* Popover Card Label */}
                <span className="mt-3 text-xs uppercase tracking-[0.2em] text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Adaptive Mobile Grid System (Displays dynamically only on mobile screens) */}
      <div className="block md:hidden max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="grid grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl"
              >
                <Icon size={40} style={{ color: skill.color }} />
                <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-2 text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Block Context Layer 01: Engineering Principles */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 mt-12 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {corePrinciples.map((principle, index) => {
            const CurrentIcon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CurrentIcon className="text-xl text-gray-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {principle.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Block Context Layer 02: Directory Filter List Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h3 className="text-2xl font-bold">Stack Directory Index</h3>

            {/* Horizontal Filter Navigation Bar */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-white text-black font-semibold"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Catalog Data Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill) => {
              const ItemIcon = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={`list-${skill.name}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/20 hover:bg-white/[0.03] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <ItemIcon style={{ color: skill.color }} size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors truncate">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] text-gray-500 capitalize tracking-wide">
                      {skill.category} node
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
