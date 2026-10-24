// Decorative pattern derived from the Fidinda logo mark: nested square lines with openings.
type MazeProps = { className?: string; accent?: boolean };

export default function Maze({ className, accent = true }: MazeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="6">
        <path d="M10 10v180h180V30" />
        <path d="M30 30v140h140V50" />
        <path d="M150 190v-20" />
        <path d="M50 50v100h100v-60" />
        <path d="M70 150v-30h60" />
        <path d="M110 90h20v20" />
      </g>
      {accent && (
        <g stroke="var(--red)" strokeWidth="6">
          <path d="M10 10h180" />
          <path d="M50 30h120" />
          <path d="M70 50v50h40" />
        </g>
      )}
    </svg>
  );
}
