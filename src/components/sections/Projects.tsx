"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { projects } from "@/src/data/projects";
import { FiExternalLink, FiImage } from "react-icons/fi";
export default function ProjectsListing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * projects.length),
      projects.length - 1
    );

    setActiveIndex(index);
  });

  const activeProject = projects[activeIndex];

  return (
    <>
      <section
        id="projects"
        className="bg-black py-20 px-4 flex flex-col lg:hidden"
      >
        {" "}
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-gray-500 mb-4">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold text-white mb-16">
            Selected Projects
          </h2>

          <div className="space-y-16">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div
                  className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
              "
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1400}
                      height={900}
                      className="
                    w-full
                    h-[220px]
                    object-cover
                  "
                    />
                  ) : (
                    <div
                      className="
                    h-[220px]
                    flex
                    items-center
                    justify-center
                    bg-white/5
                    text-white/60
                  "
                    >
                      <FiImage size={50} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mt-6">
                  <div className="text-white/10 text-6xl font-black">
                    {project.id}
                  </div>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      text-xs
                      text-white
                    "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                      inline-flex
                      items-center
                      gap-2
                      text-white
                    "
                      >
                        Visit Site
                        <FiExternalLink />
                      </a>
                    ) : (
                      <span className="text-white/40">
                        Preview Not Available
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        id="projects"
        className="hidden lg:block relative h-[400vh] bg-black"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {" "}
          <div className="max-w-7xl mx-auto h-full px-6">
            <div
              className="
    grid
    grid-cols-1
    lg:grid-cols-2 reverse-rows-1
    gap-8
    lg:gap-16
    h-full
    items-center
  "
            >
              {" "}
              {/* LEFT SIDE */}
              <div className="order-2 lg:order-1 px-2 lg:px-0 mt-7">
                {" "}
                <p
                  className="
  uppercase
  tracking-[0.25em]
  lg:tracking-[0.4em]
  text-gray-500
  mb-4
  lg:mb-6
  text-xs
  lg:text-base
"
                >
                  Featured Work
                </p>
                <div className="flex gap-2 lg:gap-4 mb-6 lg:mb-12 overflow-x-auto">
                  {" "}
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveIndex(index)}
                      className="group"
                    >
                      <div
                        className={`
          h-[4px]
          rounded-full
          transition-all
          duration-500
          ${
            activeIndex === index
              ? "w-24 bg-white"
              : "w-16 bg-white/20 group-hover:bg-white/50"
          }
        `}
                      />
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -80,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <div className="text-white/10 text-[120px] md:text-[180px] font-black leading-none">
                      {activeProject.id}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      {activeProject.title}
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {activeProject.tech.map((tech: string) => (
                        <motion.span
                          key={tech}
                          whileHover={{
                            scale: 1.08,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          }}
                          className="
        group
        relative
        overflow-hidden
        px-4
        py-2
        rounded-full
        border
        border-white/10
        bg-white/5
        text-sm
        text-white
        cursor-default
      "
                        >
                          {/* Animated Shine */}
                          <span
                            className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
                          />

                          {/* Text */}
                          <span className="relative z-10">{tech}</span>
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.image || activeProject.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="
        relative
        overflow-hidden
        rounded-[10px]
        border
        border-white/10
      "
                  >
                    {activeProject.image ? (
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        width={1400}
                        height={900}
                        className="
            w-full
            h-[300px]
            object-cover
          "
                        priority
                      />
                    ) : (
                      <div
                        className="
            h-[300px]
            flex
            flex-col
            items-center
            justify-center
            bg-white/5
            text-white/60
          "
                      >
                        <FiImage size={60} className="mb-4" />

                        <h3 className="text-lg font-medium">
                          No Preview Available
                        </h3>

                        <p className="text-sm text-white/40 mt-2">
                          Screenshot not uploaded yet
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Link Below Image */}
                <div className="mt-6 flex justify-end">
                  {activeProject?.liveUrl ? (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
          inline-flex
          items-center
          gap-2
          text-white
          hover:text-gray-300
          transition-all
          duration-300
        "
                    >
                      Visit Site
                      <FiExternalLink size={18} />
                    </a>
                  ) : (
                    <span className="text-white/40">Preview Not Available</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
