"use client";

import { useState, useEffect } from "react";

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let newTimeLeft = {};

    if (difference > 0) {
      newTimeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return newTimeLeft;
  };

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after initial render on client
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval if the component is unmounted
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs once on mount

  // Recalculate immediately on mount to show correct initial time
  useEffect(() => {
    if (isMounted) {
      setTimeLeft(calculateTimeLeft());
    }
  }, [isMounted]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval];
    if (value !== undefined) {
      timerComponents.push(
        <span key={interval} className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-[#19ff7d] font-vina-sans">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-sm md:text-base text-white font-sans uppercase">
            {interval === "days"
              ? "dní"
              : interval === "hours"
              ? "hodín"
              : interval === "minutes"
              ? "minút"
              : "sekúnd"}
          </span>
        </span>
      );
    }
  });

  if (!isMounted) {
    // Render a placeholder or nothing on the server to avoid hydration mismatch
    return <div className="mt-8 flex justify-center gap-4 md:gap-8"></div>;
  }

  return (
    <div className="mt-8 flex justify-center gap-4 md:gap-8">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-2xl md:text-3xl font-bold text-[#19ff7d] font-vina-sans">
         Vidime sa o rok!
        </span>
      )}
    </div>
  );
}
