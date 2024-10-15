"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AnimatePresenceExample = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // Adjust duration as needed
            className="w-72 h-48 bg-black m-12 rounded-lg flex items-center justify-center font-bold text-xl"
          >
            I am Here!
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default AnimatePresenceExample;
