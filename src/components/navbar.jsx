import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menus = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 right-0 bg-white shadow-md z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center h-20">
        {/* Logo & Name */}
        <div className="flex space-x-3 items-center">
          <img
            src="/src/assets/pngtree-masked-hackers-png-image_3290675-Photoroom.png"
            className="h-16 w-16"
            alt="Logo"
          />
          <div>
            <h1 className="font-semibold text-lg cursor-pointer">
              Deepanshu Arkvanshi
            </h1>
            <p className="font-semibold text-sm cursor-pointer">
              Web Developer
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menus.map(({ id, text }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-blue-600 transition duration-300"
            >
              <Link to={text} smooth={true} offset={-70} duration={500} activeClass="active">
              {text}
              </Link>
            </li>
          ))} 
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer z-[100]"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <GiHamburgerMenu size={28} /> : <TiThMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */} 
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out z-[1000] ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <div
          className="absolute top-5 right-5 cursor-pointer z-[1100]"
          onClick={() => setMenu(false)}
        >
          <MdOutlineClose size={32} />
        </div>

        {/* Menu Items */}
        <ul className="text-lg">
          {menus.map(({ id, text }) => (
            <li
              key={id}
              className="py-3 cursor-pointer hover:text-blue-600 transition"
            >
              <Link to={text} onClick={() => setMenu(!menu)} offset={-70} duration={700} activeClass="active">
              {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
