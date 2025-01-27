import { CardProps } from "@/@types";
import { cardBackgroundURI } from "./constant";
import ForwardButton from "./ForwardButton";
import LayersIcon from "@/assets/icons/LayersIcon";
import QuoteRightIcon from "@/assets/icons/QuoteRightIcon";

export default function Card({ card }: CardProps) {
  switch (card.type) {
    case "solid":
      return (
        <div className={`h-[26rem] w-[22rem] p-[2rem] bg-lightGreen relative`}>
          <div className="absolute left-5 top-5 h-[3.5rem] w-[3.5rem] bg-secondary flex justify-center items-center rounded-full">
            <LayersIcon />
          </div>
          <div className="w-[50%] mt-[6rem]">
            <p className="text-4xl font-medium text-secondary">{card.title}</p>
          </div>
          <div className="absolute bottom-6 right-6">
            <ForwardButton color="black" />
          </div>
        </div>
      );
    case "image":
      return (
        <div
          className="h-[26rem] w-[22rem] p-[3rem] bg-center bg-no-repeat bg-cover relative"
          style={{
            backgroundImage: `url(${
              card.backgroundImage || cardBackgroundURI
            })`,
          }}
        >
          <div className="absolute bottom-6 right-6">
            <ForwardButton color="white" />
          </div>
        </div>
      );
    case "testimonial":
      return (
        <div className="h-[26rem] w-[22rem] bg-gonedSoil p-6 relative">
          <div className="h-[3rem] w-[3rem] rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={card.userImage}
              alt="image"
            />
          </div>
          <div className="mt-6">
            <p className="text-3xl capitalize font-medium text-secondary">
              "{card.quote}"
            </p>
          </div>
          <div className="absolute left-6 bottom-6 w-[7.5rem]">
            <p className="text-secondary">{card.designation}</p>
            <p className="text-xl font-medium text-secondary">{card.name}</p>
          </div>
          <div className="absolute right-6 bottom-6 w-[3rem] h-[3rem] bg-secondary rounded-full flex items-center justify-center">
            <QuoteRightIcon />
          </div>
        </div>
      );
    default:
      return null;
  }
}
