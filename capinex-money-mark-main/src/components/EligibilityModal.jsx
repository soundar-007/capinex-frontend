import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EligibilityModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) return;

    // Show after 3 seconds, each page refresh
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAdminRoute]);

  const handleClose = () => setIsVisible(false);

  const handleCTA = () => {
    setIsVisible(false);
    navigate("/emi-calculator");
  };

  if (!isVisible) return null;

  return (
    // Backdrop
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          maxWidth: "480px",
          width: "100%",
          padding: "40px 36px 36px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.25)",
          position: "relative",
          animation: "modalPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "20px",
            background: "none",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            color: "#9ca3af",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            background: "#e0f2fe",
            color: "#0284c7",
            fontSize: "12px",
            fontWeight: 600,
            padding: "4px 14px",
            borderRadius: "999px",
            marginBottom: "18px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Smart Financial Planning
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#002060",
            marginBottom: "12px",
            lineHeight: 1.3,
          }}
        >
          Know Your Loan Eligibility Instantly
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "14.5px",
            color: "#4b5563",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Planning for a home loan, business loan, or personal finance? Use our
          free EMI Calculator to instantly estimate your monthly payments,
          interest costs, and check how much you're eligible for — no paperwork
          required.
        </p>

        {/* Features list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "30px",
          }}
        >
          {[
            "✅  Instant EMI breakdown",
            "✅  Compare loan options",
            "✅  100% free, no registration",
          ].map((item) => (
            <div
              key={item}
              style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500 }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCTA}
          style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(135deg, #002060 0%, #0ea5e9 100%)",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.3px",
            boxShadow: "0 4px 14px rgba(14,165,233,0.35)",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Check Your Eligibility →
        </button>

        {/* Dismiss link */}
        <div style={{ textAlign: "center", marginTop: "14px" }}>
          <button
            onClick={handleClose}
            style={{
              background: "none",
              border: "none",
              color: "#9ca3af",
              fontSize: "13px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Maybe later
          </button>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default EligibilityModal;
