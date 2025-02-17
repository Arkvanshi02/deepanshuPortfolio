import React from "react";
import angular from "../../public/angular.webp";
import bootstrap from "../../public/bootstrap.jpg";
import css from "../../public/css.avif";
import html from "../../public/html.jpg";
import js from "../../public/js.webp";
import tailwind from "../../public/tailwind.png";

const Experience = () => {
  const cardImages = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: css,
      name: "Css",
    },
    {
      id: 3,
      logo: js,
      name: "Java Script",
    },
    {
      id: 4,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 5,
      logo: tailwind,
      name: "Tailwind Css",
    },
    {
      id: 6,
      logo: angular,
      name: "Angular Js",
    },
  ];

  return (
    <div name="Experience" id="Experience">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-5">Experience</h1>
          <p className="underline font-semibold my-5">
            I have More than a Year of Experience as a Junior Developer.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {cardImages.map(({ id, logo, name }) => (
              <div
                key={id}
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-center rounded-full shadow-xl cursor-pointer hover:scale-105 duration-300 flex flex-col items-center border-[1px] justify-center"
              >
                <img src={logo} className="h-[100px] w-[100px] p-1" alt="" />
                <div className="card border-2px">
                  <h1 className="font-bold">{name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
