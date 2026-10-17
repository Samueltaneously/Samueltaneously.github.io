type GitHubIconProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
};

export function GitHubIcon({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
}: GitHubIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      role="img"
      aria-label="GitHub"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.9C5.85 0.9.9 5.85.9 12c0 4.9 3.18 9.06 7.59 10.53.55.1.75-.24.75-.53v-2.07c-3.09.67-3.74-1.32-3.74-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.61 1.21 3.24.92.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.23-5.08 5.5.4.35.76 1.03.76 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 23.1 12C23.1 5.85 18.15.9 12 .9Z"
      />
    </svg>
  );
}
