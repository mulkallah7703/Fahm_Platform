import { ImageResponse } from "next/og";

export const alt = "فَهْم | FAHM — Smart glasses and adaptive learning";
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
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(160deg, #10111A 0%, #0C0D14 70%, #272640 100%)",
          color: "#F4F2FB",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#8B7CF6",
              color: "#0C0D14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            ف
          </div>
          <div style={{ fontSize: 28, letterSpacing: 8, color: "#C6BEFF" }}>
            FAHM
          </div>
        </div>
        <div style={{ fontSize: 58, fontWeight: 700, color: "#F4F2FB", lineHeight: 1.15 }}>
          See. Understand. Learn.
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#C8C4D8", maxWidth: 900 }}>
          AI-powered smart glasses and a mobile platform for students with disabilities
        </div>
      </div>
    ),
    size,
  );
}
