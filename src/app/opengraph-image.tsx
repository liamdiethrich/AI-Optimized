import { ImageResponse } from "next/og";

import { siteContent } from "@/content/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0d12",
          color: "#f8fafc",
          fontFamily: "Inter, ui-sans-serif, system-ui"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 160,
            width: 160,
            borderRadius: 40,
            border: "2px solid rgba(148, 163, 184, 0.4)",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#f8fafc",
            marginBottom: 32
          }}
        >
          AO
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: "-0.03em" }}>
          {siteContent.site.name}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            color: "rgba(226, 232, 240, 0.8)",
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.3
          }}
        >
          {siteContent.site.description}
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 18,
            color: "rgba(148, 163, 184, 0.75)"
          }}
        >
          Logo mark unavailable? This text mark keeps the brand identifiable.
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height
    }
  );
}
