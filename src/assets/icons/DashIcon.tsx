export default function DashIcon({ color }: { color: string }) {
  return (
    <svg
      width="8"
      height="1"
      viewBox="0 0 8 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="8" y2="0.5" stroke={color} />
    </svg>
  );
}
