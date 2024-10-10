import React from "react";
import { ABOUT_CONTENT } from "../../constants";
import { motion } from "framer-motion";
import about from "../assets/about.png"; // Adjust the image path

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3, // Slightly transparent when visible
      transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }, // Adding a 1-second delay
    },
  };

  return (
    <section className="relative py-16 px-6" id="about">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        About
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <div className="max-w-4xl relative z-10">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-base md:text-xl lg:text-3xl mb-10 leading-relaxed text-left" // Ensuring text aligns with the heading
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
      {/* Image Background */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 md:w-1/3 lg:w-1/2 h-auto md:h-auto" /// Adjusting for responsiveness
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover", // Change to cover for better responsiveness
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", // Center the image on the right
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={imageVariants}
      />
    </section>
  );
};

export default About;
