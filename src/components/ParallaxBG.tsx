"use client";

import { useEffect, useState } from "react";

export default function ParallaxBG({ imageUrl, scalePercent = 125, brightness = 1.1, contrast = 1.05 }: { imageUrl: string; scalePercent?: number; brightness?: number; contrast?: number }) {
  const [pos, setPos] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const docHeight = doc.scrollHeight - doc.clientHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setPos(5 + ratio * 90);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${scalePercent}%`,
        backgroundPosition: `center ${pos}%`,
        filter: `grayscale(40%) brightness(${brightness}) contrast(${contrast})`,
      }}
    />
  );
} 