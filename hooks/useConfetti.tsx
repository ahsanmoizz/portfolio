"use client";
import confetti from "canvas-confetti";

export default function useConfetti() {
  const fire = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (!e) return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    confetti({
      particleCount: 40,
      startVelocity: 25,
      spread: 60,
      origin: {
        x: centerX / window.innerWidth,
        y: centerY / window.innerHeight,
      },
      scalar: 0.8,
      zIndex: 9999,
      colors: ["#ffffff"], // white stars ✨
      shapes: ["star"],
    });
  };

  return fire;
}
