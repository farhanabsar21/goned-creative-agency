import React from "react";

export default function OurService() {
  return (
    <div className="h-screen bg-primary py-[3rem] pl-[2rem]">
      <div className="h-full w-full">
        <div className="slider-container h-full w-full max-h-[calc(100vh-6rem)] grid grid-cols-2 overflow-hidden">
          <div className="slider-content h-full max-h-[calc(100vh-6rem)] py-[3rem] pr-[6rem] flex flex-col justify-between">
            <div>
              <h1 className="text-5xl capitalize">
                Designing innovative solutions to propel your business forward.
              </h1>
            </div>
            <div className="flex gap-12">
              <div>01</div>
              <div>Creative meets strategy</div>
            </div>
          </div>
          <div className="slider-images h-full w-[calc(100%-2rem)]">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
