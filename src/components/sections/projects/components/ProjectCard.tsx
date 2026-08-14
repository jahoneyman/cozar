import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  name?: string;
  type?: string;
  location?: string;
}

const ProjectCard = ({
  image,
  name = "Project Name",
  type = "Project Type",
  location = "Location",
}: ProjectCardProps) => {
  return (
    <div className="w-[320px] shrink-0 border-b border-primary-900 bg-neutral-offwhite h-119">
      <div className="relative h-100 p-6">
        <span className="relative z-10 text-neutral-offwhite text-[14px] font-semibold">
          {type}
        </span>
        <Image src={image} alt="" fill className="object-cover" />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-b from-primary-1000/30 to-primary-1000/15 to-70% pointer-events-none"
        />
      </div>
      <div className="p-4 flex justify-between items-start">
        <div className="flex flex-col gap-2 text-label-md">
          <h3 className="text-primary-900">{name}</h3>
          <p className="text-neutral-gray">{location}</p>
        </div>
        <div className="flex flex-col gap-2 text-[12px] font-semibold">
          <Link
            href={""}
            className="text-primary-400 border-b-[0.5px] border-primary-400 pb-1 hover:text-primary-300"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
