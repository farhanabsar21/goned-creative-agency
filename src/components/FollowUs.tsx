import { FollowUs as FollowUsType } from "@/@types";
import { followUsData } from "@/assets/data";
import PlayIcon from "@/assets/icons/PlayIcon";

export default function FollowUs() {
  return (
    <div className="bg-primary py-[2rem]">
      <div className="flex items-center justify-center pt-[1rem] pb-[2rem]">
        <h2 className="text-[3rem]">Follow Us</h2>
      </div>
      <div className="w-full">
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {followUsData.map((item: FollowUsType, index: number) => {
            return (
              <div
                key={index}
                className="flex-none w-[12.5rem] h-[12.5rem] bg-slate-300 relative"
              >
                <img
                  src={item.image}
                  alt="image"
                  className="w-[full] h-full object-cover"
                />
                {item.isPlayable && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3rem] h-[3rem] rounded-full bg-white z-20 flex items-center justify-center">
                    <PlayIcon />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
