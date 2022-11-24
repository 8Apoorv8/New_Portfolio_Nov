import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { motion as m } from "framer-motion";
const About = () => {
  return (

    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 1, y: "100%" }}
      className="ABOUT bg-red-200 absolute top-0 h-full -z-20 top "
    >
      <div className="mt-24 p-8  md:px-10 lg:px-20">
        <div className="LEFT">
          <div className="overflow-hidden">
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold text-center"
            >
              ABOUT ME
            </m.h1>
          </div>
          <p className="my-2 md:my-4 md:text-xl">
            I started learning coding in my highchooling days. I always had keen
            interest in technologies. Jumping to my college years i was very
            facinated by how big MNC's made their websites even sometimes
            government site too. That got me to think how developer buid these
            kind of sites.
          </p>

          <p className="my-2 md:my-4 md:text-xl">
            Prior to it i was just doing normal basic academic coding, but after
            these kinds of thoughts my perspective of thinking how site works
            changed. Then i started to learn JS, Html, and Css to get the basic
            understanding of how website work. So yah this got me intrested in
            web development and here i am.
          </p>
        </div>

        <div className="RIGHT">
          <h1 className="md:text-xl">
            I have a number of small to intermediate level projects on my own.
            Some are done in plain Html, Css while others have had some pinch of
            React, Js and Tailwind.
          </h1>

          <p className="md:text-xl">
            Currently I am having fun working with React and Tailwind combined.
          </p>
          <br />
          <p className="text-center text-xl font-semibold">Contact Me</p>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/8Apoorv8?tab=repositories"
              target="__blank"
            >
              <BsGithub
                size={30}
                className="hover:text-gray-400 transition-all duration-150"
              />
            </a>
            <a href="www.linkedin.com/in/APPandey" target="__blank">
              <AiFillLinkedin
                size={40}
                className="ml-4 hover:text-blue-700 transition-all duration-150"
              />
            </a>
          </div>
        </div>
      </div>
    </m.div>

  );
};

export default About;
