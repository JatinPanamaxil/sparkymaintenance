import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparky — Under Maintenance",
  description: "Sparky is currently undergoing scheduled maintenance. We'll be back shortly!",
};

const textStyle: React.CSSProperties = {
  fontFamily: "var(--font-mplus), 'M PLUS 1c', sans-serif",
  fontWeight: 700,
  fontSize: "16px",
  color: "#E18700",
};

export default function MaintenancePage() {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: "80px",
      }}
    >
      {/* Full-screen splash background */}
      <Image
        src="/splashscreen.png"
        alt="Sparky splash background"
        fill
        priority
        style={{ objectFit: "cover", opacity: 0.55 }}
      />

      {/* Content — floats directly over bg, pushed toward bottom */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
          textAlign: "center",
          width: "90%",
          maxWidth: "320px",
        }}
      >
        {/* Spinning gear SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E18700"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: "spin 6s linear infinite", flexShrink: 0 }}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>

        <h1 style={{ ...textStyle, margin: 0, fontSize: "22px", lineHeight: 1.2 }}>
          Under Maintenance
          <br />
          <span style={{ color: "#E18700" }}>Back Soon</span>
        </h1>

        <p style={{ ...textStyle, margin: 0, fontWeight: 700, color: "#909090" }}>
          We're upgrading Sparky. Hang tight!
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
