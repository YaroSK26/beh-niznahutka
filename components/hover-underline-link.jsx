
import Link from "next/link";
import { cn } from "@/lib/utils";



export function HoverUnderlineLink({
  children,
  href,
  className,
  ...props
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-white transition-colors group", // Základná farba textu a 'group' pre hover efekt
        className // Umožňuje predať externé triedy
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 h-[1px] bg-[#19ff7d]", // Farba a výška podčiarknutia
          "w-0 transition-all duration-300 ease-in-out", // Počiatočný stav a prechod
          "group-hover:w-full" // Rozšírenie na celú šírku pri nabehnutí myšou
        )}
      />
    </Link>
  );
}
