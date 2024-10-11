"use client";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    x: 100,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    x: 0,
    opacity: 1,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1.1,
    },
  },
};

function Card({ emoji }: { emoji: string }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* <div className="splash" /> */}
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food = ["🍅", "🍊", "🍋", "🍐", "🍏", "🫐", "🍆", "🍇"];

const ScrollComp = () => {
  return food.map((item) => <Card key={item} emoji={item} />);
};

export default ScrollComp;
