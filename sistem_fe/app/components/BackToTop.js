"use client";

export default function BackToTop() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleBackToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}