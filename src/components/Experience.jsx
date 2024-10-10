import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../../constants"; // Assuming you have an EXPERIENCES array in constants.js

// Animation for each experience item
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.3, // Delays each item with increasing factor
    },
  }),
};

const Experience = () => {
  return (
    <section className="px-6 py-10" id="experience">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Experience
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Central vertical timeline line */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>{" "}
          {/* Only visible on md and larger screens */}
          {/* Mapping through the imported EXPERIENCES */}
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              className={`mb-10 flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              custom={index} // Pass the index to control delays
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the section is in view
              variants={itemVariants} // Item-specific animations
            >
              {/* Experience Item */}
              <div className="w-full sm:w-5/12">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                  {/* Adjusted padding */}
                  <h2 className="text-xl sm:text-2xl font-semibold text-stone-800">
                    {" "}
                    {/* Adjusted font sizes */}
                    {experience.yearRange}
                  </h2>
                  <h3 className="text-lg sm:text-xl font-medium text-stone-800">
                    {experience.title}
                  </h3>
                  <h4 className="text-base sm:text-lg font-semibold italic text-stone-800">
                    {experience.company}
                  </h4>
                  {/* Description as a list */}
                  <ul className="list-disc pl-5 mt-3 text-stone-800">
                    {experience.description.map((bullet, i) => (
                      <li key={i} className="text-base leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Circle Indicator */}
              <div className="w-8 h-8 hidden sm:block bg-blue-500 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
