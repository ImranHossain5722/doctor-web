import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundSize:'contain',
      backgroundPosition:'center'
    }}
    className="hero min-h-screen bg-white ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <button className="btn btn-secondary buttonGet text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
