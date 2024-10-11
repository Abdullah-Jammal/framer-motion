"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const show = {
  opacity: 1,
  y: 0,
  display: "block",
  transition: { duration: 1 },
};

const hide = {
  opacity: 0,
  y: -200,
  transition: { duration: 1 },
  transitionEnd: {
    display: "none",
  },
};

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="example">
      <motion.div className="box" animate={isVisible ? show : hide} />
      <div className="controls">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </motion.button>
      </div>
    </div>
  );
};

export default ShowHide;
