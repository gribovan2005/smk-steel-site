"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ParallaxBG({
    imageUrl,
    scalePercent = 125,
    brightness = 1.1,
    contrast = 1.05,
    maxShiftPercent = 12,
}: {
    imageUrl: string;
    scalePercent?: number;
    brightness?: number;
    contrast?: number;
    maxShiftPercent?: number;
}) {
    const [pos, setPos] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const doc = document.documentElement;
            const scrollTop = doc.scrollTop || document.body.scrollTop;
            const docHeight = doc.scrollHeight - doc.clientHeight;

            if (docHeight <= 0) return;

            const scrollRatio = scrollTop / docHeight;
            const limitedRatio = Math.min(0.8, scrollRatio);

            const normalizedRatio = limitedRatio / 0.8;
            const shift = (normalizedRatio - 0.5) * 2 * maxShiftPercent;

            setPos(shift);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [maxShiftPercent]);

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
