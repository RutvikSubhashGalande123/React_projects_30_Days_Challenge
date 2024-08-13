import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between bg-black text-white py-3 px-6">
      <div className="logo">
        <span className="text-3xl font-bold">iTask</span>
      </div>
      <ul className="flex space-x-8">
        <li className="cursor-pointer hover:underline transition-all">Home</li>
        <li className="cursor-pointer hover:underline transition-all ">
          Your Tasks
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
