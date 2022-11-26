import React, { useState } from "react";
import { motion as m } from "framer-motion";
const Contact = () => {
  const [email, setEmail] = useState("");
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.65, ease: "easeOut", staggerChildren: 0.5 }}
      exit={{ opacity: 1, y: "100%" }}
      className="bg-blue-200 absolute top-0 w-full h-full -z-20  "
    >
      <form
        action="https://getform.io/f/7c841d34-782a-4e51-a95c-9c965f17b40b"
        method="POST"
        className=" p-8  md:px-10 lg:px-20   mt-20 grid place-content-center"
      >
        <h1 className="text-center mb-2 text-3xl font-semibold overflow-hidden">
          <m.p
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We will talk soon.
          </m.p>
        </h1>
        <label htmlFor="" className="mb-2 font-cursive ">
          Name
        </label>
        <input
          type="text"
          placeholder="Type your Name"
          className="text-center  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none  invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <label htmlFor="" className="my-2 font-cursive ">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Type your Email"
          className="text-center px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400   focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none  invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <label htmlFor="" className="my-2 font-cursive ">
          Message
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write a Message"
          className="mt-2 text-center px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400   focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none  invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        ></textarea>
        <button className="m-auto mt-2 px-8 py-6 border bg-gradient-to-r from-blue-300 to-blue-400 hover:rounded-[100%] hover:px-6 hover:scale-105 rounded hover:ease-in transition-all duration-300 ">
          Talk
        </button>
      </form>
    </m.div>
  );
};

export default Contact;
