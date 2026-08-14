"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import { ProjectCard } from "./components";
import { ProjectInterface } from "./types";
import { useRef, useState } from "react";
import clsx from "clsx";

const Projects = () => {
  const projectData: ProjectInterface[] = [
    {
      name: "Residential Addition",
      type: "Construction",
      location: "Manila, Philippines",
      image: "/images/projects/project_1.png",
    },
    {
      name: "Residential Addition",
      type: "Construction",
      location: "Manila, Philippines",
      image: "/images/projects/project_2.png",
    },
    {
      name: "Residential Addition",
      type: "Construction",
      location: "Perth, Western Australia",
      image: "/images/projects/project_3.png",
    },
    {
      name: "Combat Sports Museum",
      type: "Construction",
      location: "Bago City, Philippines",
      image: "/images/projects/project_4.png",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const CARD_STEP = 320 + 8; //card width + gap
  const scrollLeftBy = () => {
    scrollRef.current?.scrollBy({ left: -CARD_STEP, behavior: "smooth" });
  };
  const scrollRightBy = () => {
    scrollRef.current?.scrollBy({ left: CARD_STEP, behavior: "smooth" });
  };
  const atStart = progress === 0;
  const atEnd = progress >= 0.999;

  return (
    <section id="projects" className="px-6 py-16 bg-neutral-offwhite">
      <div className="flex flex-col gap-8">
        <h2 className="text-primary-900 font-display font-semibold text-[32px]">
          Our Projects
        </h2>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* Progress bar */}
        <div className="flex items-center gap-8">
          <div className="relative w-full h-1 bg-neutral-light">
            <div
              className="absolute top-0 h-1 w-12.5 bg-primary-900"
              style={{ left: `calc((100% - 50px) * ${progress})` }}
            />
          </div>
          <div className="flex gap-2 text-primary-900">
            <MoveLeft
              onClick={scrollLeftBy}
              className={clsx(
                "cursor-pointer",
                atStart &&
                  "text-neutral-light cursor-not-allowed pointer-events-none",
              )}
            />
            <MoveRight
              onClick={scrollRightBy}
              className={clsx(
                "cursor-pointer",
                atEnd &&
                  "text-neutral-light cursor-not-allowed pointer-events-none",
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
