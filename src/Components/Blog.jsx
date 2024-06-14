import React from "react";
import logo from "../assets/Logo.png";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing. natus error? Amet fugiat repudiandae incidunt",
      img: logo,
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing. natus error? Amet fugiat repudiandae incidunt",
      img: logo,
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing. natus error? Amet fugiat repudiandae incidunt",
      img: logo,
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h1 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iste
          beatae quasi commodi rem laborum itaque alias, natus error? Amet
          fugiat repudiandae incidunt, sint tempore dolorem obcaecati beatae
          nam, soluta sed adipisci, veritatis natus cupiditate?
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <div className="flex justify-center">
              <img
                src={blog.img}
                className="w-[85%] hover:scale-95 transition-all duration-300 rounded-lg"
                alt=""
              />
            </div>
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h1 className="font-semibold text-neutralDGrey">{blog.title}</h1>
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
        ))}
      </div>
    </div>
  );
}
