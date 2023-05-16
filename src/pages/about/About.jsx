import React from "react";
import hero1 from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content mx-12 gap-4 flex-col lg:flex-row lg:relative">
        <div className="lg:w-1/2">
          <div className="">
            <img
              src={hero1}
              alt=""
              className="max-w-md rounded-lg shadow-2xl"
            />
          </div>
          <div className="absolute -mt-[110px] ml-[230px]">
            <img
              src={parts}
              alt=""
              className="max-w-xs border-8 border-white rounded-lg shadow-2xl "
            />
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-4xl text-orange-500 font-bold">About us!</p>
          <p className="py-6 text-5xl font-bold">We are qualified & of experience in this field</p>

          <p className="py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-warning text-white my-4">Get Started</button>
        </div>

      </div>
    </div>
  );
};

export default About;
