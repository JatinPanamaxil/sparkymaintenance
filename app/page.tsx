import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparky — Under Maintenance",
  description: "Sparky is currently undergoing scheduled maintenance. We'll be back shortly!",
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
        alignItems: "center",
        justifyContent: "center",
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

      {/* Overlay card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
          padding: "36px 28px",
          borderRadius: "24px",
          background: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          maxWidth: "320px",
          width: "90%",
          textAlign: "center",
        }}
      >
        {/* Spinning gear SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f5a623"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: "spin 3s linear infinite", flexShrink: 0 }}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>

        <h1
          style={{
            margin: 0,
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: "24px",
            letterSpacing: "-0.5px",
            color: "#ffffff",
            lineHeight: 1.2,
          }}
        >
          Under Maintenance
          <br />
          <span style={{ color: "#f5a623" }}>Back Soon ✨</span>
        </h1>

        <p
          style={{
            margin: 0,
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
          }}
        >
          We're upgrading Sparky. Hang tight!
        </p>

        {/* Animated dots */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#f5a623",
                display: "inline-block",
                animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        <p
          style={{
            margin: 0,
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Follow us on Telegram
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%           { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </main>
  );
}
