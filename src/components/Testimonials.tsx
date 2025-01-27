import { useState } from "react";
import { customerFeedbacks } from "@/assets/data";
import QuoteRightIcon from "@/assets/icons/QuoteRightIcon";
import StarIcon from "@/assets/icons/StarIcon";
import LeftDirectionIcon from "@/assets/icons/LeftDirectionIcon";
import RightDirectionIcon from "@/assets/icons/RightDirectionIcon";
import greenBg from "@/assets/images/green_meeting.jpg";

export default function Testimonials() {
  const [currentTestimonialIndex, setTestimonialIndex] = useState<number>(0);
  const reviewData = customerFeedbacks[currentTestimonialIndex];

  const onNextReview = () => {
    setTestimonialIndex((prev: number) => {
      if (prev < customerFeedbacks.length - 1) {
        prev++;
      }
      return prev;
    });
  };

  const onPrevReview = () => {
    setTestimonialIndex((prev: number) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const getProgressWidth = () => {
    return ((currentTestimonialIndex + 1) / customerFeedbacks.length) * 100;
  };

  return (
    <div className="p-[3rem] bg-primary">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[8rem] h-[1.5rem] bg-lightGreen flex items-center justify-center rounded-full text-sm">
          Testimonials
        </div>
        <div className="text-[3rem] capitalize mt-[1.5rem]">
          Our happy customers say
        </div>
      </div>
      <div
        className="h-[35rem] w-full mt-[3rem] flex items-center justify-center"
        style={{
          background: `url(${greenBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[27rem] w-[25rem] bg-primary p-6 relative">
          <div className="h-[2.5rem] w-[2.5rem] rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={reviewData.image}
              alt="image"
            />
          </div>
          <div className="absolute right-6 top-7 flex gap-3">
            {Array.from({ length: reviewData.rating }, (_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
          <div className="mt-6">
            <p className="text-3xl capitalize font-medium text-secondary">
              {reviewData.review}
            </p>
          </div>
          <div className="absolute left-6 bottom-6">
            <p className="text-secondary">{reviewData.title}</p>
            <p className="text-lg font-medium text-secondary">
              {reviewData.name}
            </p>
          </div>
          <div className="absolute right-6 bottom-6 w-[3rem] h-[3rem] bg-secondary rounded-full flex items-center justify-center">
            <QuoteRightIcon />
          </div>
        </div>
      </div>
      <div className="mt-[2rem] flex gap-6 items-center">
        <div className="flex items-center gap-6">
          <button
            className="cursor-pointer disabled:opacity-50"
            onClick={onPrevReview}
            disabled={currentTestimonialIndex === 0}
          >
            <LeftDirectionIcon />
          </button>
          <button
            className="cursor-pointer disabled:opacity-50"
            onClick={onNextReview}
            disabled={currentTestimonialIndex === customerFeedbacks.length - 1}
          >
            <RightDirectionIcon />
          </button>
        </div>
        <div className="h-[1px] bg-slate-200 w-full relative">
          <div
            className="absolute h-[1px] bg-secondary left-0 top-0"
            style={{ width: `${getProgressWidth()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
