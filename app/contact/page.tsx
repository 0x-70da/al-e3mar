import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Start a conversation about your next construction, renovation, or finishing project.",
};
const details = [
  {
    icon: Phone,
    label: "Phone",
    value: "+00 000 000 0000",
    href: "tel:+0000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: MapPin,
    label: "Office location",
    value: "Address to be confirmed",
    href: "#location",
  },
  {
    icon: Clock3,
    label: "Working hours",
    value: "Mon – Fri · 08:00 – 17:00",
    href: "#form",
  },
];

export default function ContactPage(): React.ReactNode {
  return (
    <main className="bg-background">
      <section className="relative pt-30 flex min-h-[500px] items-end overflow-hidden bg-[#171715] text-white">
        <Image
          src="/highBuilding.jpg"
          alt="Contemporary building facade"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171715] via-[#171715]/60 to-[#171715]/25" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            Home&nbsp; / &nbsp;Contact us
          </p>
          <h1 className="max-w-3xl font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
            Let&apos;s talk about your next project.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/65">
            Tell us what you&apos;re planning. We&apos;ll bring the right
            questions, experience, and next steps to the conversation.
          </p>
        </div>
      </section>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
          {details.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group px-6 py-8 transition-colors hover:bg-secondary/60 lg:px-8"
            >
              <Icon className="size-5 text-primary" strokeWidth={1.5} />
              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {label}
              </p>
              <p className="mt-2 text-sm font-medium transition-colors group-hover:text-primary">
                {value}
              </p>
            </a>
          ))}
        </div>
      </section>
      <section
        id="form"
        className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24 lg:px-10 lg:py-36"
      >
        <div>
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            Start here
          </p>
          <h2 className="max-w-sm font-heading text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            A good project starts with a good conversation.
          </h2>
          <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
            Whether you have a detailed brief or an early idea, share a little
            about what you&apos;re working on and our team will get back to you.
          </p>
          <div className="mt-12 border-l-2 border-primary pl-5 text-sm leading-6 text-muted-foreground">
            <span className="font-medium text-foreground">
              Prefer a direct conversation?
            </span>
            <br />
            Call us or send a message on WhatsApp.
          </div>
        </div>
        <form className="grid gap-6" action="#" method="post">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
              Full name
              <input
                required
                name="name"
                placeholder="Your name"
                className="mt-1 h-12 border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </label>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
              Email address
              <input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
                className="mt-1 h-12 border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </label>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
              Phone number
              <input
                name="phone"
                placeholder="+00 000 000 0000"
                className="mt-1 h-12 border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </label>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
              Subject
              <input
                required
                name="subject"
                placeholder="How can we help?"
                className="mt-1 h-12 border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </label>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
              Inquiry type
              <select
                name="type"
                defaultValue=""
                className="mt-1 h-12 border-b border-border bg-background px-0 text-sm font-normal normal-case tracking-normal outline-none focus:border-primary"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option>General inquiry</option>
                <option>Construction project</option>
                <option>Finishing services</option>
                <option>Renovation</option>
                <option>Request a quote</option>
              </select>
            </label>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
              Project location
              <input
                name="location"
                placeholder="City or area"
                className="mt-1 h-12 border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none placeholder:text-muted-foreground/60 focus:border-primary"
              />
            </label>
          </div>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            Message
            <textarea
              required
              name="message"
              placeholder="Tell us a little about your project..."
              rows={5}
              className="mt-1 resize-none border-b border-border bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </label>
          <div className="flex flex-col justify-between gap-6 pt-2 sm:flex-row sm:items-center">
            <p className="max-w-xs text-xs leading-5 text-muted-foreground">
              Your information will only be used to respond to your inquiry. We
              respect your privacy.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-1"
            >
              Send your inquiry <Send className="size-4" />
            </button>
          </div>
        </form>
      </section>
      <section
        id="location"
        className="bg-[#e8e3d9] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Find us
            </p>
            <h2 className="max-w-md font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
              A location to be confirmed.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              Our office address and map location will be added here once
              confirmed. Please contact us directly for an appointment.
            </p>
            <Link
              href="mailto:hello@example.com"
              className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]"
            >
              Ask for directions{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#c9c0b0]">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #171715 1px, transparent 1px), linear-gradient(-45deg, #171715 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <MapPin
              className="relative size-10 text-primary"
              strokeWidth={1.2}
            />
            <span className="absolute bottom-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Map placeholder
            </span>
          </div>
        </div>
      </section>
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl border border-border px-7 py-12 sm:px-14 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Choose your way in
            </p>
            <h2 className="mt-4 font-heading text-3xl tracking-[-0.03em] sm:text-4xl">
              Call, email, or message us.
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            <a
              href="tel:+0000000000"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4" /> Call us
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#20201d] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-primary"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
