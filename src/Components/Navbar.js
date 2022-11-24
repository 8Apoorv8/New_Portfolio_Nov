import React, { useState } from "react";
import { navKey } from "../Api's/NavAPI";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="flex justify-between p-8 items-center md:px-10 lg:px-20 ">
      <div className="text-2xl font-bold md:text-3xl lg:text-5xl"><Link to="/"> APOORV.</Link></div>
      <div className="flex">
        {navKey.map(({ id, title, goto }) => (
          <Link to={goto}>
            <li key={id} className="list-none  p-4 hidden md:block  hover:scale-105 transition-all duration-200 font-semibold">
              {title}
            </li>
          </Link>
        ))}
      </div>
      <div className="md:hidden " onClick={() => setNav(!nav)}>
        {nav ? (
          <AiOutlineMenuFold size={30} className="hover:cursor-pointer" />
        ) : (
          <AiOutlineMenuUnfold size={30} className="hover:cursor-pointer" />
        )}
      </div>
      <div
        className={
          !nav
            ? `flex flex-col absolute top-16 right-[34px] transition-all ease-in-out duration-150 bg-gray-200 md:hidden`
            : `fixed -right-96`
        }
      >
        {navKey.map(({ id, title, goto }) => (
          <Link to={goto}>

            <li key={id} className="list-none  p-4 ">
              {title}
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
