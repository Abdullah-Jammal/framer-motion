"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const buttonVariant: Variants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#1f1f1f",
  },
  tab: {
    scale: 0.9,
  },
};

const Gesture = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function onPan(event, info) {
    setX(info.point.x);
    setY(info.point.y);
  }
  return (
    <div className="flex flex-col gap-6">
      <motion.button
        whileHover="hover"
        whileTap="tab"
        variants={buttonVariant}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="bg-black text-white py-2 px-6 rounded-md uppercase"
      >
        Click Me!
      </motion.button>
      <motion.div
        whileTap={{ scale: 2 }}
        className="w-32 h-14 bg-pink-600 flex justify-center items-center text-gray-300 uppercase text-xl rounded-sm"
      >
        <motion.button onPointerDownCapture={(e) => e.stopPropagation()}>
          Stop
        </motion.button>
      </motion.div>
      <motion.input whileFocus={{ scale: 1.2 }} />
      <motion.div
        className="w-32 h-14 bg-pink-600 flex justify-center items-center text-gray-300 uppercase text-xl rounded-sm"
        style={{ position: "absolute", top: y, left: x }}
        onPan={onPan}
        whileDrag={{ scale: 0.8 }}
      />
      <motion.div
        className="bg-blue-300 py-3 px-2 rounded-3xl
      text-center uppercase font-bold text-red-700"
        drag="x"
        dragConstraints={{ left: 0, right: 300 }}
      >
        Click!
      </motion.div>
    </div>
  );
};

export default Gesture;
