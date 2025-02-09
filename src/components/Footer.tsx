import DiscordIcon from "@/assets/icons/DiscordIcon";
import DribbbleIcon from "@/assets/icons/DribbbleIcon";
import RightArrow from "@/assets/icons/RightArrow";
import ThreadsIcon from "@/assets/icons/ThreadsIcon";
import TopArrowIcon from "@/assets/icons/TopArrowIcon";
import VKIcon from "@/assets/icons/VKIcon";
import { scrollToTop } from "@/utils/scroll-top";

const listItems = [
  {
    title: "About",
  },
  {
    title: "Product",
  },
  {
    title: "Services",
  },
  {
    title: "Career",
  },
  {
    title: "Contact",
  },
];

export default function Footer() {
  const onScrollTop = () => {
    scrollToTop();
  };
  return (
    <footer className="bg-secondary p-[3rem]">
      <div className="flex justify-between border-b border-b-white border-opacity-60 pb-[6rem]">
        <div className="w-[50%]">
          <div>
            <h1 className="text-3xl font-bold text-white">goned</h1>
          </div>
          <div>
            <h1 className="text-[5rem] text-white mt-[1rem]">
              Optimize Every Compensation
            </h1>
            <div className="relative w-[25rem] mt-[1.5rem]">
              <input
                type="text"
                className="w-full placeholder-white text-white border-b border-b-white p-3 bg-transparent outline-0"
                placeholder="GET STARTED"
              />
              <span className="absolute right-0 top-3">
                <RightArrow color="white" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex gap-[8rem]">
            <ul className="flex flex-col gap-8">
              {listItems.map((list, index) => {
                return (
                  <li
                    key={index}
                    className="list-item text-white cursor-pointer"
                  >
                    {list.title}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col justify-between">
              <div className="flex gap-6">
                <span className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center">
                  <DiscordIcon />
                </span>
                <span className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center">
                  <VKIcon />
                </span>
                <span className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center">
                  <DribbbleIcon />
                </span>
                <span className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center">
                  <ThreadsIcon />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-[8rem] h-[2rem] flex items-center justify-center border border-white border-opacity-70 rounded-full text-white opacity-70 text-center">
                  Back to top
                </div>
                <span
                  className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center cursor-pointer"
                  onClick={onScrollTop}
                >
                  <TopArrowIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[2rem] flex items-center justify-between">
        <div className="text-white opacity-70">
          &#169;2025 All RIGHTS RESERVED
        </div>
        <div className="flex items-center justify-between gap-[6rem] text-white opacity-70">
          <span>TERMS & CONDITION</span>
          <span>PRIVACY POLICY</span>
        </div>
      </div>
    </footer>
  );
}
