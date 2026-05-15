import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const layers = [
  {
    band: "FRONTEND_CORE",
    accent: "bg-[#00f0ff]",
    title: "VISUAL LOGIC",
    chips: ["React", "TypeScript", "Next.js", "Astro", "WebGL"],
    foot: "#01 // INTERFACE_LAYER",
  },
  {
    band: "BACKEND_SYSTEMS",
    accent: "bg-[#571bc1]",
    title: "DATA GRAVITY",
    chips: ["Node", "Rust", "PostgreSQL", "Kafka"],
    foot: "#02 // SERVICE_MESH",
  },
  {
    band: "INFRA_ORCHESTRATION",
    accent: "bg-[#fed639]",
    title: "FOUNDATION",
    chips: ["AWS", "Docker", "Kubernetes", "Terraform"],
    foot: "#03 // RUNTIME_PLANE",
  },
];

const tools = [
  "VS Code",
  "Figma",
  "Postman",
  "Raycast",
  "Datadog",
];

export function StackView() {
  const ctaRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const buildY = useTransform(scrollYProgress, [0, 1], ["12%", "-18%"]);

  return (
    <div>
      <section className="border-b border-[#3b494b]/40 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-mono-tech text-xs tracking-[0.35em] text-[#00f0ff]">
              TECH_STACK_MANIFESTO
            </p>
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-8">
              <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-bold uppercase leading-[1.05] tracking-tight text-white">
                Engineered to scale.
              </h1>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-4">
              <p className="font-body text-base leading-relaxed text-[#b9cacb]">
                Una torre de capas pensada para elasticidad operativa: interfaz
                observable, contratos de datos estrictos y orquestación que sobrevive al
                tráfico real — no al demo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-[#3b494b]/40 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.article
              key={layer.band}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, borderColor: "rgba(0,240,255,0.45)" }}
              className="flex flex-col border border-[#3b494b] bg-[#151d1e]"
            >
              <div className={`${layer.accent} px-4 py-2 font-mono-tech text-[10px] font-bold tracking-[0.22em] text-[#080f10]`}>
                {layer.band}
              </div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white">
                  {layer.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {layer.chips.map((chip) => (
                    <motion.span
                      key={chip}
                      whileHover={{
                        borderColor: "rgba(0,240,255,0.65)",
                        color: "#ffffff",
                      }}
                      className="border border-[#849495]/60 px-2 py-1 font-mono-tech text-[10px] tracking-[0.16em] text-[#dce4e5]"
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="border-t border-[#3b494b]/70 px-8 py-4 font-mono-tech text-[10px] tracking-[0.28em] text-[#849495]">
                {layer.foot}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#3b494b]/40 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-12%] top-[15%] max-w-[520px] font-mono-tech text-[11px] leading-relaxed text-[#00f0ff]/10"
        >
          {`cluster reconcile\npolicy admission OK\nedge handshake TLS1.3`}
        </div>
        <div className="relative mx-auto max-w-[1440px]">
          <Reveal>
            <p className="font-mono-tech text-xs tracking-[0.35em] text-[#fed639]">
              CURATED_WORKFLOW
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold uppercase tracking-tight text-white md:text-5xl">
              Tools I love
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {tools.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.06 }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#849495]/70 text-[11px] font-semibold text-white">
                  {tool.slice(0, 2).toUpperCase()}
                </div>
                <p className="font-mono-tech text-[10px] tracking-[0.28em] text-[#b9cacb]">
                  {tool.toUpperCase().replace(" ", "_")}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="font-mono-tech mt-14 text-right text-[10px] tracking-[0.35em] text-[#849495]">
            SYSTEM_READY_V2.4
          </p>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20 lg:py-32"
      >
        <motion.span
          style={{ y: buildY }}
          className="pointer-events-none absolute right-[6%] top-[10%] select-none font-display text-[clamp(4rem,14vw,12rem)] font-bold uppercase leading-none text-[#dce4e5]/[0.06]"
          aria-hidden
        >
          BUILD
        </motion.span>

        <div className="relative mx-auto max-w-[1440px]">
          <Reveal>
            <h2 className="font-display max-w-3xl text-4xl font-semibold uppercase tracking-tight text-white md:text-5xl">
              Ready to scale your vision?
            </h2>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-[#b9cacb]">
              Trabajo como extensión de tu equipo de plataforma: desde la superficie
              visible hasta la línea de observabilidad que demuestra que todo sigue
              convergiendo.
            </p>
          </Reveal>
          <motion.a
            href="#contact"
            className="mt-12 inline-flex items-center gap-4 bg-[#dbfcff] px-10 py-4 font-mono-tech text-xs font-bold uppercase tracking-[0.26em] text-[#080f10]"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 32px rgba(219, 252, 255, 0.45)",
            }}
          >
            Start collaboration
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-[#3b494b]/50 px-6 py-10 md:px-12 lg:px-20"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-mono-tech text-[10px] tracking-[0.28em] text-[#849495]">
            © {new Date().getFullYear()} ARCHITECT.OS · Built with precision
          </p>
          <div className="flex flex-wrap gap-6 font-mono-tech text-[10px] tracking-[0.28em]">
            {["GITHUB", "LINKEDIN", "READCV", "SOURCE"].map((l) => (
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
