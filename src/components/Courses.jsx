import React from "react";
import { courses } from "../constant/data";

function Courses() {
  return (
    <section className="section-sm lg:section-lg" id="courses">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-32">
          <h2 className="h2 mb-3 lg:mb-[18px]" data-aos="fade-down" data-aos-delay="300">
            Popular Courses
          </h2>
          <p className="max-w-[480px] mx-auto" data-aos="fade-down" data-aos-delay="400">
            Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself. We are providing the best.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14">
          {courses.map(({ image, title, desc, link, stars, delay }, index) => (
            <div key={index} className="w-full bg-white hover:shadow-primary max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[]14px] mx-auto transition" data-aos="fade-up" data-aos-delay={delay}>
              <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                <img src={image} alt="Courses Pics" />
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">{title}</h4>
                <p>{desc}</p>
              </div>
              <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
                <div className="flex text-orange gap-x-2">
                  {stars.map((Star, index) => (
                    <Star key={index} />
                  ))}
                </div>
                <a href={link} className="font-medium">
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-sm btn-orange" data-aos="fade-up" data-aos-delay="600">
            Browse All
          </button>
        </div>
      </div>
    </section>
  );
}

export default Courses;
