import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseMessageColor, setResponseMessageColor] = useState("");

  const sendMessage = (element) => {
    element.preventDefault();

    emailjs.sendForm("service_b3dgvx3", "template_ojo9ju8", formRef.current, "i6ezC38-27ueEY_c4").then(
      ({ text }) => {
        setResponseMessageColor("green");
        setResponseMessage(`✅ Your Message Was Sent With Status : ${text}`);
      },
      (error) => {
        setResponseMessageColor("red");
        setResponseMessage(`❌ Your Message Was Not Sent Because ${error}`);
      }
    );

    element.target.reset();
  };

  useEffect(() => {
    const timer = setTimeout(() => setResponseMessage(""), 3000);

    return () => clearTimeout(timer);
  }, [responseMessage]);

  return (
    <section className="section-sm lg:pt-[250px]" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]" data-aos="zoom" data-aos-offset="400">
          <div className="flex-1 flex flex-col justify-center pl-8" data-aos="fade-down" data-aos-offset="500" data-aos-delay="400">
            <h2 className="h2 mb-3 lg:mb-7">Get in Touch With Us for Yoga Course.</h2>
            <p className="mb-7 lg:mb-0">Get in touch with us for any kind of help. We are here to give you the best and also here to help you to find your yoga course.</p>
          </div>
          <form ref={formRef} onSubmit={sendMessage} className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20" data-aos="fade-up" data-aos-offset="500" data-aos-delay="400">
            <input type="text" name="user_firstname" placeholder="First Name" className="form-control" required />
            <input type="text" name="user_lastname" placeholder="Last Name" className="form-control" required />
            <input type="email" name="user_email" placeholder="Email Address" className="form-control" required />
            <textarea name="user_message" placeholder="Message" className="form-control py-5 h-[165px] resize-none" />
            <button type="submit" className="btn btn-lg btn-orange">
              Send Message
            </button>
            <p style={{ color: responseMessageColor }}>{responseMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
