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
    <div className={cn("mb-8 flex items-start relative", className)} {...props}>
      <div className="absolute top-10 md:top-6 -left-12 flex items-center justify-center w-16 h-16 rounded-full bg-[#19ff7d] text-[#05371b] font-bold  md:-left-16 z-10 flex-shrink-0">
        <span className="text-sm md:text-base text-center">{time}</span>
      </div>
      <div className="ml-16 md:ml-24 bg-[#05371b] p-6 rounded-lg shadow-lg w-full">
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
    <div className={cn("relative pl-8 md:pl-16", className)} {...props}>
      {/* Vertical line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[#19ff7d]"></div>
      {children}
    </div>
  );
}
