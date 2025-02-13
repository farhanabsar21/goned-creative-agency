export default function RightArrow({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4141 10.586L13.1211 6.29297L11.7071 7.70697L15.0001 11H5.00012V13H15.0001L11.7071 16.293L13.1211 17.707L17.4141 13.414C17.7891 13.0389 17.9997 12.5303 17.9997 12C17.9997 11.4696 17.7891 10.961 17.4141 10.586Z"
        fill={color}
      />
    </svg>
  );
}
