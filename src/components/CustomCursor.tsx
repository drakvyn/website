import { useEffect, useRef, useState } from "react";
import { ReticleSvg } from "./ReticleSvg";

type CursorLabel = "OPEN" | "VIEW" | "ENTER" | "PLAY" | "PAUSE" | "PREV" | "NEXT" | "";

const INTERACTIVE =
  "a, button, [data-cursor], input, select, textarea, [role=\"button\"]";

function getInteractive(target: EventTarget | null): Element | null {
  return (target as HTMLElement | null)?.closest?.(INTERACTIVE) ?? null;
}

function resolveCursorLabel(el: Element): CursorLabel {
  const attr = el.getAttribute("data-cursor");
  if (attr !== null) return attr as CursorLabel;
  if (el.tagName === "A") return "VIEW";
  return "";
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState<CursorLabel>("");
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !hasFinePointer) {
      document.body.classList.add("no-custom-cursor");
      return;
    }

    document.documentElement.classList.add("custom-cursor-active");
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const ease = hovering.current ? 0.25 : 0.16;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = getInteractive(e.target);
      if (!el) return;

      hovering.current = true;
      setIsHovering(true);
      setLabel(resolveCursorLabel(el));
    };

    const onMouseOut = (e: MouseEvent) => {
      const el = getInteractive(e.target);
      if (!el) return;

      const related = e.relatedTarget as Node | null;
      if (related && el.contains(related)) return;

      hovering.current = false;
      setIsHovering(false);
      setLabel("");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted || !enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${isHovering ? " custom-cursor--hover" : ""}`}
      aria-hidden="true"
    >
      <div className="custom-cursor__reticle-wrap">
        <ReticleSvg className="custom-cursor__reticle" />
      </div>
      {label && <span className="custom-cursor__label">{label}</span>}
    </div>
  );
}
