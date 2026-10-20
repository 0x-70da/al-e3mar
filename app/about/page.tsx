import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  HardHat,
  HeartHandshake,
  Ruler,
  ShieldCheck,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Meet the people and principles behind our considered approach to construction.",
};

const values = [
  {
    icon: Ruler,
    title: "Quality",
    text: "Maintaining high standards throughout every stage of construction.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    text: "Building relationships through honesty, transparency, and accountability.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Prioritizing safe working practices and responsible execution.",
  },
  {
    icon: HardHat,
    title: "Commitment",
    text: "Working closely with clients to meet agreed expectations and goals.",
  },
];
const approach = [
  [
    "01",
    "Understand",
    "We listen carefully to your needs, ambitions, and the conditions around your project.",
  ],
  [
    "02",
    "Plan",
    "We turn the brief into a clear, considered plan with the right people and sequence.",
  ],
  [
    "03",
    "Build",
    "Skilled teams execute with precision, communication, and respect for the details.",
  ],
  [
    "04",
    "Deliver",
    "We inspect, refine, and hand over work that meets the agreed standard.",
  ],
];
const projects = [
  {
    image: "/home.jpg",
    title: "Modern residential villa",
    category: "Residential",
    text: "A calm, light-filled home shaped around everyday living.",
  },
  {
    image: "/highBuilding.jpg",
    title: "Commercial landmark",
    category: "Commercial",
    text: "A confident workplace designed for a changing city.",
  },
  {
    image: "/insidehouse.jpg",
    title: "Quietly detailed interiors",
    category: "Interior finishing",
    text: "Material, craft, and proportion brought together with intent.",
  },
];

export default function AboutPage(): React.ReactNode {
  return (
    <main className="bg-background">
      <section className="relative pt-10 flex min-h-[680px] items-end overflow-hidden bg-[#171715] text-white">
        <Image
          src="/about.jpg"
          alt="Architectural structure under construction"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171715] via-[#171715]/35 to-[#171715]/25" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            Home&nbsp; / &nbsp;About us
          </p>
          <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.045em] md:text-7xl">
            Building with purpose.
            <br />
            <span className="text-white/55">Creating with vision.</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-white/70">
            We deliver quality construction, reliable solutions, and lasting
            value for the people and places we build with.
          </p>
        </div>
      </section>
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
              Every project begins with careful planning and a clear
              understanding of what matters. From the first conversation to the
              final detail, our team brings skilled workmanship, thoughtful
              coordination, and a steady eye for the bigger picture.
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
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-6 lg:grid-cols-4 lg:px-10">
          {[
            ["—", "Years of experience"],
            ["—", "Completed projects"],
            ["—", "Satisfied clients"],
            ["—", "Team members"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="px-4 py-10 first:pl-0 last:pr-0 sm:px-8 lg:py-14"
            >
              <p className="font-heading text-5xl tracking-[-0.05em] sm:text-6xl">
                {number}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em]">
                {label}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Placeholder
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="bg-[#20201d] p-8 text-white sm:p-12 lg:p-16">
            <Target className="size-7 text-primary" strokeWidth={1.5} />
            <p className="mt-16 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Our mission
            </p>
            <h2 className="mt-4 max-w-md font-heading text-3xl leading-tight tracking-[-0.03em]">
              Dependable construction, delivered with care.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              To deliver dependable construction solutions that meet
              clients&apos; needs through quality workmanship, professional
              service, and attention to detail.
            </p>
          </article>
          <article className="border border-border p-8 sm:p-12 lg:p-16">
            <ClipboardCheck className="size-7 text-primary" strokeWidth={1.5} />
            <p className="mt-16 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Our vision
            </p>
            <h2 className="mt-4 max-w-md font-heading text-3xl leading-tight tracking-[-0.03em]">
              A trusted partner for the built environment.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              To become a trusted construction partner recognized for
              excellence, integrity, and lasting contributions to the built
              environment.
            </p>
          </article>
        </div>
      </section>
      <section className="bg-muted px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              What guides us
            </p>
            <h2 className="font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
              The standard is in the details.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t border-foreground/15 pt-6">
                <Icon className="size-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-7 font-heading text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Our approach
            </p>
            <h2 className="max-w-sm font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
              Clear thinking. Solid execution.
            </h2>
          </div>
          <div className="grid divide-y divide-border border-y border-border">
            {approach.map(([number, title, text]) => (
              <div
                key={number}
                className="grid gap-4 py-7 sm:grid-cols-[60px_150px_1fr] sm:items-start"
              >
                <span className="font-heading text-sm text-primary">
                  {number}
                </span>
                <h3 className="font-semibold uppercase tracking-[0.1em]">
                  {title}
                </h3>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-36">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Selected work
            </p>
            <h2 className="font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
              Built to be remembered.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            View all projects{" "}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={index === 1 ? "lg:mt-14" : ""}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                {project.category}
              </p>
              <h3 className="mt-2 font-heading text-2xl">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.text}
              </p>
            </article>
          ))}
        </div>
      </section>
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
    </main>
  );
}
