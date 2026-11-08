type Approach = string[][];

const ApproachSection = ({ approach }: { approach: Approach }) => {
  return (
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
  );
};

export default ApproachSection;
