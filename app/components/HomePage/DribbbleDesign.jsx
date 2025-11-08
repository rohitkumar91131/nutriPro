"use client";
import React, { useId } from "react";

export default function DotStructure({
  size = 60,
  cols = 10,
  rows = 10,
  dot = 3,
  gap = 2,
}) {
  const id = useId();
  const w = cols * dot + (cols - 1) * gap;
  const h = rows * dot + (rows - 1) * gap;
  const cx = w / 2,
    cy = h / 2,
    r = Math.min(w, h) * 0.48;

  const dots = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = x * (dot + gap) + dot / 2;
      const py = y * (dot + gap) + dot / 2;
      const d = Math.hypot(px - cx, py - cy);
      if (d <= r) {
        const depth = 1 - d / r;
        const rDot = dot * (0.7 + 0.6 * depth);
        const opacity = 0.45 + 0.55 * depth;
        dots.push({ px, py, rDot, opacity });
      }
    }
  }

  return (
    <div
      className="relative inline-block"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at center, rgba(34,197,94,0.1), rgba(0,0,0,0))",
        borderRadius: "50%",
        boxShadow:
          "0 0 12px rgba(34,197,94,0.3), inset 0 0 8px rgba(34,197,94,0.15)",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${w} ${h}`}
        style={{ display: "block" }}
      >
        <defs>
          <radialGradient id={`grad-${id}`} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="40%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#065f46" />
          </radialGradient>

          <filter id={`softGlow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.px}
            cy={d.py}
            r={d.rDot / 2}
            fill={`url(#grad-${id})`}
            fillOpacity={d.opacity}
            filter={`url(#softGlow-${id})`}
          />
        ))}
      </svg>
    </div>
  );
}
