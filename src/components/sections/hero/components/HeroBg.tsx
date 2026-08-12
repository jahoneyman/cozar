import Image from "next/image";

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

export default HeroBg;
