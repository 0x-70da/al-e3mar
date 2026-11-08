const CompanyAcheivmentsSection = () => {
  return (
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
  );
};

export default CompanyAcheivmentsSection;
