import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="Home">
      <div className="max-w-screen-2xl container px-4 md:px-24 mt-24">
        <div className="flex flex-col text-center md:text-start md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-15 order-2 md:order-1">
            {/* //left div */}
            <span>Welcome In my Feed</span>
            <div className="flex space-x-1 flex-row text-2xl md:text-4xl text-center justify-center md:justify-start">
              <h1>Hello I'm a </h1> 
              <ReactTyped className="text-red-700"
          strings={["Developer.", "Programmer.", "Coder."]}
          typeSpeed={200}
        />
            </div>
            <p className="text-sm md:text-md text-justify mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sint
              inventore quas tempore, corrupti officia sunt ea culpa veritatis
              fugit hic iste corporis ab similique distinctio mollitia libero
              eveniet provident. Est molestiae numquam veniam placeat at magnam.
              Voluptatem autem odio nisi laborum modi reiciendis? Voluptas nihil
              ab incidunt rem perspiciatis?
            </p>
            {/* social media Icons  */}
            <div className="sm:flex-row md:flex my-10">
              <div className="text-sm md:w-1/2 sm:w-full md:text-md font-bold my-6 text-center items-center md:text-start">
               <p className="text-lg">Available On</p>
                <div className="flex space-x-6 mx-auto justify-center md:justify-start my-2">
                  <i className="cursor-pointer">
                    <FaFacebook className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                  </i>
                  <i className="cursor-pointer">
                    <FaLinkedin className="cursor-pointer text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                  </i>
                  <i className="cursor-pointer">
                    <FaYoutube className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                  </i>
                  <i className="cursor-pointer">
                    <FaInstagram className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                  </i>
                </div>
              </div>
              <div className="md:w-1/2 sm:w-full text-sm md:text-md font-bold my-6 text-center md:text-end">
                <p className="text-lg">Currently working on</p>
                <div className="flex space-x-6 mx-auto justify-center md:justify-end">
                  <ul className="flex space-x-6 md:justify-end my-2">
                    <li>
                      {" "}
                      <i>
                        <SiMongodb className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                      </i>
                    </li>
                    <li>
                      <i>
                        <SiExpress className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                      </i>
                    </li>
                    <li>
                      <i>
                        <FaReact className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                      </i>
                    </li>
                    <li>
                      {" "}
                      <i>
                        <FaNodeJs className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* right div  */}
          <div className="md:w-1/2 text-center order-1 md:order-2">
            <div className="md:w-80 bg-gradient-to-r from-yellow-50 to-indigo-600 rounded-full mx-auto mt-4">
              <img
                src="src\assets\pngtree-masked-hackers-png-image_3290675-Photoroom.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
