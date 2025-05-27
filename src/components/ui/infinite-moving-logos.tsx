
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const InfiniteMovingLogos = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    logo?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap py-4",
          isMobile ? "gap-4" : "gap-8",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "relative max-w-full shrink-0 flex items-center justify-center",
              isMobile ? "w-[140px]" : "w-[200px]"
            )}
            key={`${item.name}-${idx}`}
          >
            <div className={cn(
              "flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-weethub-yellow/50 w-full",
              isMobile ? "p-3 h-16" : "p-6 h-24"
            )}>
              <div className="text-center">
                <div className={cn(
                  "mx-auto mb-1 bg-gradient-to-br from-weethub-yellow/10 to-weethub-yellow/20 rounded-xl flex items-center justify-center group-hover:from-weethub-yellow/20 group-hover:to-weethub-yellow/30 transition-all",
                  isMobile ? "w-8 h-8" : "w-16 h-16"
                )}>
                  <span className={cn(
                    "font-bold text-weethub-yellow",
                    isMobile ? "text-sm" : "text-2xl"
                  )}>
                    {item.name.charAt(0)}
                  </span>
                </div>
                <span className={cn(
                  "font-medium text-gray-700 group-hover:text-weethub-yellow transition-colors",
                  isMobile ? "text-xs" : "text-xs"
                )}>
                  {item.name}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
