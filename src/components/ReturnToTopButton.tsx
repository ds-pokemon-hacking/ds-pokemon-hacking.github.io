import React, { useEffect, useState } from "react";

const ReturnToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // show after scrolling down a bit
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 1000,
        padding: "0.75rem 1rem",
        borderRadius: "9999px", // pill shape
        border: "none",
        backgroundColor: "var(--ifm-color-primary)",
        color: "#fff",
        fontSize: "0.9rem",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
      aria-label="Return to top of page"
    >
      <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>↑</span>
      <span>Return to top of page</span>
    </button>
  );
};

export default ReturnToTopButton;
