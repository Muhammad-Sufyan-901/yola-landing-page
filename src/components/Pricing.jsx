import React, { useState } from "react";
import { icons } from "../constant/Icons";
import { pricing } from "../constant/data";

const { BsCheck, BsChevronRight } = icons;

function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <section className="section-sm lg:section-lg bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-7 lg:mb-[70px]">
          <h2 className="h2 mb-3 lg:mb-[18px]" data-aos="fade-up" data-aos-delay="600">
            Pick a Pricing Plan
          </h2>
          <p className="max-w-[398px] mx-auto" data-aos="fade-up" data-aos-delay="700">
            Pick a pricing plan and get started your journey with us for build your body and mind
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mx-auto items-center gap-y-5 lg:gap-x-[33px]">
          {pricing.map(({ title, price, list, delay }, index) => (
            <div onClick={() => setCurrentIndex(index)} key={index} className="bg-white w-full max-w-[398px] min-h-[668px] h-full cursor-pointer relative" data-aos="fade-up" data-aos-offset="400" data-aos-delay={delay}>
              <div className={`${currentIndex === index ? "bg-orange text-white" : "bg-white text-heading"} text-center pt-[70px] pb-[34px] border-b border-stroke-3 transition`}>
                <div className="text-[24px] font-medium mb-[10px]">{title}</div>
                <div className="text-[34px] font-semibold">{price}</div>
              </div>
              <div className="px-[30px] pt-[18px] pb-[30px]">
                <p className="text-center mb-6 text-sm">Discover Your Favorite Class!</p>
                <ul className="flex flex-col gap-3 mb-10">
                  {list.map((item, index) => (
                    <li key={index} className="border border-stroke-3 p-4 rounded-md flex items-center gap-4 hover:bg-orange hover:text-white transition">
                      <BsCheck className="flex justify-center items-center bg-green-100 text-green-300 w-7 h-7 text-2xl rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-[30px] left-0 right-0 w-full px-[30px] group">
                  <button className={`${currentIndex === index ? "bg-orange text-white" : "border-orange"} w-full h-[50px] rounded border border-orange flex items-center justify-center text-orange font-medium transition relative`}>
                    Book Now
                    <div className={`${currentIndex === index ? "bg-orange-200" : "bg-orange"} w-[50px] h-[50px] flex justify-center items-center absolute right-0 rounded text-white`}>
                      <BsChevronRight className="group-hover:translate-x-1 transition" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
