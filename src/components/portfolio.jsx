import React from "react";
import mongo from "../../public/mongodb.gif";
import node from "../../public/Nodejs.png";
import express from "../../public/express-js.png";
import reactjs from "../../public/reactjs.png";
import javaa from "../../public/javalogo.jpg";
import python from "../../public/python.webp";

const Portfolio = () => {
  const cardImages = [
    {
      id: 1,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: node,
      name: "Node Js",
    },
    {
      id: 3,
      logo: express,
      name: "Express Js",
    },
    {
      id: 4,
      logo: reactjs,
      name: "React Js",
    },
    {
      id: 5,
      logo: javaa,
      name: "javaa",
    },
    {
      id: 6,
      logo: python,
      name: "Python",
    },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <p className="underline font-semibold my-5">Featured Projects</p>
        <div className="grid grid-col-1 md:grid-cols-4 gap-5">
          {cardImages.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[250px] md:min-h-[280px] text-center rounded-lg shadow-xl cursor-pointer hover:scale-105 duration-300 flex flex-col items-center border-[1px] justify-center"
            >
              <img src={logo} className="h-[120px] w-[130px] p-1" alt="" />
              <div className="card border-2px">
                <h1 className="font-bold">{name}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, sed.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <button className="bg-black text-white my-2 border-r-2 p-2 rounded-lg">
                  Video
                </button>
                <button className="bg-yellow-500 block my-2 border-r-2 p-2 rounded-lg">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
