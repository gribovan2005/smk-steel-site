"use client";

import { useEffect, useState } from "react";

export default function ParallaxBG({ imageUrl }: { imageUrl: string }) {
  const [pos, setPos] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const docHeight = doc.scrollHeight - doc.clientHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setPos(10 + ratio * 80); // move from 10% to 90% across the page
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
        backgroundSize: "cover",
        backgroundPosition: `center ${pos}%`,
        filter: "grayscale(100%)",
      }}
    />
  );
} 