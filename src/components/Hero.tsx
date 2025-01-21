import { heroTitles } from "@/assets/data";
import CircleIcon from "@/assets/icons/CircleIcon";
import DashIcon from "@/assets/icons/DashIcon";
import useGeolocation from "@/hook/useGeoLocation";
import {
  getCurrentYear,
  getFormatTime,
  getLocation,
} from "@/utils/time-date-format";
import React, { useEffect, useMemo, useState } from "react";
import { color, punchline } from "./common/constant";
import { scrollDown } from "@/utils/scroll-down";

export default function Hero() {
  const [time, setTime] = useState<Date>(new Date());
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const { timezone, location } = useGeolocation();

  const formatTime = useMemo(
    () => getFormatTime(time, timezone),
    [time, timezone]
  );

  const getNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === heroTitles.length - 1 ? 0 : prevIndex + 1
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

  const onScrollDown = () => {
    scrollDown();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      getNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-screen max-h-[50rem] bg-secondary w-full relative z-1">
      <nav className="px-12 py-6 flex justify-between items-center">
        <div className="flex gap-[12rem] items-center">
          <h1 className="text-3xl font-bold text-white">goned</h1>
          <div className="flex gap-6">
            <span className="text-white opacity-90 w-[4.25rem]">
              {formatTime}
            </span>
            <span className="text-white">
              {location && getLocation(location)}
            </span>
          </div>
        </div>
        <div className="flex gap-[5rem]">
          <div className="text-white">About</div>
          <div className="text-white">Product</div>
        </div>
      </nav>
      <section className="h-[50%] px-12 py-6 flex justify-between gap-[5rem]">
        <div className="w-[40%]">
          <h1
            className="text-[5rem] capitalize text-white transform transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${isAnimating ? "20px" : "0"})`,
              opacity: isAnimating ? 0 : 1,
            }}
          >
            {heroTitles[currentIndex].title}
          </h1>
          <div className="flex items-center justify-center">
            <div className="w-[25%] flex items-center gap-2 p-3 mt-12">
              {heroTitles.map((_, index: number) => {
                return (
                  <button
                    key={index}
                    className="w-[12px] h-[12px] flex items-center justify-center"
                    onClick={() => onChangeSlide(index)}
                  >
                    {currentIndex === index ? (
                      <CircleIcon color={color.white} />
                    ) : (
                      <DashIcon color={color.white} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[30%] flex flex-col justify-between">
          <h1 className="text-white">{getCurrentYear()}</h1>
          <p className="w-[70%] text-white">{punchline}</p>
        </div>
      </section>
      <section
        className="absolute left-[4rem] bottom-[8rem] transform -rotate-90 cursor-pointer"
        onClick={onScrollDown}
      >
        <p className="text-white tracking-extra-wide opacity-80">scroll down</p>
      </section>
    </header>
  );
}
