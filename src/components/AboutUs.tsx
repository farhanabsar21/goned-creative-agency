import { cardData } from "@/assets/data";
import Card from "./common/Card";

export default function AboutUs() {
  return (
    <section className="z-2 relative">
      <div className="h-[10rem] bg-primary">
        <div className="flex absolute right-0 bottom-0">
          {cardData.map((data, index) => {
            return <Card card={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
