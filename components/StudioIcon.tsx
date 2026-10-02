export function ClayIcon({ kind, className = "" }: { kind: "book" | "play" | "heart"; className?: string }) {
  return <span className={`clay-icon clay-${kind} ${className}`} aria-hidden="true" />;
}

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M5 12h14m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
