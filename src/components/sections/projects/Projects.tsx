import { ProjectCard } from "./components";

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16 bg-neutral-offwhite">
      <div>
        <h2 className="text-primary-900 font-display font-semibold text-[32px]">
          Our Projects
        </h2>
        <div>
          <ProjectCard
            image="/images/projects/project_1.png"
            name="Project Name"
            type="Construction"
            location="Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
