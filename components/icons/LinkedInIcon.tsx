type LinkedInIconProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
};

export function LinkedInIcon({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
}: LinkedInIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      role="img"
      aria-label="LinkedIn"
    >
      <path
        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.96V9.14h2.97v9.56ZM6.45 7.83a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.25 10.87h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.42V9.14h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.56v5.24Z"
      />
    </svg>
  );
}
