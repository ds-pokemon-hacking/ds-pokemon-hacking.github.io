import { useEffect } from "react";

export function useReturnToTopHover() {
  useEffect(() => {
    // Remove any previous icons
    document.querySelectorAll(".return-to-top-hover").forEach((el) => el.remove());

    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2, article h3, article h4")
    );

    headings.forEach((h) => {
      // Make heading relative so absolute icon aligns correctly
      h.style.position = "relative";

      const link = document.createElement("a");
      link.href = "#";
      link.innerText = "↑";
      link.className = "return-to-top-hover";
      link.style.position = "absolute";
      link.style.top = "50%";
      link.style.transform = "translateY(-50%)"; // vertical center
      link.style.fontSize = "0.8em";
      link.style.textDecoration = "none";
      link.style.opacity = "0";
      link.style.transition = "opacity 0.2s";
      link.style.cursor = "pointer";

      // Adjust right spacing based on heading level
      const level = parseInt(h.tagName.replace("H", ""), 10);
      link.style.right = `${1.5 + (level - 2) * 0.5}rem`;

      link.onclick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      h.appendChild(link);

      // Show icon on hover
      h.addEventListener("mouseenter", () => {
        link.style.opacity = "1";
      });
      h.addEventListener("mouseleave", () => {
        link.style.opacity = "0";
      });
    });
  }, []);
}
