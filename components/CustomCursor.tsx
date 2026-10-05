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
            style={{
              backgroundColor: "#09090b",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
            }}
            className="px-4 py-2 rounded-full flex items-center gap-2.5 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-50"
          >
            <span
              className="w-2 h-2 rounded-full shrink-0 animate-pulse"
              style={{
                backgroundColor: "#B8FF4B",
                boxShadow: "0 0 8px #B8FF4B",
              }}
            />
            <span
              style={{ color: "#ffffff" }}
              className="text-xs font-mono font-medium tracking-wide whitespace-nowrap leading-none"
            >
              {cursorText}
            </span>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              scale: isPointer ? 1.6 : 1,
              backgroundColor: isPointer ? "rgba(184, 255, 75, 0.45)" : "rgba(0, 0, 0, 0.15)",
              borderColor: isPointer ? "#B8FF4B" : "rgba(0, 0, 0, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-3.5 h-3.5 rounded-full border -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
        )}
      </motion.div>
    </>
  );
}
