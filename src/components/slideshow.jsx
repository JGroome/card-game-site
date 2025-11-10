import React, { useEffect, useRef, useState } from "react";

export default function Slideshow({
  images = [],
  interval = 4000,
  className = "",
  aspectRatio = "56.25%"
}) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [images.length, interval]);

  const go = (next) => {
    clearInterval(timerRef.current);
    setIdx((i) => (i + next + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <div className={`slideshow ${className}`}>
      <div className="slideshow-viewport" style={{ paddingTop: aspectRatio }}>
        {images.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`slideshow-slide ${i === idx ? "active" : ""}`}
            aria-hidden={i !== idx}
          />
        ))}
      </div>

      <button
        className="slideshow-nav prev"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <button
        className="slideshow-nav next"
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        ›
      </button>

      <div className="slideshow-dots" role="tablist" aria-label="Slideshow dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === idx ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === idx}
            role="tab"
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}
