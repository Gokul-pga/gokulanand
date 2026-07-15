"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BsFillPaletteFill } from "react-icons/bs";
import {
  FiSearch,
  FiCode,
  FiLayout,
  FiZap,
  FiCheckCircle,
  FiArrowRight,
  FiGithub,
  FiMonitor,
  FiSmartphone,
  FiGlobe,
} from "react-icons/fi";

const DevelopmentJourney = () => {
  const [activePhase, setActivePhase] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const phases = [
    {
      id: 1,
      title: "Phase 01 · Explore & Understand",
      icon: FiSearch,
      color: "#6366F1",
      bg: "from-indigo-500/10 to-violet-500/10",
      gradient: "from-indigo-600 to-violet-600",
      duration: "Discovery",
      steps: [
        {
          title: "Requirement Analysis",
          description:
            "Understand the business objectives, target audience, and project scope before making any technical decisions.",
          icon: FiSearch,
          thinking: "What problem are we solving? What does success look like?",
        },
        {
          title: "Research & Inspiration",
          description:
            "Study competitors, industry trends, and modern design patterns to identify opportunities.",
          icon: FiGlobe,
          thinking:
            "Can we build something better than what's already available?",
        },
        {
          title: "Project Planning",
          description:
            "Break the project into milestones, define priorities, and estimate timelines.",
          icon: FiLayout,
          thinking: "How can we deliver maximum value with minimum complexity?",
        },
      ],
    },

    {
      id: 2,
      title: "Phase 02 · Strategy & Design",
      icon: BsFillPaletteFill,
      color: "#EC4899",
      bg: "from-pink-500/10 to-rose-500/10",
      gradient: "from-pink-600 to-rose-600",
      duration: "Planning",
      steps: [
        {
          title: "System Architecture",
          description:
            "Design scalable folder structures, APIs, authentication, and database relationships.",
          icon: FiCode,
          thinking: "A good architecture makes future development easier.",
        },
        {
          title: "UI / UX Design",
          description:
            "Create clean interfaces with accessibility, consistency, and user experience in mind.",
          icon: FiMonitor,
          thinking: "Simple interfaces create better user experiences.",
        },
        {
          title: "Design System",
          description:
            "Define typography, spacing, colors, reusable components, and interaction patterns.",
          icon: BsFillPaletteFill,
          thinking: "Consistency builds trust and improves usability.",
        },
      ],
    },

    {
      id: 3,
      title: "Phase 03 · Build & Implement",
      icon: FiCode,
      color: "#3B82F6",
      bg: "from-blue-500/10 to-cyan-500/10",
      gradient: "from-blue-600 to-cyan-600",
      duration: "Development",
      steps: [
        {
          title: "Frontend Development",
          description:
            "Build responsive, reusable, and accessible interfaces using React, Next.js, and Tailwind CSS.",
          icon: FiMonitor,
          thinking: "Performance and maintainability come before shortcuts.",
        },
        {
          title: "Backend Development",
          description:
            "Develop secure REST APIs, authentication, business logic, and database integration.",
          icon: FiGithub,
          thinking: "A strong backend is the foundation of every application.",
        },
        {
          title: "Integration",
          description:
            "Connect frontend, backend, authentication, and third-party services into one seamless product.",
          icon: FiZap,
          thinking: "Every module should work together without friction.",
        },
      ],
    },

    {
      id: 4,
      title: "Phase 04 · Test & Optimize",
      icon: FiCheckCircle,
      color: "#10B981",
      bg: "from-emerald-500/10 to-green-500/10",
      gradient: "from-emerald-600 to-green-600",
      duration: "Quality",
      steps: [
        {
          title: "Testing",
          description:
            "Validate functionality, responsiveness, accessibility, and edge cases across multiple devices.",
          icon: FiCheckCircle,
          thinking: "Software is only finished when it's reliable.",
        },
        {
          title: "Performance Optimization",
          description:
            "Optimize loading speed, SEO, Core Web Vitals, bundle size, and rendering performance.",
          icon: FiZap,
          thinking: "Fast products create happy users.",
        },
        {
          title: "Security Review",
          description:
            "Verify authentication, authorization, validation, and data protection before release.",
          icon: FiCode,
          thinking: "Security should be built in, not added later.",
        },
      ],
    },

    {
      id: 5,
      title: "Phase 05 · Deploy & Deliver",
      icon: FiGithub,
      color: "#F59E0B",
      bg: "from-amber-500/10 to-orange-500/10",
      gradient: "from-amber-600 to-orange-600",
      duration: "Deployment",
      steps: [
        {
          title: "Production Deployment",
          description:
            "Deploy applications using CI/CD pipelines with proper environment configuration.",
          icon: FiGithub,
          thinking: "Deployment should be smooth, repeatable, and automated.",
        },
        {
          title: "Monitoring",
          description:
            "Track application health, errors, analytics, and user behavior after launch.",
          icon: FiMonitor,
          thinking: "Real insights come from real users.",
        },
        {
          title: "Continuous Improvement",
          description:
            "Gather feedback, fix issues, and deliver new features through iterative releases.",
          icon: FiArrowRight,
          thinking: "Every release is an opportunity to improve.",
        },
      ],
    },
  ];

  const colorPalette = [
    { color: "#8B5CF6", name: "Violet", hex: "#8B5CF6" },
    { color: "#EC4899", name: "Pink", hex: "#EC4899" },
    { color: "#3B82F6", name: "Blue", hex: "#3B82F6" },
    { color: "#F59E0B", name: "Amber", hex: "#F59E0B" },
    { color: "#10B981", name: "Emerald", hex: "#10B981" },
    { color: "#EF4444", name: "Red", hex: "#EF4444" },
  ];

  const ActiveIcon = phases[activePhase].icon;

  return (
    <section
      ref={ref}
      className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Showcase Header */}
        <div className="mb-12 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-gray-500 text-sm"
          >
            Showcase
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-7xl font-bold mt-6 leading-tight"
          >
            Building
            <br />
            Digital Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed"
          >
            Creating modern web applications, mobile experiences, and scalable
            digital products with a focus on performance, usability, and
            beautiful user interfaces.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="mb-16 md:mb-24">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Frontend",
                desc: "React.js, Next.js, TypeScript, Redux Toolkit, TanStack Query",
              },
              {
                title: "Mobile",
                desc: "React Native applications with scalable architecture",
              },
              {
                title: "UI Engineering",
                desc: "Dashboards, design systems, animations, and responsive experiences",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-600 font-semibold text-sm mb-4 border border-violet-200">
            🚀 Development Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            From Idea to Implementation
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            A structured approach to building exceptional digital experiences —
            thinking like a developer, designing like an artist.
          </p>
        </motion.div>

        {/* Color Palette Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <BsFillPaletteFill className="text-xl md:text-2xl text-gray-700 shrink-0" />
              <div>
                <span className="font-semibold text-gray-800 block sm:inline">
                  Design Palette
                </span>
                <span className="hidden sm:inline text-sm text-gray-500 px-2">
                  |
                </span>
                <span className="text-xs md:text-sm text-gray-500 block sm:inline">
                  Carefully selected for emotional impact
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {colorPalette.map((color, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -4 }}
                  className="group relative"
                >
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer shadow-md"
                    style={{ backgroundColor: color.color }}
                  />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] md:text-xs bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap z-30">
                    {color.name} {color.hex}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Phase Navigation Tabs - Responsive Touch Scroller on Mobile */}
        <div
          className="
    flex
    md:flex-wrap
    justify-start
    md:justify-center
    overflow-x-auto
    md:overflow-visible
    pb-4
    mb-12
    gap-3
    -mx-4
    px-4
    md:mx-0
    md:px-0
    scrollbar-none
    snap-x
    md:snap-none
  "
        >
          {" "}
          {phases.map((phase, index) => (
            <motion.button
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActivePhase(index)}
              className={`
                px-5 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap snap-center shrink-0 text-sm md:text-base
                ${
                  activePhase === index
                    ? `bg-gradient-to-r ${phase.gradient} text-white shadow-lg shadow-${phase.color}/30`
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }
              `}
            >
              <span className="flex items-center gap-2">
                <phase.icon className="text-base md:text-lg" />
                {phase.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active Phase Content Split */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Phase Details */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-1 rounded-2xl shrink-0"
                  style={{ backgroundColor: `${phases[activePhase].color}15` }}
                >
                  <div
                    className="p-2 md:p-3 rounded-2xl"
                    style={{
                      backgroundColor: `${phases[activePhase].color}15`,
                    }}
                  >
                    <ActiveIcon
                      className="text-2xl md:text-3xl"
                      style={{ color: phases[activePhase].color }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    {phases[activePhase].title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {phases[activePhase].steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="mt-1 shrink-0">
                        <step.icon
                          className="text-lg md:text-xl"
                          style={{ color: phases[activePhase].color }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-[11px] md:text-xs">
                          <span className="text-gray-400">💭</span>
                          <span className="text-gray-500 italic truncate">
                            {step.thinking}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Representation */}
          <motion.div
            key={`visual-${activePhase}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Phase Visualization */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((activePhase + 1) / phases.length) * 100}%`,
                    }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {activePhase + 1}/{phases.length}
                </span>
              </div>

              {/* Layout Container - Adaptive sizing prevents content overflow on small screens */}
              <div className="aspect-auto lg:aspect-video min-h-[300px] sm:min-h-[250px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 md:p-6 relative overflow-hidden flex flex-col justify-center">
                {/* Background Blobs */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div
                    className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 rounded-full filter blur-xl"
                    style={{ backgroundColor: phases[activePhase].color }}
                  />
                  <div
                    className="absolute -bottom-10 -left-10 w-36 h-36 md:w-48 md:h-48 rounded-full filter blur-xl"
                    style={{ backgroundColor: phases[activePhase].color }}
                  />
                </div>

                <div className="relative z-10 w-full">
                  <div className="space-y-3">
                    {phases[activePhase].steps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.15 }}
                        className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                          style={{ backgroundColor: phases[activePhase].color }}
                        >
                          {idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-800 text-xs md:text-sm truncate">
                            {step.title}
                          </div>
                          <div className="text-[10px] md:text-xs text-gray-500 truncate">
                            {step.description.substring(0, 60)}...
                          </div>
                        </div>
                        <FiArrowRight className="text-gray-400 shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-between text-xs md:text-sm text-gray-500">
                <span className="truncate">
                  💡 Key Focus: {phases[activePhase].steps[0].title}
                </span>
                <span>🎯 Deliverable: Phase {activePhase + 1} Complete</span>
              </div>
            </div>

            {/* Thinking Process Card */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-white/10 shrink-0">
                  <FiCode className="text-lg md:text-xl" />
                </div>
                <span className="font-semibold text-sm md:text-base">
                  Developer's Mindset
                </span>
              </div>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                "I don't just write code — I solve problems. Each phase is a
                step towards creating something meaningful. The goal isn't just
                to build, but to build something that matters."
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] md:text-xs">
                  #CleanCode
                </span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] md:text-xs">
                  #UXFirst
                </span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] md:text-xs">
                  #Scalability
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-4 py-3 sm:px-6 rounded-2xl sm:rounded-full shadow-sm border border-gray-100 w-full sm:w-auto">
            <span className="text-sm text-gray-600">
              🚀 Ready to start your project?
            </span>
            <button className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all text-sm md:text-base">
              Let's Build Together
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default DevelopmentJourney;
