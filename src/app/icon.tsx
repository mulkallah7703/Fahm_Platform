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
          background: "#8B7CF6",
          color: "#0C0D14",
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
