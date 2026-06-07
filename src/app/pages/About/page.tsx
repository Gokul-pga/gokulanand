"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const techStack = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND",
  "REDUX",
  "NODE.JS",
  "EXPRESS",
  "SPRING BOOT",
  "MONGODB",
  "REACT NATIVE",
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden bg-white text-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
        absolute
        top-20
        left-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-500/20
        blur-[140px]
      "
        />

        <div
          className="
        absolute
        top-[40%]
        right-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-500/20
        blur-[140px]
      "
        />

        <div
          className="
        absolute
        bottom-0
        left-[30%]
        w-[400px]
        h-[400px]
        rounded-full
        bg-pink-500/10
        blur-[120px]
      "
        />

        <div
          className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
        />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.4em] text-gray-500 mb-8"
          >
            About Me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-[10rem] leading-none"
          >
            <span className="block font-black">
              <span className="text-black">M</span>
              <span className="text-black">E</span>
              <span className="text-black">R</span>
              <span className="text-black">N</span>
              <span className="text-black"> STACK</span>
            </span>

            <span className="block">
              <span className="text-gray-500">DEVELOPER</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
          mt-10
          max-w-3xl
          text-xl
          text-gray-600
          leading-relaxed 
        "
          >
            I build scalable web applications, mobile experiences, enterprise
            dashboards and high-performance systems using modern technologies.
          </motion.p>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
          mt-10
          inline-flex
          px-6
          py-3
          rounded-full
          bg-black
          text-white
        "
          >
            Available For Work
          </motion.div>
        </div>

        <div
          className="
        absolute
        right-[-120px]
        top-20
        text-[20rem]
        font-black
        opacity-[0.03]
      "
        >
          ABOUT
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            ["5+", "Projects"],
            ["2+", "Years Experience"],
            ["10+", "Technologies"],
            ["100%", "Commitment"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
            rounded-3xl
            p-10
            border
            border-white
            bg-white/60
            backdrop-blur-xl
            shadow-xl
          "
            >
              <h2
                className="
              text-6xl
              font-black
              bg-gradient-to-r
              from-slate-500
              via-gray-400
              to-gray-200
              bg-clip-text
              text-transparent
            "
              >
                {value}
              </h2>

              <p className="mt-4 text-gray-600">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Journey */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20">My Journey</h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey began in Mechatronics Engineering where I developed
                strong analytical thinking and problem-solving skills. Over
                time, my passion shifted towards software engineering and
                creating digital experiences.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mt-8">
                Today I build enterprise-grade applications, admin dashboards,
                mobile apps, and scalable backend systems using modern
                technologies.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-gray-500">2019</span>
                <h3 className="text-2xl font-bold">Started Engineering</h3>
              </div>

              <div>
                <span className="text-gray-500">2021</span>
                <h3 className="text-2xl font-bold">Began Web Development</h3>
              </div>

              <div>
                <span className="text-gray-500">2023</span>
                <h3 className="text-2xl font-bold">
                  Joined Avitam Technologies
                </h3>
              </div>

              <div>
                <span className="text-gray-500">Today</span>
                <h3 className="text-2xl font-bold">Full Stack Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-gray-500 mb-5">
            Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            Professional Experience
          </h2>

          <div className="border-l-2 border-black pl-10">
            <span className="text-gray-500">Nov 2023 – Present</span>

            <h3 className="text-4xl font-bold mt-3">MERN Stack Developer</h3>

            <p className="text-xl mt-3">Avitam Technologies</p>

            <p className="mt-8 text-gray-600 leading-relaxed">
              Architecting full-stack solutions from concept to deployment.
              Designing REST APIs, developing responsive interfaces, and
              delivering business-critical applications.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {[
                "Next.js 14",
                "React 18",
                "Tailwind CSS",
                "Material UI",
                "Redux Toolkit",
                "Node.js",
                "Express.js",
                "Spring Boot",
                "MongoDB Atlas",
                "REST APIs",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    border
                    border-gray-200
                    rounded-2xl
                    p-4
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="overflow-hidden py-20 border-y">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[
            "NEXT.JS",
            "REACT",
            "TYPESCRIPT",
            "TAILWIND",
            "NODE.JS",
            "SPRING BOOT",
            "MONGODB",
            "REDUX",
          ]
            .concat([
              "NEXT.JS",
              "REACT",
              "TYPESCRIPT",
              "TAILWIND",
              "NODE.JS",
              "SPRING BOOT",
              "MONGODB",
              "REDUX",
            ])
            .map((item, i) => (
              <span
                key={i}
                className="
                text-6xl
                font-black
                bg-gradient-to-r
                from-black
                via-gray-700
                to-gray-400
                bg-clip-text
                text-transparent
              "
              >
                {item}
              </span>
            ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-black">
          Let's Build
          <br />
          Something Amazing
        </h2>

        <p className="mt-8 text-gray-600 text-xl">
          Open to opportunities and exciting projects.
        </p>

        <button
          onClick={() => {
            router.push("/pages/Contact");
          }}
          className="
        mt-10
        px-10
        py-5
        rounded-full
        text-white
        font-semibold
        bg-gradient-to-r
        from-blue-600
        via-purple-600
        to-pink-600
        hover:scale-105
        transition-all
        shadow-[0_10px_60px_rgba(168,85,247,0.4)] cursor-pointer
      "
        >
          Contact Me
        </button>
      </section>
    </main>
  );
}
