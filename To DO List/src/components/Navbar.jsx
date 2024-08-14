import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between bg-black text-white py-3 px-6">
      <div className="logo">
        <span className="text-3xl font-bold">iTask</span>
      </div>
      <ul className="flex space-x-8">
        <li className="cursor-pointer hover:underline transition-all">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:underline transition-all">
          <Link to="/your-tasks">Your Tasks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
