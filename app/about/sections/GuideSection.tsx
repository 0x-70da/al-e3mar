type Values = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

const GuideSection = ({ values }: { values: Values[] }) => {
  return (
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
  );
};

export default GuideSection;
