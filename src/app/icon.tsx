import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#24382D",
          color: "#FBF6EE",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        ف
      </div>
    ),
    size,
  );
}
