import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardList,
  HardHat,
  Ruler,
  ShieldCheck,
  Users,
} from "lucide-react";

const highlights = [
  ["[XX]", "Years of experience"],
  ["[XX]", "Completed projects"],
  ["[XX]", "Satisfied clients"],
  ["[XX]", "Professional team members"],
];

const services = [
  {
    title: "Building Construction",
    description:
      "Professional construction services for residential and commercial buildings, covering the agreed stages of construction.",
    image: "/highBuilding.jpg",
  },
  {
    title: "Finishing & Fit-Out",
    description:
      "Interior and exterior finishing solutions focused on quality, functionality, and attention to detail.",
    image: "/insidehouse.jpg",
  },
  {
    title: "Architectural Design",
    description:
      "Planning and design services that balance aesthetics, functionality, and the requirements of each project.",
    image: "/about.jpg",
  },
  {
    title: "Renovation & Restoration",
    description:
      "Building renovation and restoration services to improve existing spaces, repair defects, and renew appearances.",
    image: "/home2.jpg",
  },
  {
    title: "MEP Works",
    description:
      "Electrical, plumbing, HVAC, and related building systems, where offered by the company.",
    image: "/kitchen.jpg",
  },
];

const projects = [
  {
    title: "Modern Residential Villa",
    category: "Sample project · Residential",
    description: "A calm, light-filled home shaped around everyday living.",
    image: "/home.jpg",
  },
  {
    title: "Residential Apartment Building",
    category: "Sample project · Residential",
    description:
      "A considered development balancing practical living and identity.",
    image: "/highBuilding.jpg",
  },
  {
    title: "Commercial Office Building",
    category: "Sample project · Commercial",
    description: "A confident workplace designed for a changing city.",
    image: "/home2.jpg",
  },
  {
    title: "Luxury Interior Finishing",
    category: "Sample project · Interior",
    description:
      "Material, craft, and proportion brought together with intent.",
    image: "/insidehouse.jpg",
  },
];

const advantages = [
  {
    icon: Ruler,
    title: "Quality Workmanship",
    description:
      "Professional execution, careful detailing, and consistent quality standards at every stage.",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description:
      "Practical planning and effective coordination shaped around the needs of each project.",
  },
  {
    icon: ClipboardList,
    title: "Transparent Communication",
    description:
      "Clear conversations about expectations, progress, and important project decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description:
      "A responsible approach to project execution and appropriate safety practices.",
  },
];

const process = [
  [
    "01",
    "Consultation",
    "Understanding your needs, goals, and project requirements.",
  ],
  ["02", "Planning", "Defining scope, plans, expected timeline, and budget."],
  [
    "03",
    "Execution",
    "Carrying out the agreed work with professional coordination.",
  ],
  [
    "04",
    "Delivery",
    "Reviewing the completed work and handing over the project.",
  ],
];

export default function Home(): React.ReactNode {
  return (
    <main className="bg-background">
      <section className="relative pt-30 flex min-h-[720px] items-end overflow-hidden bg-[#171715] pt-20 text-white">
        <Image
          src="/home.jpg"
          alt="Modern architectural building"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171715] via-[#171715]/45 to-[#171715]/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
            Construction & Engineering
          </p>
          <h1 className="max-w-5xl font-heading text-3xl font-semibold leading-[0.96] tracking-[-0.05em] md:text-7xl">
            Building Your Vision.
            <br />
            <span className="text-white/55">Creating Lasting Value.</span>
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <p className="max-w-lg text-base leading-7 text-white/70">
              Reliable construction solutions delivered with quality, precision,
              and a clear focus on client satisfaction.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-1"
              >
                Explore our projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-white/35 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary"
              >
                Request a quote
              </Link>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/45">
            <span className="h-10 w-px bg-primary" />
            Scroll to explore
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border sm:grid-cols-4 lg:px-10">
          {highlights.map(([number, label]) => (
            <div key={label} className="px-6 py-9 first:border-l-0 sm:px-8">
              <p className="font-heading text-3xl tracking-[-0.04em] text-primary">
                {number}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-10 lg:py-36">
        <div className="self-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            Who we are
          </p>
          <h2 className="max-w-xl font-heading text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl">
            Built on Trust. Driven by Excellence.
          </h2>
          <p className="mt-8 max-w-lg leading-7 text-muted-foreground">
            El E3mar is a construction partner committed to quality,
            reliability, thoughtful planning, and professional execution.
          </p>
          <p className="mt-5 max-w-lg leading-7 text-muted-foreground">
            We take the time to understand each client&apos;s requirements, then
            deliver with attention to detail from the first conversation through
            to completion.
          </p>
          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            {[
              "Quality-focused execution",
              "Client-centered approach",
              "Commitment to safety",
            ].map((highlight) => (
              <div key={highlight} className="flex gap-2 text-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]"
          >
            Discover our company
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="relative min-h-[480px] overflow-hidden bg-muted">
          <Image
            src="/about.jpg"
            alt="Construction structure and architectural detail"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className="bg-secondary px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              What we do
            </p>
            <h2 className="font-heading text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              Construction Solutions Tailored to Your Needs.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              From residential builds to commercial spaces and renovations, our
              services are shaped around practical requirements and lasting
              value.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <article key={service.title} className="group bg-background">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Selected work
            </p>
            <h2 className="font-heading text-4xl tracking-[-0.045em] sm:text-6xl">
              Our Work Speaks for Itself.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              Sample portfolio concepts demonstrating an approach to quality,
              practical design, and reliable execution.
            </p>
          </div>
          <Link
            href="/about"
            className="group inline-flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]"
          >
            View all projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={index % 2 === 1 ? "md:mt-16" : ""}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                {project.category}
              </p>
              <h3 className="mt-2 font-heading text-2xl">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#171715] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Why choose us
            </p>
            <h2 className="font-heading text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              A Reliable Partner for Every Stage of Construction.
            </h2>
          </div>
          <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <Icon className="size-7 text-primary" strokeWidth={1.5} />
                <h3 className="mt-7 font-heading text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="max-w-xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Our process
            </p>
            <h2 className="font-heading text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              A Clear Process. A Better Building Experience.
            </h2>
          </div>
          <p className="max-w-sm self-end leading-7 text-muted-foreground">
            Clear steps and consistent communication keep every project moving
            with purpose.
          </p>
        </div>
        <div className="mt-16 grid border-y border-border md:grid-cols-4 md:divide-x md:divide-border">
          {process.map(([number, title, description]) => (
            <div
              key={number}
              className="relative border-b border-border py-8 last:border-0 md:border-0 md:px-7 md:first:pl-0"
            >
              <span className="font-heading text-4xl text-primary">
                {number}
              </span>
              <h3 className="mt-7 font-heading text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-[500px] items-center overflow-hidden bg-[#171715] px-6 py-24 text-white lg:px-10">
        <Image
          src="/troy-mortier.jpg"
          alt="Architectural construction detail"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#171715]/55" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="max-w-4xl font-heading text-5xl leading-[0.98] tracking-[-0.05em] sm:text-7xl">
            We Don&apos;t Just Build Structures.
            <br />
            <span className="text-white/55">We Build for the Future.</span>
          </p>
        </div>
      </section>

      <section className="bg-primary px-6 py-24 text-primary-foreground lg:px-10 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <HardHat className="size-9" strokeWidth={1.5} />
            <h2 className="mt-8 max-w-3xl font-heading text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              Ready to Bring Your Next Project to Life?
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-primary-foreground/75">
              Homeowners, property developers, and businesses can start a
              conversation about their construction requirements today.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#171715] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-1"
            >
              Request a quote
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-primary-foreground/45 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:border-[#171715] hover:text-[#171715]"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
