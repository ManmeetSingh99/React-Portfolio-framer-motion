import {
  RiCss3Fill,
  RiDatabase2Fill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavaFill,
  RiJavascriptFill,
  RiReactjsLine,
  RiVuejsLine,
} from "@remixicon/react";
import React from "react";
import { motion } from "framer-motion";

const Technologies = () => {
  const iconVariants = {
    hidden: {
      x: -300, // More left
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1], // Smoother
        type: "spring",
        stiffness: 20,
      },
    },
  };

  const bounceAnimationUp = {
    y: [0, -5, 0], // Moves up then down
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  const bounceAnimationDown = {
    y: [0, 5, 0], // Moves down then up
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  return (
    <div className="border-b border-neutral-800 pb-24 px-6 py-10" id="skills">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Skills
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          key="react"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={bounceAnimationUp} // React goes up first
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-9xl size-8 text-cyan-400" />
        </motion.div>

        <motion.div
          key="javascript"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={bounceAnimationDown} // JavaScript goes down first
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-9xl size-8 text-orange-400" />
        </motion.div>

        <motion.div
          key="java"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={bounceAnimationUp} // Java goes up
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavaFill className="text-9xl size-8 text-red-400" />
        </motion.div>

        <motion.div
          key="vue"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={bounceAnimationDown} // Vue goes down
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiVuejsLine className="text-9xl size-8 text-green-400" />
        </motion.div>

        <motion.div
          key="html"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={bounceAnimationUp} // HTML goes up
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Fill className="text-9xl size-8 text-orange-400" />
        </motion.div>

        <motion.div
          key="css"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={bounceAnimationDown} // CSS goes down
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Fill className="text-9xl size-8 text-blue-400" />
        </motion.div>

        <motion.div
          key="github"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={bounceAnimationUp} // GitHub goes up
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiGithubFill className="text-9xl size-8 text-stone-400" />
        </motion.div>

        <motion.div
          key="sql"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          animate={bounceAnimationDown} // SQL goes down
          className="rounded-2xl border-4 border-neutral-800 px-4 py-1"
        >
          <RiDatabase2Fill className="text-9xl size-8 text-blue-400" />
          <span className="text-blue-300">SQL</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
