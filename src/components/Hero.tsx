import useGeolocation from "@/hook/useGeoLocation";
import { getFormatTime, getLocation } from "@/utils/time-date-format";
import React, { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState<Date>(new Date());

  const { timezone, location } = useGeolocation();

  const formatTime = useMemo(
    () => getFormatTime(time, timezone),
    [time, timezone]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-screen bg-secondary w-full">
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
    </header>
  );
}
