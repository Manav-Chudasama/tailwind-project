import React from "react";
import logo from "../assets/Logo.ico";
import nice from "../assets/nice.webp";
export default function Services() {
  const cards = [
    {
      id: 1,
      title: "Membership Organization",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus.",
      img: logo,
    },
    {
      id: 2,
      title: "Membership Organization",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus.",
      img: logo,
    },
    {
      id: 3,
      title: "Membership Organization",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus.",
      img: logo,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img className="h-14" src={logo} alt="" />
          <img className="h-14" src={logo} alt="" />
          <img className="h-14" src={logo} alt="" />
          <img className="h-14" src={logo} alt="" />
          <img className="h-14" src={logo} alt="" />
          <img className="h-14" src={logo} alt="" />
        </div>
      </div>
      <div className="mt-20 w-2/3 md:1/2 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralDGrey">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-4 hover:border-b-4 hover:border-indigo-700 duration-300 transition-all flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img className="-ml-5" src={card.img} alt="" />
              </div>
              <h1 className="text-2xl font-bold text-neutralDGrey px-2">
                {card.title}
              </h1>
              <p className="text-sm text-neutralGrey">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
