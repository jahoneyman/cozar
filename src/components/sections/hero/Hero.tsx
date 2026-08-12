import { MoveRight } from "lucide-react";

import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";

import { HeroBg } from "./components";

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

export default Hero;
