"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-white min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-20
            left-[-100px]
            w-[400px]
            h-[400px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[-100px]
            w-[400px]
            h-[400px]
            rounded-full
            bg-indigo-500/10
            blur-[120px]
          "
        />
      </div>

      <section className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="
uppercase
tracking-[0.4em]
text-blue-600
font-semibold
"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-black
            leading-none
          "
        >
          Let's Connect
          <br />
          <span
            className="
              bg-gradient-to-r
            from-gray-500
            via-slate-500
            to-gray-200
              bg-clip-text
              text-transparent
            "
          >
            Build Something Massive
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-10
            max-w-3xl
            text-lg
            md:text-xl
            text-slate-800
            leading-relaxed
          "
        >
          Whether you're building a startup, scaling an existing product, or
          looking for a developer to bring ideas to life, I'm always open to
          discussing exciting opportunities, collaborations, and ambitious
          projects.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {/* Email */}
          <motion.a
            whileHover={{ y: -8 }}
            href="mailto:gokulanand2508@gmail.com"
            className="
              p-8
              rounded-[30px]
              border
              border-gray-200
              bg-white
              shadow-lg
            "
          >
            <FiMail size={28} className="text-blue-600" />

            <h3 className="text-xl text-slate-500 font-bold mt-6">Email</h3>

            <p className="mt-3 text-slate-800 break-all">
              gokulanand2508@gmail.com
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            whileHover={{ y: -8 }}
            href="tel:+919500593141"
            className="
              p-8
              rounded-[30px]
              border
              border-gray-200
              bg-white
              shadow-lg
            "
          >
            <FiPhone size={28} className="text-green-600" />

            <h3 className="text-xl text-slate-500 font-bold mt-6">Phone</h3>

            <p className="mt-3 text-slate-800">+91 95005 93141</p>
          </motion.a>

          {/* Location */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
              p-8
              rounded-[30px]
              border
              border-gray-200
              bg-white
              shadow-lg
            "
          >
            <FiMapPin size={28} className="text-red-500" />

            <h3 className="text-xl font-bold text-slate-500 mt-6">Location</h3>

            <p className="mt-3 text-slate-800">
              Sathyamangalam
              <br />
              Tamil Nadu - 638402
              <br />
              India
            </p>
          </motion.div>
        </div>

        {/* Availability */}
        <div className="mt-24 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-xl">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  Available Now
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Let's Work Together
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                I'm currently available for exciting opportunities. Whether it's
                a full-time role or a freelance project, I'm ready to make a
                difference.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-500">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Full Time", icon: "💼", color: "blue" },
                { label: "Freelance", icon: "🚀", color: "purple" },
                { label: "Remote", icon: "🌍", color: "emerald" },
                { label: "Contract", icon: "📝", color: "orange" },
                { label: "Startups", icon: "🤝", color: "pink" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
            group relative px-6 py-3 rounded-full
            bg-white border-2 
            transition-all duration-300
            hover:shadow-lg
            cursor-default
            flex items-center gap-2
          `}
                  style={{
                    borderColor: `var(--${item.color}-200)`,
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium text-gray-800">
                    {item.label}
                  </span>
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, var(--${item.color}-500), var(--${item.color}-600))`,
                      opacity: 0.05,
                    }}
                  />
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>📧 gokulanand2508@gmail.com</span>
              <span>|</span>
              <span>⏰ Response within 24 hours</span>
            </div>
            {/* <div className="flex gap-2">
              <button className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Get in Touch
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                View Portfolio
              </button>
            </div> */}
          </div>
        </div>

        {/* Why Work With Me */}
        <div className="mt-24">
          <h2 className="text-4xl text-black font-bold mb-8">
            Why Work With Me
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Modern Frontend Development",
              "Scalable Backend Architecture",
              "Pixel Perfect UI Implementation",
            ].map((item) => (
              <div
                key={item}
                className="
                  p-6
                  rounded-4xl
                  border-3
                  border-gray-200 text-gray-400
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-24">
          <h2 className="text-4xl text-black font-bold mb-8">Find Me Online</h2>

          <div className="flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              className="
                flex
                items-center
                gap-3
                px-6
                py-4
                rounded-full
                 border-3
                border-gray-200 text-gray-400
              "
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
                flex
                items-center
                gap-3
                px-6
                py-4
                rounded-full
                border-3
                border-gray-200 text-gray-400
              "
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Huge Background Text */}
      <div
        className="
          fixed
          bottom-[-40px]
          left-0
          text-[10rem]
          md:text-[18rem]
          font-black
          text-black/[0.03]
          leading-none
          pointer-events-none
          select-none
        "
      >
        CONTACT
      </div>
    </main>
  );
}
