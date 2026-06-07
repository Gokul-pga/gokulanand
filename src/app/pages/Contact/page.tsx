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
        <div className="mt-24">
          <h2 className="text-4xl text-black font-bold mb-10">
            Currently Available For
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "Full Time Opportunities",
              "Freelance Projects",
              "Remote Work",
              "Contract Work",
              "Startup Collaborations",
            ].map((item) => (
              <div
                key={item}
                className="
                  px-6
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-blue-200
                  to-slate-500
                  border
                  border-blue-100 text-white
                "
              >
                ✓ {item}
              </div>
            ))}
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
