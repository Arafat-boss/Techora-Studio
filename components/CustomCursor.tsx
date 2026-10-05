"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorElement = target.closest("[data-cursor-text]") as HTMLElement | null;
      if (cursorElement) {
        const text = cursorElement.getAttribute("data-cursor-text") || "";
        setCursorText(text);
      } else {
        setCursorText("");
      }

      const interactive = target.closest("button, a, input, textarea, select, [role='button']");
      setIsPointer(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Outer follow badge / dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200 hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {cursorText ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[12px] font-mono whitespace-nowrap shadow-2xl flex items-center gap-2 -translate-x-1/2 -translate-y-1/2 text-white/90"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a2e435] animate-pulse" />
            <span>{cursorText}</span>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              scale: isPointer ? 1.6 : 1,
              backgroundColor: isPointer ? "rgba(132, 204, 22, 0.4)" : "rgba(0, 0, 0, 0.15)",
              borderColor: isPointer ? "rgba(94, 156, 4, 0.9)" : "rgba(0, 0, 0, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-3.5 h-3.5 rounded-full border -translate-x-1/2 -translate-y-1/2 backdrop-blur-xs"
          />
        )}
      </motion.div>
    </>
  );
}
