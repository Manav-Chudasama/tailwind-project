import React from "react";
import logo from "../assets/Logo.png";
import nice from "../assets/Logo.ico";
export default function About() {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/2 mx-auto flex flex-col items-center md:flex-row justify-between gap-12">
          <div className="flex justify-center items-center">
            <img className="w-[60%] rounded-full" src={logo} alt="" />
          </div>
          <div className="md:w-3/4 mx-auto">
            <h1 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              iste beatae quasi commodi rem laborum itaque alias, natus error?
              Amet fugiat repudiandae incidunt, sint tempore dolorem obcaecati
              beatae nam, soluta sed adipisci, veritatis natus cupiditate?
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="btn-primary">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Lorem ipsum dolor sit <br />
              <span className="text-brandPrimary">
                consectetur adipisicing.
              </span>
            </h1>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="md:1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-center gap-12">
            <div className="space-y-8">
              <div className="flex justify-center md:justify-start items-center gap-4">
                <img className="w-[10%]" src={nice} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    12,235,434
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-4">
                <img className="w-[10%]" src={nice} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    12,235,434
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex justify-center md:justify-start items-center gap-4">
                <img className="w-[10%]" src={nice} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    12,235,434
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-4">
                <img className="w-[10%]" src={nice} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    12,235,434
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
