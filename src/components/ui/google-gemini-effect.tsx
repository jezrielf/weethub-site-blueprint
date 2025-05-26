
"use client";
import React from "react";
import { motion, MotionValue } from "framer-motion";

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={`sticky top-80 ${className}`}>
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-weethub-yellow to-yellow-600">
        {title || "Transforme seu negócio"}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-gray-300 max-w-4xl mx-auto">
        {description || "Soluções completas em e-commerce para empresas que buscam resultados excepcionais"}
      </p>
      <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-red-transparent absolute ">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,215,0,0.6)_0%,rgba(255,215,0,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{"Weethub"}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m9 12 2 2 4-4"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>

      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full h-[890px]"
      >
        <defs>
          <linearGradient id="firstGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFA500" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="secondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M1016 0L1016 472L72 472L72 0L1016 0Z"
          stroke="url(#firstGradient)"
          strokeWidth="2"
          fill="none"
          initial={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
        />
        <motion.path
          d="M472 0L472 472L0 472L0 0L472 0Z"
          stroke="url(#secondGradient)"
          strokeWidth="2"
          fill="none"
          initial={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          }}
          style={{
            pathLength: pathLengths[1],
          }}
        />
        <motion.path
          d="M1440 0L1440 472L1016 472L1016 0L1440 0Z"
          stroke="url(#firstGradient)"
          strokeWidth="2"
          fill="none"
          initial={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          }}
          style={{
            pathLength: pathLengths[2],
          }}
        />
        <motion.path
          d="M472 472L472 890L0 890L0 472L472 472Z"
          stroke="url(#secondGradient)"
          strokeWidth="2"
          fill="none"
          initial={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          }}
          style={{
            pathLength: pathLengths[3],
          }}
        />
        <motion.path
          d="M1440 472L1440 890L1016 890L1016 472L1440 472Z"
          stroke="url(#firstGradient)"
          strokeWidth="2"
          fill="none"
          initial={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
        />
      </svg>
    </div>
  );
};
