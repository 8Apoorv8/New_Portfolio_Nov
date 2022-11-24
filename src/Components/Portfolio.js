import React from "react";
import { portData } from "../Api's/PortfolioApi";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { motion as m } from "framer-motion";
const Portfolio = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.65, ease: "easeOut", staggerChildren: 0.5 }}
      exit={{ opacity: 1, y: "100%" }}
      className="PORTFOLIO bg-lime-200 absolute top-0 w-full max-h-max md:h-full -z-20 p-8  md:px-10 lg:px-20 "
    >
      <div className="text-2xl font-semibold text-center mt-24 overflow-hidden">
        <m.h1
          initial={{ y: "100%" }}
          animate={{ y: "0" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          PORTFOLIO
        </m.h1>
      </div>
      <h1 className="text-center mt-4 text-gray-700 hidden md:block">
        These are some of the proects which i have done and are live and
        running. Some small changes i keep doing in these projects.
      </h1>
      <h2 className="text-center mb-4 text-gray-700 hidden md:block">
        Other projects are in progress and still on working.
      </h2>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4"
      >
        {portData.map(({ id, img, demo, git }) => (
          <div key={id} className=" grid place-content-center ">
            <h1>{img}</h1>
            <div className="flex ">
              <button className="px-6 py-2 font-semibold hover:scale-105 flex-1">
                <a href={demo} target="__blank" className="">
                  Demo
                </a>
              </button>
              <button className="px-6 py-2 font-semibold hover:scale-105 flex-1">
                <a href={git} target="__blank">
                  Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </m.div>
      <h1 className="text-center text-xl font-semibold hidden lg:block">
        Get in touch through
      </h1>
      <div className="lg:flex items-center justify-center mb-4 hidden">
        <a href="https://github.com/8Apoorv8?tab=repositories" target="__blank">
          <BsGithub
            size={30}
            className="hover:text-gray-600 transition-all duration-150"
          />
        </a>
        <a href="www.linkedin.com/in/APPandey" target="__blank">
          <AiFillLinkedin
            size={40}
            className="ml-4 hover:text-blue-700 transition-all duration-150"
          />
        </a>
      </div>
    </m.div>
  );
};

export default Portfolio;
