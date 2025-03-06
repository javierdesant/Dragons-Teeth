import React from "react";
import Dropdown from "./Dropdown";
import Title from "./Title";
import Menu from "./Menu";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Dropdown />
        <Title />
      </div>
      <div className="navbar-center hidden lg:flex">
        <Menu />
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
