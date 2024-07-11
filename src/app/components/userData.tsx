import React from "react";

const UserData = () => {
  return (
    <div className="  items-center gap-3 justify-center mt-auto mb-10 text-xs md:text-sm hidden md:flex">
      <img className="w-10 h-10" src="/img/userAva.png" alt="Avatar" />
      <div>
        <p className=" font-bold">Evano</p>
        <p className=" text-gray-400">Project Manager</p>
      </div>
    </div>
  );
};

export default UserData;
