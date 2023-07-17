import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { facts } from "../constant/data";
import { images } from "../constant/Images";

const { JohnCena } = images;

function Facts() {
  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]">
        <div className="flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]">
          {facts.map(({ title, unit, desc, startNumber, endNumber, delay }, index) => (
            <div key={index} className="w-[45%]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay}>
              <h2 className="h2 mb-2 lg:mb-4">
                <CountUp start={startNumber} end={endNumber} duration={2}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
                {unit}+
              </h2>
              <div className="text-xl font-bold text-heading mb-3">{title}</div>
              <p className="max-w-[240px]">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 -order-1 lg:order-none">
          <div className="flex flex-col justify-center h-full lg:pl-[100px]">
            <h2 className="h2 mb-12 max-w-[295px] md:max-w-none" data-aos="fade-down" data-aos-delay="500">
              Relax And Enjoy a Personalized Day Yoga With Us.
            </h2>
            <div className="mb-2" data-aos="fade-down" data-aos-delay="600">
              <img src={JohnCena} alt="Facts Pics" />
            </div>
            <div className="text-lg mb-6 font-bold text-heading" data-aos="fade-down" data-aos-delay="700">
              John Cena <span className="text-base text-paragraph font-normal">/ Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facts;
