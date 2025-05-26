
"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const TextRevealCard = ({
  text,
  revealText,
  className,
}: {
  text: string;
  revealText: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br from-weethub-yellow to-yellow-600 p-8 text-black",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <motion.div
          className="text-2xl md:text-4xl font-bold"
          initial={{ opacity: 1, y: 0 }}
          animate={{ 
            opacity: isHovered ? 0 : 1,
            y: isHovered ? -20 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.div>
        <motion.div
          className="text-2xl md:text-4xl font-bold absolute top-0 left-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          {revealText}
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
    </div>
  );
};
