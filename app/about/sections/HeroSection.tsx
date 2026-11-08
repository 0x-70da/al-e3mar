import Image from "next/image";

const HeroSection = () => {
  return (
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
          We deliver quality construction, reliable solutions, and lasting value
          for the people and places we build with.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
