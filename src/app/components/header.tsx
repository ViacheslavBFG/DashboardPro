import React from "react";

const Header = () => {
  return (
    <div className="p-5  items-end font-bold text-2xl gap-2 hidden md:flex  ">
      <img src="/img/logo.png" alt="Logo" className="w-10 h-10" />
      Dashboard <span className=" text-sm flex text-gray-400">v.01</span>
    </div>
  );
};

export default Header;
