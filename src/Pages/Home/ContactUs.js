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
            className="input input-bordered w-full max-w-md"
        
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-md"
          />
          <textarea className="textarea"     rows={6}  placeholder="Your message"></textarea>
          
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
