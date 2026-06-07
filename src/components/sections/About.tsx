"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-gray-500 mb-8"
        >
          About Me
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Building modern
              <br />
              digital experiences.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a MERN Stack Developer specializing in React.js, Next.js,
              Node.js, and React Native.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I enjoy building scalable applications, enterprise dashboards,
              mobile experiences, and high-performance user interfaces.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              My focus is creating products that are fast, intuitive and
              visually engaging.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
