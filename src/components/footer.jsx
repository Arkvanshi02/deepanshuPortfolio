import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div>
        <hr className="mt-4" />
        <footer className="py-12">
          <div className="md:w-full sm:w-full text-sm font-bold my-6 text-center">
            <div className="flex space-x-6 mx-auto justify-center">
              <ul className="flex space-x-6 md:justify-end my-2">
                <li>
                  {" "}
                  <i>
                    <FaFacebook className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                  </i>
                </li>
                <li>
                  <i>
                    <FaTwitter className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                  </i>
                </li>
                <li>
                  <i>
                    <FaInstagram className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                  </i>
                </li>
                <li>
                  {" "}
                  <i>
                    <FaLinkedin className="cursor-pointer  text-2xl md:text-3xl hover:scale-150 duration-300 rounded-full border-[2px]" />
                  </i>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-full sm:w-full text-sm md:text-md font-bold my-6 text-center">
          <h1>&copy; 2025. All rights reserved</h1>
          <p>Supportive Partner <span className="text-red-600">&#10084;</span> Deepanshu</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
