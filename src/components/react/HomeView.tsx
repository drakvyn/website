import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HomeView() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative border-b border-[#3b494b]/50 bg-tech-grid px-6 pb-24 pt-16 md:px-12 lg:px-20">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-8%] top-[18%] h-[420px] w-[420px] rounded-none opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(0,240,255,0.9), transparent 55%), radial-gradient(circle at 70% 60%, rgba(208,188,255,0.75), transparent 50%)",
            filter: "blur(2px)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-5xl"
          >
            <motion.p
              variants={item}
              className="font-mono-tech text-xs tracking-[0.35em] text-[#00f0ff]"
            >
              SYSTEM_MANIFESTO
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display mt-6 text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white uppercase"
            >
              SYSTEM_
              <br />
              ARCHITECT
              <span className="animate-cursor-blink ml-1 inline-block translate-y-[0.08em] text-[#00f0ff]">
                _
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-8 max-w-xl font-body text-lg leading-relaxed text-[#b9cacb]"
            >
              Unir la precisión del sistema con una estética impecable. Construyo
              arquitecturas digitales performantes que escalan tan bien como se ven.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="/work"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 28px rgba(0, 240, 255, 0.35)",
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#00f0ff] px-7 py-3 font-mono-tech text-xs font-bold uppercase tracking-[0.22em] text-[#080f10]"
              >
                Explore work
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  borderColor: "rgba(0,240,255,0.65)",
                  color: "#ffffff",
                }}
                className="inline-flex items-center gap-2 border border-[#849495] px-7 py-3 font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-[#dce4e5]"
              >
                Get in touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="font-mono-tech absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.45em] text-[#849495] xl:block"
          >
            Scroll to explore
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#3b494b]/40 px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="font-mono-tech text-xs tracking-[0.32em] text-[#00f0ff]">
                Selected_index
              </p>
              <h2 className="font-display mt-3 text-4xl font-semibold uppercase tracking-tight text-white md:text-5xl">
                Selected_works
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-mono-tech text-xs text-[#849495]">
                TOTAL_REPOS: 142 / ACTIVE_NODES: 04
              </p>
              <a
                href="/work"
                className="mt-3 inline-flex items-center gap-2 font-mono-tech text-xs tracking-[0.2em] text-[#00f0ff] hover:text-white"
              >
                View all
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <ProjectCard
              className="lg:col-span-7"
              tags={["NEXT.JS", "REDIS", "POSTGRES"]}
              title="NEURAL_DASHBOARD v4.0"
              description="Panel analítico en tiempo real con ingestión por streams y capa de visualización WebGL."
            />
            <ProjectCard
              className="lg:col-span-5"
              tags={["ASTRO", "EDGE", "KV"]}
              title="ARCHITECT_PORTAL"
              description="Portal documental con despliegue edge-first y sincronización eventual entre regiones."
              compact
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="aspect-square border border-[#3b494b] bg-gradient-to-br from-[#192122] via-[#0d1515] to-[#232b2c]">
              <div className="flex h-full flex-col justify-between p-8">
                <span className="font-mono-tech text-[10px] tracking-[0.35em] text-[#849495]">
                  FIG 01 — SURFACE
                </span>
                <div className="font-mono-tech text-xs leading-relaxed text-[#b9cacb]/90">
                  <pre className="overflow-hidden text-[10px] text-[#00f0ff]/80">
                    {`const surface = await compile(graph);\nemitDiagnostics(surface);`}
                  </pre>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-white md:text-5xl">
                Beyond the{" "}
                <span className="text-[#00f0ff]">
                  interface<span className="animate-cursor-blink">_</span>
                </span>
              </h2>
              <p className="mt-8 font-body text-lg leading-relaxed text-[#b9cacb]">
                La interfaz es solo el terminal visible de decisiones de arquitectura,
                contratos de datos y límites operativos. Diseño y sistema convergen cuando
                cada capa está instrumentada.
              </p>
              <p className="mt-6 font-body leading-relaxed text-[#849495]">
                Prefiero superficies minimalistas que revelen profundidad bajo demanda:
                telemetría clara, rutas de fallo explícitas y DX que invite a extender sin
                romper invariantes.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <p className="font-display text-5xl font-bold text-white md:text-6xl">
                  12+
                </p>
                <p className="font-mono-tech mt-2 text-xs tracking-[0.25em] text-[#849495]">
                  YEARS_EXP
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="font-display text-5xl font-bold text-white md:text-6xl">
                  500k
                </p>
                <p className="font-mono-tech mt-2 text-xs tracking-[0.25em] text-[#849495]">
                  LINES_COMMITTED
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-[#3b494b]/50 px-6 py-10 md:px-12 lg:px-20"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg text-white">ARCHITECT.OS</p>
            <p className="font-mono-tech mt-2 text-[10px] tracking-[0.28em] text-[#849495]">
              © {new Date().getFullYear()} · Built with precision
            </p>
          </div>
          <div className="flex flex-wrap gap-6 font-mono-tech text-[10px] tracking-[0.28em]">
            {["GITHUB", "LINKEDIN", "READ.CV", "SOURCE"].map((l) => (
              <a key={l} href="#" className="text-[#b9cacb] hover:text-[#00f0ff]">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  className = "",
  compact,
}: {
  title: string;
  description: string;
  tags: string[];
  className?: string;
  compact?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className={`group border border-[#3b494b] bg-[#151d1e]/90 ${compact ? "min-h-[280px]" : "min-h-[360px]"} ${className}`}
    >
      <div className="relative overflow-hidden border-b border-[#3b494b]/70 bg-[#080f10]">
        <motion.div
          className={`w-full bg-gradient-to-br from-[#2e3637] via-[#151d1e] to-[#080f10] ${compact ? "h-40" : "h-56"}`}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,240,255,0.35),transparent_55%)]" />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-7">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="border border-[#849495]/60 px-2 py-1 font-mono-tech text-[10px] tracking-[0.18em] text-[#dce4e5]"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-[#b9cacb]">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
