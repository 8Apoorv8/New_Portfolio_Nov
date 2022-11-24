import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import apoorv from "../Assets/apoorv.jpg";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { GrResume } from "react-icons/gr";
const Home = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      exit={{ opacity: 1, y: "100%" }}
      className="flex flex-col md:flex-row p-8  md:px-10 lg:px-20 absolute top-0 bg-orange-100 h-full -z-10 w-full gap-10 "
    >
      <div className="LEFT md:w-[50%] mt-44">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-Head">
          I'm a Front-End / React Developer.
        </h1>
        <div className="overflow-hidden">
          <m.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-500 my-4 font-cursive text-xl font-bold md:text-2xl"
          >
            I have around 2 years of self learned experience of building and
            designing Front-end. Currently, I love to work on Web applications
            with some recent technologies like React, Tailwind ,Next JS.
          </m.p>
        </div>
        <button className="flex items-center  px-6 py-4 bg-gradient-to-r from-orange-200 to-orange-200  text-xl rounded  group">
          <Link to="/portfolio">Portfolio</Link>
          <AiOutlineRight className="group-hover:rotate-90 transition-all ease-in duration-200" />
        </button>
      </div>
      <div className="RIGHT md:w-[50%] grid place-content-center md:mt-44  ">
        <img
          src={apoorv}
          alt="mainImg"
          className="rounded-[50%] h-36 w-36 md:h-48 md:w-48 relative md:-top-20 md:-right-16 lg:-right-36"
        />
        <div className="absolute right-10 bottom-10 bg-gradient-to-r from-orange-200 to-orange-200 px-4 py-4 rounded-full lg:hidden cursor-pointer">
          <a
            href="/resume.pdf"
            className="flex justify-between items-center w-full  text-black"
            download="true"
            target="_blank"
            rel="noreferrer"
          >
            <GrResume size={20} />
          </a>
        </div>
      </div>
    </m.div>
  );
};

export default Home;
