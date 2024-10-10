import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

const Projects = () => {
  // Variants for the image entering from the left
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

  // Variants for the content (text and tech stack) entering from the right
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
        delay: 0.3, // Delay to ensure it happens after the image
      },
    },
  };

  return (
    <section className="px-6 py-16" id="experience">
      {/* Title section */}
      <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-12">
        Work
      </h1>
      <div className="h-1 w-24 mb-10 bg-white"></div>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            {/* Animate the image coming from the left */}
            <motion.div
              className="w-full lg:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="mb-6 rounded-lg object-cover"
              />
            </motion.div>

            {/* Animate the content (text and tech stack) coming from the right */}
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
              <div>
                {project.techStack.map((tech, index) => (
                  <span
                    className="mr-3 rounded bg-stone-900 p-3 text-base font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
