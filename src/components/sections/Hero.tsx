import Image from "next/image";

import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-6 px-6 pb-16 lg:p-10 min-h-svh">
      <HeroBg />

      <div className="relative z-10 min-h-svh flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center items-start lg:pt-16 gap-10">
          <h1 className="text-display-sm font-normal font-display text-[32px] lg:text-[56px] lg:w-250">
            Design-build spaces shaped by clarity, function, and timeless
            detail.
          </h1>
          <div className="flex flex-col items-start lg:flex-row gap-3 lg:gap-6">
            <Button
              label="Explore Our Projects"
              icon={<MoveRight size={16} strokeWidth={3} />}
            />
            <Button label="Contact Us" variant="outlined" color="offwhite" />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroBg = () => {
  return (
    <>
      <Image
        src="/images/hero-image.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-neutral-black/15 via-neutral-black/45 via-[56.5%] to-neutral-black pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-41.75 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom, 
            transparent 0%, 
            color-mix(in srgb, var(--color-primary-1000) 10%, transparent) 50%,
            color-mix(in srgb, var(--color-primary-1000) 65%, transparent) 75%,
            var(--color-primary-1000) 100%)
            `,
        }}
      />
    </>
  );
};

export default Hero;
