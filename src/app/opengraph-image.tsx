import { ImageResponse } from "next/og";

export const alt = "فَهْم | FAHM — Adaptive learning for every child";
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
          background: "linear-gradient(135deg, #FBF6EE 0%, #F4ECE0 55%, #D7E3D8 100%)",
          color: "#1C1712",
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
              background: "#24382D",
              color: "#FBF6EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ fontSize: 28, letterSpacing: 8, color: "#A84522" }}>
            FAHM
          </div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, color: "#24382D", lineHeight: 1.1 }}>
          Knowledge adapts to the student
        </div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#3D342C", maxWidth: 860 }}>
          The AI platform for adaptive learning for people with disabilities
        </div>
      </div>
    ),
    size,
  );
}
