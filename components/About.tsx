"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="w-52 h-52 bg-blue-500 m-28 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-black text-white w-52 rounded-none"
        >
          Click Here
        </button>
      </div>
      <motion.div
        className="w-52 h-52 bg-pink-600 m-52 rounded-lg"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 1,
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      />
      <motion.div className="box" whileTap={{ scale: 1.1 }} />
    </>
  );
};

export default About;
