import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const getTechColor = (tech) => {
    switch (tech) {
      case "React js":
        return "bg-blue-600";
      case "Javascript":
        return "bg-yellow-700";
      case "HTML":
        return "bg-orange-600";
      case "Vue.js":
        return "bg-green-700";
      case "CSS":
        return "bg-blue-900";
      case "Framer Motion":
        return "bg-purple-600";
      default:
        return "bg-stone-800";
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section className="px-6 py-16" id="work">
      <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-12">
        Work
      </h1>
      <div className="h-1 w-24 mb-10 bg-white"></div>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={project.image}
                alt={project.name}
                width={300}
                height={300}
                className="mb-6 rounded-lg object-cover"
              />
            </motion.div>

            <motion.div
              className="w-full max-w-2xl lg:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={contentVariants}
            >
              <h3 className="mb-4 font-semibold text-3xl">{project.name}</h3>
              <p className="mb-6 text-slate-300 text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`mr-2 rounded ${getTechColor(
                      tech
                    )} p-2 text-base font-semibold text-stone-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-white text-black font-semibold px-4 py-2 transition-all duration-300 hover:bg-opacity-80"
                  >
                    View Project
                  </a>
                )}
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded border border-white text-white font-semibold px-4 py-2 transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
