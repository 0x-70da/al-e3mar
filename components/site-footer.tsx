import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter(): React.ReactNode {
  return (
    <footer className="bg-[#171715] px-6 py-14 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-heading text-lg font-semibold uppercase tracking-[0.18em]">
            El E3mar<span className="text-primary">.</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
            A considered construction partner for spaces built to perform,
            endure, and belong.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            Explore
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
            <Link href="/about" className="transition-colors hover:text-white">
              About us
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            Let&apos;s talk
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
          >
            hello@example.com <ArrowUpRight className="size-3.5" />
          </a>
          <p className="mt-2 text-sm text-white/40">+00 000 000 0000</p>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row">
        <span>© El E3mar. Placeholder company details.</span>
        <span>Built with purpose</span>
      </div>
    </footer>
  );
}
