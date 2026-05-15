import { motion } from "motion/react";
import { Home, LayoutGrid, Mail, Terminal } from "lucide-react";

const nav = [
  { href: "/work", label: "WORK" },
  { href: "/stack", label: "STK" },
  { href: "/experience", label: "EXP" },
] as const;

type SidebarKey = "home" | "work" | "stack" | "experience";

const sidebar: { href: string; icon: typeof Home; match: SidebarKey }[] = [
  { href: "/", icon: Home, match: "home" },
  { href: "/work", icon: LayoutGrid, match: "work" },
  { href: "/stack", icon: Terminal, match: "stack" },
  { href: "/experience", icon: Mail, match: "experience" },
];

function normalizeActive(pathname: string): SidebarKey {
  if (pathname.startsWith("/work")) return "work";
  if (pathname.startsWith("/stack")) return "stack";
  if (pathname.startsWith("/experience")) return "experience";
  return "home";
}

export function SiteChrome({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  const active = normalizeActive(pathname);

  return (
    <div className="min-h-screen bg-[#0d1515] text-[#dce4e5]">
      <aside className="fixed left-0 top-0 z-50 flex h-screen w-14 flex-col items-center gap-3 border-r border-[#3b494b]/80 bg-[#080f10]/95 py-6 backdrop-blur-md">
        {sidebar.map(({ href, icon: Icon, match }) => {
          const isOn = active === match;
          return (
            <motion.a
              key={href}
              href={href}
              title={href}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className={`flex h-11 w-11 items-center justify-center border border-transparent transition-colors ${
                isOn
                  ? "bg-[#00f0ff] text-[#080f10]"
                  : "text-[#b9cacb] hover:border-[#00f0ff]/40 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.25} />
            </motion.a>
          );
        })}
      </aside>

      <div className="pl-14">
        <header className="sticky top-0 z-40 border-b border-[#3b494b]/60 bg-[#0d1515]/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-6 py-5 md:px-12 lg:px-20">
            <a
              href="/"
              className="font-display shrink-0 text-lg font-semibold tracking-tight text-white md:text-xl"
            >
              ARCHITECT.OS
            </a>
            <div className="hidden min-h-[1px] flex-1 bg-gradient-to-r from-[#3b494b]/90 via-[#3b494b]/25 to-transparent md:block" />
            <nav className="ml-auto flex items-center gap-8 md:gap-10">
              {nav.map(({ href, label }) => {
                const on =
                  href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(href);
                return (
                  <NavLink key={href} href={href} label={label} active={on} />
                );
              })}
              <motion.a
                href="mailto:hola@ejemplo.dev"
                whileHover={{
                  boxShadow: "0 0 24px rgba(0, 240, 255, 0.45)",
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                className="hidden bg-[#00f0ff] px-5 py-2.5 font-mono-tech text-xs font-bold uppercase tracking-[0.2em] text-[#080f10] sm:inline-block"
              >
                Hire me
              </motion.a>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <motion.a
      href={href}
      className="relative font-mono-tech text-[11px] font-semibold tracking-[0.28em] text-[#b9cacb] hover:text-white"
      whileHover={{ y: -1 }}
    >
      {label}
      {active ? (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-px bg-[#00f0ff]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </motion.a>
  );
}
