import { cardData, StatData } from "@/assets/data";
import Card from "./common/Card";

export default function AboutUs() {
  return (
    <section className="bg-primary border border-b-gray-300">
      <div className="z-2 relative">
        <div className="h-[10rem]">
          <div className="flex absolute right-0 bottom-0">
            {cardData.map((data, index) => {
              return <Card card={data} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[30rem_1fr] mt-[3rem] p-[4rem]">
        <div className="w-[30rem]">
          <p className="text-secondary w-[15rem]">
            Take the guesswork out of compensation planning with our intuitive
            platform
          </p>
        </div>
        <div className="-mt-[1.5rem]">
          <div>
            <p className="text-[3.5rem] text-secondary">
              Make data-driven decisions with real-time insights and ensure
              every reward aligns with your business objectives.
            </p>
            <p className="text-secondary opacity-70 mt-[2.5rem]">
              Gone are the days of complex spreadsheets and manual processes.
              Simplify compensation planning with a single platform that puts
              you in control of every decision.
            </p>
          </div>
          <div className="mt-[3rem] flex gap-[5rem]">
            {StatData.map((stat, index) => {
              return (
                <div key={index}>
                  <p className="text-[4rem]">{stat.value}</p>
                  <p className="mt-[1rem] opacity-60">{stat.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
