import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { icons } from "../constant/Icons";

const { MdEmail } = icons;

function Newsletter() {
  const formRef = useRef(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseMessageColor, setResponseMessageColor] = useState("");

  const sendMessage = (element) => {
    element.preventDefault();

    emailjs.sendForm("service_b3dgvx3", "template_hhlw0s9", formRef.current, "i6ezC38-27ueEY_c4").then(
      () => {
        setResponseMessageColor("white");
        setResponseMessage(`✅ Your Subscription Is Success`);
      },
      (error) => {
        setResponseMessageColor("red");
        setResponseMessage(`❌ Your Subscription Is Failed Because ${error}`);
      }
    );

    element.target.reset();
  };

  useEffect(() => {
    const timer = setTimeout(() => setResponseMessage(""), 3000);

    return () => clearTimeout(timer);
  }, [responseMessage]);

  return (
    <section className="section-sm lg:section-lg bg-green min-h-[520px]">
      <div className="container mx-auto">
        <div className="border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-[12px]" data-aos="fade-up" data-aos-offset="300" data-aos-delay="400">
          <h4 className="text-[24px] text-white font-bold mb-[14px]" data-aos="fade-up" data-aos-offset="300" data-aos-delay="600">
            Subscribe Our Newsletter
          </h4>
          <p className="text-green-200 mb-12" data-aos="fade-up" data-aos-offset="300" data-aos-delay="800">
            Subscribe our newsletter for further updates about us
          </p>
          <form ref={formRef} onSubmit={sendMessage} className="max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 lg:p-0 gap-x-4 p-4" data-aos="fade-up" data-aos-delay="1000">
            <div className="w-full relative flex">
              <div className="absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300">
                <MdEmail />
              </div>
              <input type="email" name="user_email" className="form-control w-full border border-green-300 bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]" placeholder="Enter Your Email Address" />
            </div>
            <button type="submit" className="btn btn-lg btn-orange text-white w-full lg:max-w-[180px]">
              Get Started
            </button>
          </form>
          <p style={{ color: responseMessageColor, marginTop: "20px" }}>{responseMessage}</p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
