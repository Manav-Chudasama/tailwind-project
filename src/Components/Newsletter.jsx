import React from "react";

export default function Newsletter() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex justify-center items-center md:w-2/4 mx-auto">
        <div className="text-center">
          <h1 className="lg:text-5xl text-3xl text-neutralDGrey font-semibold mb-6 lg:leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <button className="btn-primary">Get a Demo {"-->"}</button>
        </div>
      </div>
    </div>
  );
}
