export default function Badge({ title }: { title: string }) {
  return (
    <div
      className={`max-w-[8rem] px-[1.25rem] py-[0.125rem] bg-lightGreen flex items-center justify-center rounded-full text-sm`}
    >
      {title}
    </div>
  );
}
