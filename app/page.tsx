import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sparky — Under Maintenance",
  description:
    "Sparky is currently undergoing scheduled maintenance. We'll be back shortly!",
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
      {/* ── Full-screen splash background ── */}
      <Image
        src="/splashscreen.png"
        alt="Sparky splash background"
        fill
        priority
        style={{ objectFit: "cover", opacity: 0.55 }}
      />

      {/* ── Overlay card ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "40px 32px",
          borderRadius: "24px",
          background: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          maxWidth: "360px",
          width: "90%",
          textAlign: "center",
        }}
      >
        {/* Pulsing icon */}
        <span
          style={{
            fontSize: "52px",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          ⚙️
        </span>

        <h1
          style={{
            margin: 0,
            fontFamily:
              "'Inter', 'SF Pro Display', -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: "26px",
            letterSpacing: "-0.5px",
            color: "#ffffff",
            lineHeight: 1.2,
          }}
        >
          Sparky is Getting
          <br />
          <span style={{ color: "#f5a623" }}>an Upgrade ✨</span>
        </h1>

        <p
          style={{
            margin: 0,
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.6,
          }}
        >
          We're working hard to bring you exciting new features and
          improvements. The game will be back online very soon — hang tight!
        </p>

        {/* Animated progress dots */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            paddingTop: "4px",
          }}
        >
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
            fontSize: "12px",
            color: "rgba(255,255,255,0.40)",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Follow us on Telegram for updates
        </p>
      </div>

      {/* ── Keyframe animations (inline for zero-dependency) ── */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.12); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%            { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </main>
  );
}
