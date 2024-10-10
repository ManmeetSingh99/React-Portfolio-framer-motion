import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";

// Function to map tech names to colors
const getTechColor = (tech) => {
  switch (tech) {
    case "React js":
      return "bg-blue-500"; // Example color for React
    case "JavaScript":
      return "bg-yellow-500"; // Example color for JavaScript
    case "HTML":
      return "bg-orange-500"; // Example color for HTML
    case "CSS":
      return "bg-pink-400"; // Example color for CSS
    // Add more cases for other techs and their colors
    default:
      return "bg-gray-500"; // Default color
  }
};

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="px-6 py-16" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Work
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      {/* Centering the grid and ensuring one card per row on medium screens */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden w-[500px] h-[350px] transition transform group mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            {/* Ensure the image fits properly and scales down on smaller screens */}
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-5/6 object-contain transition-opacity duration-300"
            />
            <h2 className="text-lg sm:text-xl font-medium mb-2 text-center">
              {project.name}
            </h2>

            <div className="relative z-20 p-4 flex flex-col justify-center h-full bg-black/30 text-white group-hover:bg-black/80 transition duration-300">
              {/* <h2 className="text-lg sm:text-xl font-medium mb-2">
                {project.name}
              </h2> */}
              <div className="flex flex-col justify-between">
                <p className="mb-2 flex-grow text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                {/* Tech stack representation */}
                <div className="flex space-x-1 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center ${getTechColor(
                        tech
                      )} p-1 rounded-full text-white text-xs`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-stone-900 rounded-xl font-medium py-1 px-1 w-24 text-xs hover:bg-gray-100 text-center"
                >
                  View on Github
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
