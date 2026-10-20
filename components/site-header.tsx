import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "./helper-components/ThemeToggle";

export function SiteHeader(): React.ReactNode {
  return (
    <header className="fixed inset-x-0 top-0 z-20 min-h-20 bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 text-foreground"
        >
          <span className="flex size-9 items-center justify-center bg-primary text-sm font-black tracking-tighter text-primary-foreground">
            E
          </span>
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em]">
            El E3mar<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 text-xs font-medium uppercase tracking-[0.16em] text-foreground/75 md:flex">
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-foreground/35 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Start a conversation
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
