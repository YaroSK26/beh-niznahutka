"use client";

import { cn } from "@/lib/utils";

export function TimelineItem({
  time,
  title,
  description,
  className,
  ...props
}) {
  return (
    <div className={cn("contents", className)} {...props}>
      <div className="relative z-10 self-start mt-1 flex items-center justify-center w-16 h-16 rounded-full bg-[#19ff7d] text-[#05371b] font-bold flex-shrink-0 md:[grid-column:2]">
        <span className="text-sm md:text-base text-center">{time}</span>
      </div>
      <div className="mb-8 bg-[#05371b] p-6 rounded-lg shadow-lg md:[grid-column:3]">
        <h3 className="text-2xl font-bold mb-2 text-[#19ff7d] font-sans">
          {title}
        </h3>
        <div className="text-lg font-sans">{description}</div>
      </div>
    </div>
  );
}

export function Timeline({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-[4rem_1fr] gap-x-4 md:contents",
        className
      )}
      {...props}
    >
      {/* Mobile vertical line (desktop line lives in the page-level grid container, see page.js) */}
      <div className="md:hidden absolute left-8 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-[#19ff7d]"></div>
      {children}
    </div>
  );
}
