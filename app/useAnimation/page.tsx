/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const page = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });

    return () => controls.stop();
  }, []);

  return (
    <div>
      <motion.div>{rounded}</motion.div>
      <motion.div
        className="w-52 h-52 bg-black"
        animate={{ transform: "translateX(100px)" }}
      />
    </div>
  );
};

export default page;
