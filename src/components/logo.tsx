export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="14"
        fill="#24382D"
      />
      <path
        d="M15 33V15h11.4c4.4 0 7.1 2.4 7.1 6.1 0 2.6-1.5 4.6-4 5.5L34 33h-4.2l-4.1-6.1H19.2V33H15Zm4.2-9.7h6.6c2.2 0 3.5-1.1 3.5-2.9s-1.3-2.8-3.5-2.8h-6.6v5.7Z"
        fill="#FBF6EE"
      />
      <circle cx="36.2" cy="13.2" r="2.2" fill="#B8924A" />
    </svg>
  );
}

export function BrandLockup({
  compact = false,
  wordmark,
  latin,
}: {
  compact?: boolean;
  wordmark: string;
  latin: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className={compact ? "size-9" : "size-11"} />
      <span className="leading-tight">
        <span className="font-display block text-xl font-bold text-olive sm:text-2xl">
          {wordmark}
        </span>
        <span className="block text-[0.7rem] font-semibold tracking-[0.18em] text-olive-mid">
          {latin}
        </span>
      </span>
    </span>
  );
}
