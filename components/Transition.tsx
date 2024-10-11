"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/app/use-follow-pointer";

export default function Transition() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <motion.div ref={ref} className="box" style={{ x, y }} />
      <h1 className="text-black" style={{ zIndex: 999 }}>
        Welcome Framer Motion To My Skills
      </h1>
      <motion.div
        className="w-52 h-52 bg-white m-52"
        animate={{ rotate: 180 }}
        transition={{ type: "inertia", velocity: 180 }}
      />
      <motion.div
        className="w-52 h-52 bg-white m-52"
        drag
        dragTransition={{
          min: 0,
          max: 100,
          bounceStiffness: 100,
        }}
      />
    </>
  );
}
