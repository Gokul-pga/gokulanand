import ProjectsListing from "@/src/components/sections/Projects";
import Skills from "@/src/components/sections/SkillsSection";

export default function SkillsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-6 px-6 bg-gradient-to-b from-transparent to-black/5">
        <div className="max-w-7xl mx-auto">
          {/* Animated Subtitle */}
          <p className="uppercase tracking-[0.4em] text-xs font-semibold text-gray-500 mb-5">
            Projects
          </p>

          {/* Primary Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-300">
            Selected Work &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
              Production Apps
            </span>
          </h1>

          {/* Focused, Project-Oriented Context Paragraph */}
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
            A curated collection of full-stack platforms, interactive
            dashboards, and mobile experiences. Each project represents a deep
            dive into solving real-world performance problems, architecting
            scalable state systems, and translating complex UI mockups into
            pixel-perfect production code.
          </p>

        
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>

            <p className="text-gray-600">
              Building fast, scalable, and responsive applications using
              React.js, Next.js, TypeScript, and modern state management.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>

            <p className="text-gray-600">
              Creating cross-platform mobile applications with React Native, API
              integration, authentication, and native capabilities.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">UI Engineering</h3>

            <p className="text-gray-600">
              Designing and developing complex dashboards, animations, component
              libraries, and enterprise-grade interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <ProjectsListing />

      {/* Experience Summary */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-gray-500 mb-5">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            What I Focus On
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Modern Web Applications
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Developing production-ready applications with Next.js, React.js,
                Redux Toolkit, TanStack Query, and modern frontend architecture
                patterns.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Performance & UX</h3>

              <p className="text-gray-600 leading-relaxed">
                Optimizing performance, accessibility, responsiveness,
                animations, and user experience across devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
