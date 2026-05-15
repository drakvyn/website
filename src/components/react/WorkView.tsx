import { motion } from "motion/react";
import { Reveal } from "./Reveal";

export function WorkView() {
  return (
    <div>
      <section className="border-b border-[#3b494b]/40 bg-tech-grid px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-mono-tech text-xs tracking-[0.35em] text-[#00f0ff]">
              OPERATING_LAYER
            </p>
            <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6vw,5rem)] font-bold uppercase leading-[1.05] tracking-tight text-white">
              DIGITAL_STRUCTURE
              <span className="animate-cursor-blink text-[#00f0ff]">_</span>
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="font-body text-lg leading-relaxed text-[#b9cacb]">
                Esta vista resume cómo combino superficie editorial con instrumentación:
                cada pieza es medible, versionada y lista para convivir con equipos de
                plataforma.
              </p>
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-5">
              <div className="border border-[#3b494b]/80 bg-[#080f10]/90 p-6 backdrop-blur-md">
                <dl className="grid gap-4 font-mono-tech text-sm">
                  <div className="flex justify-between gap-6 border-b border-[#3b494b]/60 pb-3">
                    <dt className="text-[#00f0ff]">SYSTEM STATUS</dt>
                    <dd className="text-[#dce4e5]">OPERATIONAL</dd>
                  </div>
                  <div className="flex justify-between gap-6 border-b border-[#3b494b]/60 pb-3">
                    <dt className="text-[#00f0ff]">DEPLOYMENTS</dt>
                    <dd className="text-[#dce4e5]">428 NODE_RING</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-[#00f0ff]">REGION</dt>
                    <dd className="text-[#dce4e5]">EU-WEST / LATENCY 42MS</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 border border-[#3b494b] bg-[#151d1e]/90 lg:grid-cols-12 lg:gap-0"
          >
            <div className="relative overflow-hidden lg:col-span-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.45 }}
                className="min-h-[280px] bg-gradient-to-br from-[#232b2c] via-[#0d1515] to-[#192122] lg:min-h-[420px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(0,240,255,0.38),transparent_56%)] opacity-80 mix-blend-screen" />
            </div>
            <div className="flex flex-col justify-center gap-6 px-8 py-10 lg:col-span-6 lg:px-12 lg:py-14">
              <p className="font-mono-tech text-xs tracking-[0.28em] text-[#00f0ff]">
                CASE_01: NEURAL_MESH
              </p>
              <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-white">
                Architecting the invisible
              </h2>
              <p className="font-body leading-relaxed text-[#b9cacb]">
                Superficie analítica de alta densidad con nodos WebGL y sincronización
                eventual contra streams tipados. Documentación viva embebida en runtime.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["REACT", "WEBGL", "TYPESCRIPT"].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      borderColor: "rgba(208,188,255,0.55)",
                      boxShadow: "0 0 18px rgba(208,188,255,0.15)",
                    }}
                    className="border border-[#849495]/65 px-3 py-1 font-mono-tech text-[10px] tracking-[0.22em] text-[#dce4e5]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <footer className="border-t border-[#3b494b]/50 px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-mono-tech text-[10px] tracking-[0.28em] text-[#849495]">
            © {new Date().getFullYear()} ARCHITECT.OS · Portfolio técnico
          </p>
          <div className="flex flex-wrap gap-6 font-mono-tech text-[10px] tracking-[0.28em]">
            {["GITHUB", "LINKEDIN", "SOURCE"].map((l) => (
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
