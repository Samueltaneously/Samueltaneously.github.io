
type SMonogramProps = {
  size?: number;
  fontWeight?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
};

export function SMonogram({
  size = 32,
  fontWeight = 500,
  strokeWidth,
  color = "#A78BFA",
  backgroundColor = "#111019",
  className = "",
}: SMonogramProps) {
  const weight = strokeWidth ?? fontWeight / 200;

  return (


    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label="Samuel developer logo"
      className={`shrink-0 ${className}`}
    >
      {/* Rounded container */}
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill={backgroundColor}
        stroke={color}
        strokeOpacity="0.22"
        strokeWidth="1"
      />

      {/* Left code chevron, connected to the bottom of S */}
      <path
        d="M12 16.5 L8.5 20 L12 23.5"
        stroke={color}
        strokeWidth={Math.max(1.5, weight * 0.9)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right code chevron, connected to the top of S */}
      <path
        d="M28 16.5 L31.5 20 L28 23.5"
        stroke={color}
        strokeWidth={Math.max(1.5, weight * 0.9)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* S monogram with integrated bracket connections */}
      <path
        d="
          M28 16.5
          C26.5 14.3 23.7 13.5 20.2 13.5
          C16.8 13.5 15 15 15 17
          C15 19 17 19.5 20.1 20.2
          C23.2 20.9 25 21.7 25 23.7
          C25 25.8 22.9 26.7 19.8 26.7
          C16.8 26.7 14.1 25.8 12 23.5
        "
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>


  );
}
