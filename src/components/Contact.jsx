import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../../constants";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "@remixicon/react";
import PopupForm from "./Popup";
// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Contact
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <motion.h3
        className="text-6xl md:text-8xl leading-none"
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>
      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.description}
      </motion.p>
      <motion.a
        className="text-xl md:text-2xl font-medium mt-8"
        initial="hidden"
        custom={0.8}
        whileInView="visible"
        variants={textVariants}
      >
        Email : {CONTACT_CONTENT.email}
      </motion.a>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="mt-4 w-56 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white text-lg p-2 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-60"
      >
        Shoot me an email
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <PopupForm onClose={() => setIsPopupOpen(false)} />
        </div>
      )}
      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          const Icon =
            link.icon === "RiGithubFill"
              ? RiGithubFill
              : link.icon === "RiLinkedinFill"
              ? RiLinkedinFill
              : RiInstagramFill;
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
