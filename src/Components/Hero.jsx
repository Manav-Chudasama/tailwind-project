import { Carousel } from "flowbite-react";
import React from "react";
import logo from "../assets/Logo.png";

export default function Hero() {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:mt-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full flex justify-center">
              <img src={logo} className="w-1/2 rounded-full" alt="" />
            </div>
            <div className="md:h-1/2 text-center md:text-start">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:3/4 leading-snug">
                Lessons and insights from
                <span className="text-brandPrimary leading-snug pl-4">
                  8 Years
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam, praesentium.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:mt-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full flex justify-center">
              <img src={logo} className="w-1/2 rounded-full" alt="" />
            </div>
            <div className="md:h-1/2 text-center md:text-start">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:3/4 leading-snug">
                Lessons and insights from
                <span className="text-brandPrimary leading-snug pl-4">
                  8 Years
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam, praesentium.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:mt-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full flex justify-center">
              <img src={logo} className="w-1/2 rounded-full" alt="" />
            </div>
            <div className="md:h-1/2 text-center md:text-start">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:3/4 leading-snug">
                Lessons and insights from
                <span className="text-brandPrimary leading-snug pl-4">
                  8 Years
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam, praesentium.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
