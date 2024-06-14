import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleSrcoll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleSrcoll);

    return () => {
      window.addEventListener("scroll", handleSrcoll);
    };
  });

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Products",
      path: "products",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "FAQ",
      path: "faq",
    },
  ];
  return (
    <div>
      <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ">
        <nav
          className={`py-4 lg:px-14 px-4 ${
            isSticky
              ? "stickey top-0 right-0 left-0  bg-white duration-300"
              : ""
          }`}
        >
          <div className="flex justify-between items-center text-base gap-8">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-4"
            >
              <img
                src={logo}
                className="w-10 inline-block items-center rounded-full"
                alt=""
              />
              <span className="text-[#263238]">Tailwind</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium cursor-pointer "
                >
                  {item.link}
                </Link>
              ))}
            </ul>

            <div className="space-x-12 hidden lg:flex items-center">
              <a
                href="/"
                className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900"
              >
                Login
              </a>
              <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
                Signup
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none  text-neutralDGrey focus:text-gray-500"
              >
                {isMenuOpen ? (
                  <FaXmark size={30} className="" />
                ) : (
                  <FaBars size={30} className="" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`space-y-4 px-4  mt-16 py-7 bg-brandPrimary ${
              isMenuOpen ? "block  fixed top-0 right-0 left-0" : "hidden "
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-white hover:text-brandPrimary first:font-medium cursor-pointer "
              >
                {item.link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}
