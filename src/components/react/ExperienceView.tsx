import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const jobs = [
  {
    range: "2021 — PRESENT",
    title: "Principal Systems Engineer",
    company: "NEURAL STACK INC.",
    body:
      "Liderazgo de plataforma multi-región, contratos de ingestión y políticas de despliegue progresivo.",
    tags: ["KUBERNETES", "GO", "AWS"],
    current: true,
  },
  {
    range: "2018 — 2021",
    title: "Staff Frontend Architect",
    company: "GRIDLINE STUDIO",
    body:
      "Diseño de design system técnico, performance budgets y capas de datos tipadas extremo a extremo.",
    tags: ["REACT", "TYPESCRIPT", "GRAPHQL"],
    current: false,
  },
  {
    range: "2014 — 2018",
    title: "Product Engineer",
    company: "BLACKSPACE LABS",
    body:
      "Ship features en productos de alto tráfico con foco en telemetría y resiliencia.",
    tags: ["NODE", "POSTGRES", "RUST"],
    current: false,
  },
];

export function ExperienceView() {
  return (
    <div>
      <section className="border-b border-[#3b494b]/40 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-mono-tech text-xs tracking-[0.35em] text-[#00f0ff]">
              CURRICULUM_VITAE
            </p>
            <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.25rem,4.5vw,4rem)] font-bold uppercase leading-[1.08] tracking-tight text-white">
              Architecting scalable systems since 2014.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white">
              Chronology
            </h2>
            <p className="mt-6 font-body leading-relaxed text-[#b9cacb]">
              Trayectoria orientada a sistemas de misión crítica: desde interfaces densas
              hasta ejecución en cluster con políticas declarativas.
            </p>
          </Reveal>

          <div className="relative lg:col-span-8">
            <div
              aria-hidden
              className="absolute left-[11px] top-3 bottom-3 hidden w-px bg-gradient-to-b from-[#00f0ff]/35 via-[#3b494b]/70 to-transparent lg:block"
            />

            <ul className="flex flex-col gap-14">
              {jobs.map((job, index) => (
                <motion.li
                  key={job.range}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid gap-8 lg:grid-cols-[48px_1fr]"
                >
                  <div className="relative hidden lg:flex lg:justify-center">
                    <motion.span
                      className={`mt-1 h-3 w-3 rounded-none border ${
                        job.current
                          ? "border-[#00f0ff] bg-[#00f0ff]"
                          : "border-[#00f0ff]/65 bg-transparent"
                      }`}
                      animate={
                        job.current
                          ? { boxShadow: ["0 0 0 0 rgba(0,240,255,0.55)", "0 0 0 12px rgba(0,240,255,0)"] }
                          : {}
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                  <article className="border border-[#3b494b]/70 bg-[#151d1e]/80 p-8">
                    <p className="font-mono-tech text-xs tracking-[0.22em] text-[#00f0ff]">
                      {job.range}
                    </p>
                    <h3 className="font-display mt-4 text-3xl font-semibold text-white">
                      {job.title}
                    </h3>
                    <p className="font-body mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#849495]">
                      {job.company}
                    </p>
                    <p className="mt-6 font-body leading-relaxed text-[#b9cacb]">
                      {job.body}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ borderColor: "rgba(0,240,255,0.55)" }}
                          className="border border-[#849495]/55 px-3 py-1 font-mono-tech text-[10px] tracking-[0.2em] text-[#dce4e5]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </article>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#3b494b]/50 px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-mono-tech text-[10px] tracking-[0.28em] text-[#849495]">
            © {new Date().getFullYear()} ARCHITECT.OS
          </p>
          <div className="flex flex-wrap gap-6 font-mono-tech text-[10px] tracking-[0.28em]">
            {["GITHUB", "LINKEDIN", "READCV"].map((l) => (
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
