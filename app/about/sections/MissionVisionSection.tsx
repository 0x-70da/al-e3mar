import { ClipboardCheck, Target } from "lucide-react";

const MissionVisionSection = () => {
  return (
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
            To deliver dependable construction solutions that meet clients&apos;
            needs through quality workmanship, professional service, and
            attention to detail.
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
            To become a trusted construction partner recognized for excellence,
            integrity, and lasting contributions to the built environment.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MissionVisionSection;
