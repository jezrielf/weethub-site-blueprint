
"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const FloatingCards = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
};

export const FloatingCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 shadow-2xl",
        className
      )}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-weethub-yellow/20 to-yellow-600/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </motion.div>
  );
};
