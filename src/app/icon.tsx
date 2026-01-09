import { ImageResponse } from "next/og";

import { siteContent } from "@/content/site";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0d12",
          color: "#f8fafc",
          fontFamily: "Inter, ui-sans-serif, system-ui",
          fontSize: 28,
          fontWeight: 700,
          borderRadius: 16
        }}
      >
        {siteContent.site.name
          .split(" ")
          .map((word) => word[0])
          .join("")}
      </div>
    ),
    {
      width: size.width,
      height: size.height
    }
  );
}
