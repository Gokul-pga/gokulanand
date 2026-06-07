"use client";

import ScrollSequence from "./ScrollSequence";
import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[0.3em]
            text-gray-500
          "
        >
          Showcase
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-5xl
            md:text-7xl
            font-bold
            mt-6
            leading-tight
          "
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
          className="
            mt-8
            max-w-2xl
            text-lg
            text-gray-600
            leading-relaxed
          "
        >
          Creating modern web applications, mobile experiences, and scalable
          digital products with a focus on performance, usability, and beautiful
          user interfaces.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
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
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                transition-all
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
