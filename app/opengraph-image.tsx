import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Route segment config for the generated Open Graph / Twitter card image.
export const alt = `${site.name} — ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          // Matches the site's warm off-white paper / near-black ink palette.
          background: "#f4f3ef",
          color: "#1c1b1a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Oval initials mark, echoing the navbar logo */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "64px",
              padding: "0 28px",
              border: "2px solid #1c1b1a",
              borderRadius: "999px",
              fontSize: "28px",
              letterSpacing: "-0.02em",
            }}
          >
            abhishek gurav
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#6b6a66",
            }}
          >
            {site.jobTitle} · {site.location}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "76px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            I build fast, thoughtful interfaces for the web.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
