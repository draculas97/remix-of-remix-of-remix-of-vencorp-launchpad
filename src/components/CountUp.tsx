import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  isInView: boolean;
}

export default function CountUp({ end, duration = 1500, isInView }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Start animation after a small delay
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isInView]);

  return <>{count}</>;
}
