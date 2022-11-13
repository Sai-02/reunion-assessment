import React from "react";

const Header = () => {
  return (
    <div className="flex py-4 px-12 items-center border-b">
      <div className="flex grow gap-16 items-center">
        <h1>Estatery</h1>
        <ul className="flex gap-8 items-center">
          <li className="text-[#023e8a] p-2 bg-[#caf0f8] rounded ">Rent </li>
          <li className="">Buy</li>
          <li className="">Sale</li>
          <li className="">Manage Property</li>
          <li className="">Resources</li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <button className="rounded text-[#023e8a] border border-[#023e8a] px-3 py-2">
          Login
        </button>
        <button className="rounded text-white px-3  py-2 bg-[#023e8a]">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
