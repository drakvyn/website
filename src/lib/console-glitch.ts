const BANNER = normalize(`
  ██████╗ ██████╗  █████╗ ██╗  ██╗
  ██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝
  ██║  ██║██████╔╝███████║█████╔╝ 
  ██║  ██║██╔══██╗██╔══██║██╔═██╗ 
  ██████╔╝██║  ██║██║  ██║██║  ██╗
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
`);

const GLITCH_CHARS = "!<>-_\\/[]{}=+*^?#&";
const FPS = 10;
const INTERVAL = 1000 / FPS;
const INTENSITY = 0.06;

const BANNER_STYLE =
  "color:#e8609a;font-family:ui-monospace,Menlo,Consolas,monospace;line-height:1.15";
const HINT_STYLE = "color:#666";

const STOP_HINT = "stopConsoleGlitch() to stop";
const START_HINT = "startConsoleGlitch() to replay";

declare global {
  interface Window {
    startConsoleGlitch?: () => void;
    stopConsoleGlitch?: () => void;
  }
}

let handle = 0;

export function playConsoleGlitch(): void {
  if (typeof window === "undefined") return;

  window.startConsoleGlitch = startConsoleGlitch;
  window.stopConsoleGlitch = stopConsoleGlitch;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    render(BANNER, START_HINT);
  } else {
    startConsoleGlitch();
  }
}

export function startConsoleGlitch(): void {
  if (typeof window === "undefined" || handle !== 0) return;

  let nextFrameAt = performance.now();

  const tick = (): void => {
    const time = performance.now();

    if (time >= nextFrameAt) {
      nextFrameAt += INTERVAL;
      if (nextFrameAt < time) nextFrameAt = time + INTERVAL;

      render(glitch(BANNER), STOP_HINT);
    }
    handle = requestAnimationFrame(tick);
  };

  handle = requestAnimationFrame(tick);
}

export function stopConsoleGlitch(): void {
  if (handle === 0) return;
  cancelAnimationFrame(handle);
  handle = 0;
  render(BANNER, START_HINT);
}

function render(frame: string, hint: string): void {
  clear();
  console.log(
    `%c${frame.replace(/%/g, "%%")}\n%c${hint}`,
    BANNER_STYLE,
    HINT_STYLE
  );
}

function glitch(frame: string): string {
  let out = "";
  for (const char of frame) {
    if (char === "\n" || char === " " || Math.random() >= INTENSITY) {
      out += char;
    } else {
      out += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    }
  }
  return out;
}

function clear(): void {
  try {
    console.clear?.();
  } catch {
  }
}

function normalize(frame: string): string {
  const lines = frame.split("\n").filter((line, i, all) => {
    const isEdge = i === 0 || i === all.length - 1;
    return !(isEdge && line.trim() === "");
  });

  const indent = Math.min(
    ...lines.map((line) => line.length - line.trimStart().length)
  );
  return lines.map((line) => line.slice(indent)).join("\n");
}
