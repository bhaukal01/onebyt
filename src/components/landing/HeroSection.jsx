function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://ik.imagekit.io/1usyzu9ab/Video%20Project%201.mp4"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black" />

      <div className="relative z-10 h-full w-full">
        <h1 className="hero-title absolute text-white font-medium text-[clamp(3.8rem,11.5vw,14rem)] md:text-[clamp(4.6rem,10.5vw,15rem)] left-4 md:left-10 top-[18%]">
          deploy
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[clamp(3.8rem,11.5vw,14rem)] md:text-[clamp(4.6rem,10.5vw,15rem)] right-4 md:right-10 top-[38%] text-right">
          any
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[clamp(3.8rem,11.5vw,14rem)] md:text-[clamp(4.6rem,10.5vw,15rem)] left-[18%] md:left-[28%] top-[58%]">
          app
        </h1>

        <div className="absolute left-6 md:left-10 top-[40%] max-w-sm flex flex-col items-start gap-6 z-20">
          <p className="max-w-[260px] text-[clamp(0.9rem,0.9vw,1.05rem)] leading-snug text-white/90 m-0">
            we manage deployments and hosting for web apps, apis, databases, and
            minecraft infrastructure with reliable cloud-first operations.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#plans"
              className="bg-white text-black text-[clamp(0.85rem,0.85vw,0.95rem)] font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
            >
              explore plans
            </a>
            <a
              href="#contact"
              className="bg-neutral-900/90 text-white text-[clamp(0.85rem,0.85vw,0.95rem)] rounded-full px-6 py-3 border border-white/15 hover:text-white transition-colors"
            >
              book onboarding
            </a>
          </div>
        </div>

        <div className="absolute right-6 md:right-24 top-[14%]">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
            <span className="text-[clamp(2.2rem,3.5vw,3.4rem)] md:text-[clamp(2.6rem,3vw,3.7rem)] font-medium tracking-tight">
              99.9%
            </span>
          </div>
          <p className="text-[clamp(0.68rem,0.8vw,0.85rem)] md:text-[clamp(0.72rem,0.8vw,0.9rem)] text-white/70 mt-1 text-right">
            uptime delivered
          </p>
        </div>

        <div className="absolute left-6 md:left-20 bottom-22 md:bottom-24 hidden md:block">
          {/* <div className="flex items-center gap-3">
            <span className="text-[clamp(2.2rem,3.5vw,3.4rem)] md:text-[clamp(2.6rem,3vw,3.7rem)] font-medium tracking-tight">
              in-house hosting
            </span>
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
          </div>
          <p className="text-[clamp(0.68rem,0.8vw,0.85rem)] md:text-[clamp(0.72rem,0.8vw,0.9rem)] text-white/70 mt-1">
            coming soon
          </p> */}
        </div>

        <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
            <span className="text-[clamp(2.2rem,3.5vw,3.4rem)] md:text-[clamp(2.6rem,3vw,3.7rem)] font-medium tracking-tight">
              10+
            </span>
          </div>
          <p className="text-[clamp(0.68rem,0.8vw,0.85rem)] md:text-[clamp(0.72rem,0.8vw,0.9rem)] text-white/70 mt-1 text-right">
            provider networks
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
