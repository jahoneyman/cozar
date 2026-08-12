import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string | StaticImport;
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
    <div className="w-[320px]">
      <div className="relative h-100 p-6">
        <h3 className="relative z-10 text-white">{type}</h3>
        <Image src={image} alt="" fill className="object-cover" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 bg-linear-to-b from-primary-1000 to-primary-1000/50 to-50% pointer-events-none"
        />
      </div>
      <div className="p-4 flex justify-between items-start">
        <div className="flex flex-col gap-2 text-label-md">
          <h3 className="text-primary-1000">{name}</h3>
          <h3 className="text-neutral-gray">{location}</h3>
        </div>
        <div className="flex flex-col gap-2 text-label-md font-semibold">
          <Link href={""} className="text-primary-400 border-b-[0.5px] pb-1">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
