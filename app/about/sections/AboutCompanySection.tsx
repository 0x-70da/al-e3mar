import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutCompanySection = () => {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-36">
      <div className="self-center">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
          The company
        </p>
        <h2 className="max-w-md font-heading text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
          We build the places where life happens.
        </h2>
        <div className="mt-8 max-w-lg space-y-5 text-sm leading-7 text-muted-foreground">
          <p>
            We are a professional construction partner committed to quality,
            precision, safety, and client satisfaction.
          </p>
          <p>
            Every project begins with careful planning and a clear understanding
            of what matters. From the first conversation to the final detail,
            our team brings skilled workmanship, thoughtful coordination, and a
            steady eye for the bigger picture.
          </p>
        </div>
        <Link
          href="/contact"
          className="group mt-9 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]"
        >
          Talk to our team{" "}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="relative min-h-[460px] overflow-hidden">
        <Image
          src="/home2.jpg"
          alt="Modern architecture with warm natural light"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        <span className="absolute bottom-5 left-5 bg-[#171715] px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-white/70">
          Thoughtful by design
        </span>
      </div>
    </section>
  );
};

export default AboutCompanySection;
