import CardSpotlight from "../components/ui/CardSpotlight.jsx";

const ProjectCard = ({ project, reverse }) => {
  return (
    <CardSpotlight className="w-full relative z-0">
      <div
        className={`relative z-10 flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-10`}>
        {/* Project Image */}
        <a
          href={project.live || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full md:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Project Content */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-400 text-justify">{project.description}</p>

          <div className="flex gap-4 mt-4 font-semibold">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-white hover:text-black transition">
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default ProjectCard;
