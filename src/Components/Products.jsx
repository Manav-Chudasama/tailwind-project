import React from "react";
import nice from "../assets/Logo.ico";
import logo from "../assets/Logo.png";
export default function Products() {
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
          <div className="md:w-1/3 flex justify-center">
            <img src={logo} className="w-[80%]" alt="" />
          </div>
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-justify text-sm text-neutralGrey mb-8 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                alias id ad mollitia magnam delectus est officiis quam eligendi
                commodi consectetur, necessitatibus a illo, suscipit ipsa magni
                cum ratione. Libero nostrum, natus eos magni culpa odit alias
                quo? Ducimus quibusdam debitis beatae ipsam, eveniet consectetur
                praesentium esse nihil exercitationem vel veniam dignissimos
                odit cupiditate temporibus tempore, eos quasi asperiores earum
                perferendis repellendus maiores reprehenderit! Iste accusamus
                eveniet maxime perspiciatis beatae unde molestias provident at
                velit voluptatibus nobis incidunt perferendis qui libero
                eligendi dolor, nam tempora odit sapiente? Laudantium quisquam
                fugit, illo quia cumque ab nostrum consequuntur id dicta odit
                illum!
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Manav Chudasama
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                Lorem ipsum dolor sit amet.
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    className="cursor-pointer w-[10%] md:w-[5%]"
                    src={nice}
                    alt=""
                  />
                  <img
                    className="cursor-pointer w-[10%] md:w-[5%]"
                    src={nice}
                    alt=""
                  />
                  <img
                    className="cursor-pointer w-[10%] md:w-[5%]"
                    src={nice}
                    alt=""
                  />
                  <img
                    className="cursor-pointer w-[10%] md:w-[5%]"
                    src={nice}
                    alt=""
                  />
                  <img
                    className="cursor-pointer w-[10%] md:w-[5%]"
                    src={nice}
                    alt=""
                  />
                  <img
                    className="cursor-pointer w-[10%] md:w-[5%]"
                    src={nice}
                    alt=""
                  />
                  <div>
                    <a
                      href=""
                      className="font-bold text-brandPrimary hover:text-neutralDGrey"
                    >
                      Meet me Now!!! {"-->"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
