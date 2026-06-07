"use client";

import { motion } from "framer-motion";

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

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    left: "12%",
    top: "18%",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    left: "72%",
    top: "15%",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    left: "48%",
    top: "30%",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    left: "20%",
    top: "50%",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    left: "75%",
    top: "45%",
  },
  {
    name: "TanStack Query",
    icon: SiReactquery,
    color: "#FF4154",
    left: "35%",
    top: "65%",
  },
  {
    name: "TanStack Table",
    icon: TbTableFilled,
    color: "#FF6B35",
    left: "60%",
    top: "75%",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38BDF8",
    left: "10%",
    top: "80%",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#007FFF",
    left: "82%",
    top: "78%",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    left: "30%",
    top: "85%",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    left: "50%",
    top: "12%",
  },
  {
    name: "React Native",
    icon: FaMobileAlt,
    color: "#61DAFB",
    left: "88%",
    top: "30%",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-black overflow-hidden pt-16"
    >
      {/* Heading */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-8">
        <p className="uppercase tracking-[0.4em] text-gray-500 mb-4">Skills</p>

        <h2 className="text-white text-5xl md:text-7xl font-bold">
          Technologies
          <br />I Work With
        </h2>
      </div>

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className="
            text-[20vw]
            font-black
            text-white/[0.03]
            select-none
            uppercase
          "
        >
          SKILLS
        </h1>
      </div>

      {/* Floating Skills */}
      <div className="relative h-[600px] ">
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
                {/* Glow */}
                <div
                  className="
                    absolute
                    w-24
                    h-24
                    rounded-full
                    blur-3xl
                    opacity-0
                    group-hover:opacity-60
                    transition-all
                    duration-500
                  "
                  style={{
                    backgroundColor: skill.color,
                  }}
                />

                {/* Icon */}
                <Icon
                  size={70}
                  style={{
                    color: skill.color,
                  }}
                  className="relative z-10"
                />

                {/* Label */}
                <span
                  className="
                    mt-3
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-white
                    opacity-0
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                >
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
