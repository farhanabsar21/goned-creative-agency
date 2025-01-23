import RightArrow from "@/assets/icons/RightArrow";

export default function ForwardButton({ color }: { color: string }) {
  return (
    <button
      className={`h-[2.5rem] w-[7.25rem] flex items-center justify-center rounded-full border ${`${
        color === "black" ? "border-secondary" : `border-${color}`
      }`} relative`}
    >
      <div
        className={`h-[2.5rem] w-[3.25rem] flex items-center justify-center rounded-full border ${`${
          color === "black" ? "border-secondary" : `border-${color}`
        }`} border-r-0 absolute right-0`}
      >
        <RightArrow color={color} />
      </div>
    </button>
  );
}
