import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#171715] px-6 py-24 text-white lg:px-10 lg:py-32">
      <Image
        src="/kitchen.jpg"
        alt="Refined interior detail"
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#171715]/70" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 sm:flex-row sm:items-end">
        <h2 className="max-w-2xl font-heading text-4xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">
          Let&apos;s build something exceptional together.
        </h2>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-3 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-1"
        >
          Discuss your project <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
