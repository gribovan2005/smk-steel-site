"use client";

import Script from "next/script";

interface YandexDirectProps {
    targetId?: string;
}

const YandexDirect: React.FC<YandexDirectProps> = ({ targetId }) => {
    return (
        <>
            <Script
                id="yandex-direct-tracking"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w, d, n, s, t) {
              w[n] = w[n] || [];
              w[n].push(function() {
                Ya.Context.AdvManager.render({
                  blockId: "${targetId || "R-A-XXXXXX-X"}",
                  renderTo: "yandex_rtb_${targetId || "R-A-XXXXXX-X"}",
                  async: true
                });
              });
              t = d.getElementsByTagName("script")[0];
              s = d.createElement("script");
              s.type = "text/javascript";
              s.src = "//an.yandex.ru/system/context.js";
              s.async = true;
              t.parentNode.insertBefore(s, t);
            })(window, document, "yandexContextAsyncCallbacks");
          `,
                }}
            />

            <Script
                id="yandex-direct-goal"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.yaContextCb = window.yaContextCb || [];
            window.yaContextCb.push(function() {
              if (typeof Ya !== 'undefined' && Ya.adfoxCode) {
                Ya.adfoxCode.createAdaptive({
                  ownerId: 264443,
                  containerId: 'adfox_164843620891737873',
                  params: {
                    pp: 'g',
                    ps: 'cmic',
                    p2: 'iezw'
                  }
                }, ['desktop', 'tablet'], {
                  tabletWidth: 1023,
                  phoneWidth: 639,
                  isAutoReloads: false
                });
              }
            });
          `,
                }}
            />
        </>
    );
};

export default YandexDirect;
