import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./RevealText.css";

const RevealText = ({ text, color = "black", delay = 0 }) => {
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const overlay = overlayRef.current;

    if (!el || !overlay) return;

    overlay.style.background = color;
    const textWidth = el.offsetWidth;

    gsap.fromTo(
      overlay,
      { width: 0 },
      {
        width: textWidth,
        duration: 0.8,
        ease: "power2.inOut",
        delay,
        onComplete: () => {
          gsap.to(overlay, {
            transformOrigin: "right",
            left: "auto",
            right: 0,
            width: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onStart: () => {
              gsap.fromTo(
                el,
                { opacity: 0 },
                { opacity: 1, duration: 0.8, ease: "power2.out" }
              );
            },
          });
        },
      }
    );
  }, [delay, color]);

  return (
    <div className="reveal-block">
      <span ref={textRef} className="reveal-text">
        {text}
      </span>
      <div ref={overlayRef} className="reveal-overlay"></div>
    </div>
  );
};

export default RevealText;
