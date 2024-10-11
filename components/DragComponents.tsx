"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
const DragComponents = () => {
  const constraintsRef = useRef(null);

  return (
    <div>
      <motion.div
        ref={constraintsRef}
        className="bg-yellow-300 h-32 w-96 rounded-md flex items-center justify-center"
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
          dragPropagation
          className="w-24 h-12 bg-white rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default DragComponents;
