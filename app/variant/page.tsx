"use client";

import { motion } from "framer-motion";
const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const page = () => {
  return (
    <div>
      <motion.ul initial="hidden" animate="visible" variants={list}>
        {Array.from({ length: 4 }).map((_, ind) => (
          <motion.li key={ind} variants={item}>
            Home
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default page;
