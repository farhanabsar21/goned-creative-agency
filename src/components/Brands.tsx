import { BrandsLogo } from "@/assets/data";

export default function Brands() {
  return (
    <div className="overflow-hidden bg-primary p-[3rem] ">
      <div className="flex w-max animate-scroll">
        {[...BrandsLogo, ...BrandsLogo].map((logo, index) => {
          return (
            <div
              key={index}
              className="w-[20rem] h-[5rem] flex justify-center items-center"
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
