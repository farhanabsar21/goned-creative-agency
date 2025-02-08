import { BlogData } from "@/assets/data";
import Badge from "./common/Badge";
import { Blogs } from "@/@types";
import DollarIcon from "@/assets/icons/DollarIcon";
import RightArrow from "@/assets/icons/RightArrow";

export default function OurBlogs() {
  return (
    <div className="bg-primary p-[3rem]">
      <div>
        <Badge title="Blogs" />
        <h2 className="text-[3rem] capitalize mt-[1rem]">
          Our Insight and Blog
        </h2>
        <p className="mt-[1rem] text-secondary opacity-75">
          Take the guesswork out of compensation planning with our intuitive
          platform
        </p>
      </div>
      <div className="mt-[3rem]">
        {BlogData.map((blog: Blogs, index: number) => {
          const { title, company, value, date } = blog;
          return (
            <div
              key={index}
              className="flex gap-[6rem] border-t border-t-1 py-[2rem]"
            >
              <div>
                <div className="flex items-center w-[13.75rem]">
                  <span>
                    <DollarIcon />
                  </span>
                  <span className="text-[3rem] font-bold text-secondary">
                    {value}
                  </span>
                </div>
                <p className="text-secondary opacity-60">{company}</p>
              </div>
              <div className="flex gap-[8rem]">
                <div>
                  <p className="text-[2rem]">{title}</p>
                  <div className="flex items-center gap-[1rem] mt-[1.5rem] cursor-pointer">
                    <p>Learn more</p>
                    <p>
                      <RightArrow color="black" />
                    </p>
                  </div>
                </div>
                <div className="min-w-[12.5rem] flex items-center justify-center">
                  <p className="text-secondary opacity-70">{date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
