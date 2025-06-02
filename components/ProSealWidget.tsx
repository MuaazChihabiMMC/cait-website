"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    provenExpert?: {
      proSeal: (config: any) => void;
    };
  }
}

export default function ProSealWidget() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.provenExpert?.proSeal) {
      window.provenExpert.proSeal({
        widgetId: "51edb6bf-51ee-4275-a2f8-8300c2134556",
        language: "de-DE",
        usePageLanguage: false,
        bannerColor: "#2a54ba",
        textColor: "#FFFFFF",
        showReviews: true,
        hideDate: true,
        hideName: false,
        hideOnMobile: false,
        bottom: "250px",
        stickyToSide: "right",
        googleStars: true,
        zIndex: "9999",
        displayReviewerLastName: false,
      });
    }
  }, []);

  return (
    <>
      <noscript>
        <a
          href="https://www.provenexpert.com/cait-seo-social-media-und-ads-agentur/?utm_source=seals&utm_campaign=proseal&utm_medium=profile&utm_content=51edb6bf-51ee-4275-a2f8-8300c2134556"
          target="_blank"
          title="Customer reviews & experiences for CAIT SEO, Social Media und Ads Agentur"
          className="pe-pro-seal-more-infos"
        >
          More info
        </a>
      </noscript>

      <Script
        id="proseal-script"
        src="https://s.provenexpert.net/seals/proseal-v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.provenExpert?.proSeal) {
            window.provenExpert.proSeal({
              widgetId: "51edb6bf-51ee-4275-a2f8-8300c2134556",
              language: "de-DE",
              usePageLanguage: false,
              bannerColor: "#2a54ba",
              textColor: "#FFFFFF",
              showReviews: true,
              hideDate: true,
              hideName: false,
              hideOnMobile: false,
              bottom: "250px",
              stickyToSide: "right",
              googleStars: true,
              zIndex: "9999",
              displayReviewerLastName: false,
            });
          }
        }}
      />
    </>
  );
}
