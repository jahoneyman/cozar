import Button from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="studio"
      className="px-6 py-16 lg:px-20 lg:py-30 bg-primary-1000 overflow-hidden"
      style={{
        backgroundImage: `
            radial-gradient(
                ellipse 900px 350px at bottom left,
                color-mix(in srgb, var(--color-primary-200) 20%, transparent) 0%,
                color-mix(in srgb, var(--color-neutral-gray) 10%, transparent) 50%,
                transparent 100%

            )
        `,
      }}
    >
      <div className="flex flex-col gap-4 lg:gap-0">
        <p className="text-primary-400 font-sans font-semibold text-[12px] lg:text-[14px] pb-2 lg:pb-6 tracking-[0.72px] lg:tracking-[0.56px]">
          ABOUT OUR STUDIO
        </p>
        <div className="flex flex-col gap-4 lg:gap-10">
          <h2 className="font-display text-display-lg text-[28px] leading-[1.3] lg:text-[56px] lg:leading-[1.15] lg:w-298">
            We bring design and construction together to shape spaces with
            purpose.
          </h2>
          <div className="flex flex-col items-start lg:items-stretch gap-8 lg:pl-190">
            <p className="text-label-lg text-[14px] font-normal leading-[1.6] text-neutral-light lg:text-neutral-white lg:leading-tight lg:text-[20px]">
              From the first idea to the final detail, CoZar works closely with
              every client to create spaces grounded in clarity, function, and
              thoughtful execution. Our integrated approach keeps the vision
              consistent throughout the entire process.
            </p>
            <Button
              label="Explore Our Projects"
              variant="outlined"
              color="white"
              icon={<MoveRight size={16} />}
              className="justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
