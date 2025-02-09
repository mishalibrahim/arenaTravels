"use client";
import React from "react";
import { motion } from "motion/react";

const AnimatedText = ({ text }) => {
  const splitedText = text.split(/(\s+)/);
  return (
    <motion.span className="relative overflow-hidden block ">
      {splitedText.map((item, index) => (
        <motion.span
          initial={{
            y: 100,
            x: -20,
            scale: 0.8,
            opacity: 0,
            rotate: 0,
          }}
          whileInView={{
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            delay: index * 0.04,
            ease: "easeIn",
          }}
          viewport={{ once: true }}
          key={index}
          className="inline"
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
