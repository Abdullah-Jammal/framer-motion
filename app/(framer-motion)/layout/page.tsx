"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState(allIngredients[0]);

  return (
    <div className="window">
      <nav>
        <ul>
          {allIngredients.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="newBack" layoutId="newBack" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTab.icon}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
