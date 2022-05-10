import React from "react";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section
      className="mb-20 pb-20"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className=" text-center p-12">
        <h4 className=" text-xl text-primary font-bold">Contact Us</h4>
        <h1 className="text-5xl text-white">Stay connected with us </h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="form-control w-full max-w-xs gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea className="textarea" placeholder="Your message"></textarea>
          <input
            type="Submit"
            value="Submit"
            className="input input-bordered w-50"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
