"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ParallaxBG({ imageUrl, scalePercent = 125, brightness = 1.1, contrast = 1.05 }: { imageUrl: string; scalePercent?: number; brightness?: number; contrast?: number }) {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const docHeight = doc.scrollHeight - doc.clientHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setPos((ratio - 0.5) * 100); // translateY in %
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scale = scalePercent / 100;

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <Image
        src={imageUrl}
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        style={{
          transform: `translateY(${pos}%) scale(${scale})`,
          objectFit: "cover",
          filter: `grayscale(40%) brightness(${brightness}) contrast(${contrast})`,
          willChange: "transform",
        }}
      />
    </div>
  );
} 