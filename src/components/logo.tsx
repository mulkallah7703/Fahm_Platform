export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="44" height="44" rx="14" fill="#8B7CF6" />
      {/* Isolated Arabic ف: loop, left tail, and the distinguishing dot */}
      <circle cx="29" cy="14.2" r="2.35" fill="#0C0D14" />
      <path
        d="M29 19.6c4.7 0 8.2 3.4 8.2 8.1 0 4.8-3.5 8.3-8.2 8.3-2.1 0-3.9-.6-5.3-1.8"
        fill="none"
        stroke="#0C0D14"
        strokeWidth="3.15"
        strokeLinecap="round"
      />
      <path
        d="M23.8 32.6c-3.4 1.4-7.2 2.6-8.3 6.2"
        fill="none"
        stroke="#0C0D14"
        strokeWidth="3.15"
        strokeLinecap="round"
      />
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
        <span className="block font-sans text-xl font-bold text-ink sm:text-2xl">
          {wordmark}
        </span>
        <span className="block text-[0.7rem] font-semibold tracking-[0.18em] text-olive">
          {latin}
        </span>
      </span>
    </span>
  );
}
