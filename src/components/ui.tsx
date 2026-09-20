import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  tone = "plain",
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "plain" | "paper" | "olive";
}) {
  const tones = {
    plain: "bg-transparent",
    paper: "bg-paper/70",
    olive: "bg-olive text-cream",
  };

  return (
    <section
      id={id}
      tabIndex={-1}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 outline-none ${tones[tone]} ${className}`}
    >
      <div className="section-shell reveal">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-terra">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-3xl text-3xl font-bold leading-[1.35] text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-3xl text-lg text-ink-soft sm:text-xl">{children}</p>
  );
}
