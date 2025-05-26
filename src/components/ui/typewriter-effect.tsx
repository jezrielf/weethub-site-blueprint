
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: Array<{
    text: string;
    className?: string;
  }>;
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== currentWord.text) {
          setCurrentText(currentWord.text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText !== "") {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={cn("flex items-center", className)}>
      <span className={words[currentWordIndex]?.className}>
        {currentText}
      </span>
      <motion.span
        className={cn("ml-1 h-6 w-0.5 bg-weethub-yellow", cursorClassName)}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
};
