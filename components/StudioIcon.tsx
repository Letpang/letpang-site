import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ClayIcon({ kind, className = "" }: { kind: "book" | "play" | "heart"; className?: string }) {
  return <span className={`clay-icon clay-${kind} ${className}`} aria-hidden="true" />;
}

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  const Icon = diagonal ? ArrowUpRight : ArrowRight;
  return <Icon className="arrow-icon" strokeWidth={1.8} aria-hidden="true" />;
}

