"use client";

import React, { useRef } from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  maxMove?: number;
  hoverScale?: number;
  perspective?: number;
  cursorText?: string;
  onClick?: () => void;
}

export default function Card3DTilt({
  children,
  className = "",
  maxTilt = 8,
  maxMove = 10,
  hoverScale = 1.025,
  perspective = 900,
  cursorText,
  onClick,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerEnter = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.willChange = "transform";
    el.style.transformStyle = "preserve-3d";
    el.style.transition = "transform 140ms ease-out";
    el.style.transform = `perspective(${perspective}px) translate3d(0px,0px,0px) rotateX(0deg) rotateY(0deg) scale(${hoverScale})`;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const s = (e.clientX - rect.left) / rect.width;
    const c = (e.clientY - rect.top) / rect.height;
    const l = (s - 0.5) * 2;
    const u = (c - 0.5) * 2;

    const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

    const d = clamp(l * maxMove, -maxMove, maxMove);
    const f = clamp(u * maxMove, -maxMove, maxMove);
    const p = clamp(-u * maxTilt, -maxTilt, maxTilt);
    const m = clamp(l * maxTilt, -maxTilt, maxTilt);

    el.style.transition = "transform 40ms linear";
    el.style.transform = `perspective(${perspective}px) translate3d(${d}px, ${f}px, 0px) rotateX(${p}deg) rotateY(${m}deg) scale(${hoverScale})`;
  };

  const handlePointerLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 220ms cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transform = `perspective(${perspective}px) translate3d(0px,0px,0px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      data-cursor-text={cursorText || undefined}
      className={`relative transform-gpu ${className}`}
    >
      {children}
    </div>
  );
}
