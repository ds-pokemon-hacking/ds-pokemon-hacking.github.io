// src/components/PageNavigator.tsx
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "@docusaurus/router";

interface Heading {
  id: string;
  text: string;
  level: number;
}

const PageNavigator: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [selected, setSelected] = useState("");

  // Collect headings without the return-to-top arrows
  useEffect(() => {
    const pageHeadings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2, article h3, article h4")
    ).map((h) => ({
      id: h.id,
      text: Array.from(h.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE) // only text nodes
        .map((node) => node.textContent)
        .join("")
        .trim(),
      level: parseInt(h.tagName.replace("H", ""), 10),
    }));

    setHeadings(pageHeadings);
    setSelected(""); // reset on route change
  }, [location]);

  // Update dropdown selection as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for header
      let currentId = "";

      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentId = h.id;
        }
      }

      setSelected(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial value

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetId = e.target.value;
    setSelected(targetId);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        margin: "1rem 0",
      }}
    >
      <button
        onClick={handleBack}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          border: "1px solid var(--ifm-color-primary)",
          background: "var(--ifm-color-primary)",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {headings.length > 0 && (
        <select
          value={selected}
          onChange={handleChange}
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid var(--ifm-color-primary)",
            cursor: "pointer",
          }}
        >
          <option value="" disabled hidden>
            Jump to section…
          </option>
          {headings.map((h) => (
            <option key={h.id} value={h.id}>
              {`${"  ".repeat(h.level - 2)}${h.text}`}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default PageNavigator;
