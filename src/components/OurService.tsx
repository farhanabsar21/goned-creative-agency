import { Slide } from "@/@types";
import { slides } from "@/assets/data";
import CircleIcon from "@/assets/icons/CircleIcon";
import DashIcon from "@/assets/icons/DashIcon";
import React, { useEffect, useState } from "react";

export default function OurService() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const getNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const onChangeSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isAnimating, getNextSlide]);

  return (
    <div className="h-screen bg-primary py-[3rem] px-[4rem]">
      <div className="h-full w-full">
        <div className="slider-container h-full w-full max-h-[calc(100vh-6rem)] grid grid-cols-2 overflow-hidden">
          <div className="slider-content max-h-[calc(100vh-6rem)] py-[3rem] pr-[6rem] flex flex-col justify-between">
            <div>
              <h1
                className="text-5xl capitalize transform transition-all duration-500 ease-out"
                style={{
                  transform: `translateY(${isAnimating ? "20px" : "0"})`,
                  opacity: isAnimating ? 0 : 1,
                }}
              >
                {slides[currentIndex].desc}
              </h1>
            </div>
            <div className="flex h-[38rem] items-end">
              <div className="w-[75%]">
                {slides.map((slide: Slide, index: number) => {
                  return (
                    <div key={index} className="flex gap-[8rem] p-3">
                      <div
                        className={`${
                          currentIndex === index ? "opacity-100" : "opacity-0"
                        } transform transition-all duration-500 ease-out`}
                        style={{
                          opacity: currentIndex === index ? 1 : 0,
                          transform:
                            currentIndex === index
                              ? "translateY(0)"
                              : "translateY(20px)",
                        }}
                      >{`0${index + 1}`}</div>
                      <div
                        className={`capitalize cursor-pointer ${
                          currentIndex === index
                            ? "opacity-100 underline"
                            : "opacity-50 no-underline"
                        }`}
                        onClick={() => onChangeSlide(index)}
                      >
                        {slide.title}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-[25%] flex items-center gap-2 p-3">
                {slides.map((_, index: number) => {
                  return (
                    <button
                      key={index}
                      className="w-[12px] h-[12px] flex items-center justify-center"
                      onClick={() => onChangeSlide(index)}
                    >
                      {currentIndex === index ? <CircleIcon /> : <DashIcon />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={`slide-${index}`}
                  className="h-full w-full flex-shrink-0"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
