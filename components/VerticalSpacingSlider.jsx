"use client";

import { useEffect, useState } from "react";

const DEFAULT_SPACING = 1;

export default function VerticalSpacingSlider() {
  const [spacing, setSpacing] = useState(DEFAULT_SPACING);

  useEffect(() => {
    document.documentElement.style.setProperty("--admin-vertical-spacing", spacing.toString());
  }, [spacing]);

  return (
    <aside className="spacing-slider" aria-label="Vertical spacing controls">
      <label htmlFor="vertical-spacing" className="spacing-slider-label">
        Vertical Spacing
      </label>
      <input
        id="vertical-spacing"
        className="spacing-slider-input"
        type="range"
        min="0.65"
        max="1.45"
        step="0.05"
        value={spacing}
        onChange={(event) => setSpacing(Number(event.target.value))}
        aria-valuemin={0.65}
        aria-valuemax={1.45}
        aria-valuenow={spacing}
      />
      <span className="spacing-slider-value">{Math.round(spacing * 100)}%</span>
    </aside>
  );
}
