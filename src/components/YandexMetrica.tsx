"use client";

import { useEffect } from "react";
import Script from "next/script";

interface YandexMetricaProps {
    counterId: string;
}

declare global {
    interface Window {
        ym: (id: string, method: string, ...params: unknown[]) => void;
    }
}

const YandexMetrica: React.FC<YandexMetricaProps> = ({ counterId }) => {
    useEffect(() => {
        if (typeof window !== "undefined" && window.ym) {
            window.ym(counterId, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
            });
        }
    }, [counterId]);

    return (
        <>
            <Script
                id="yandex-metrica-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/watch.js", "ym");

            ym(${counterId}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
                }}
            />
            <noscript>
                <div>
                    <img
                        src={`https://mc.yandex.ru/watch/${counterId}`}
                        style={{ position: "absolute", left: "-9999px" }}
                        alt=""
                    />
                </div>
            </noscript>
        </>
    );
};

export default YandexMetrica;
