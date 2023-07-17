import React from "react";
import { cards } from "../constant/data";

const {
  card1And2,
  card3: { img, title, desc, number, delay },
} = cards;

function Cards() {
  return (
    <section className="bg-cardsBg min-h-[260px] pb-[55px] lg:-mt-24" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1600">
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]">
        <div className="flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[38px] z-10 lg:-mt-[77px] mx-auto">
          {card1And2.map(({ img, title, number, delay }, index) => (
            <div key={index} className={`${index === 0 ? "max-h-[282px]" : ""} bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md`} data-aos-delay={delay} data-aos="fade-up">
              <div className="flex items-center mb-[18px] lg:mb-[28px]">
                <h4 className="text-md sm:text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">{title}</h4>
                <h2 className="h2 text-stroke-2">{number}</h2>
              </div>
              <div>
                <img src={img} alt="Cards Pics" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white w-full flex-1 max-w-[542px] mx-auto p-[14px] lg:p-[26px] mt-4 lg:-mt-[77px] z-10 shadow-2xl rounded-md flex justify-between items-start" data-aos-delay={delay} data-aos="fade-up">
          <div className="max-w-[240px] w-[95%] mr-2 lg:mr-0">
            <div className="flex items-center mb-4 lg:mb-8">
              <h4 className="text-md sm:text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">{title}</h4>
              <h2 className="h2 text-stroke-2">{number}</h2>
            </div>
            <p className="mb-4 lg:mb-3">{desc}</p>
            <a href="/#" className="text-xs lg:text-sm font-bold uppercase text-heading">
              Read More
            </a>
          </div>
          <div>
            <img src={img} alt="Cards Pics" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
