import React from "react";
import Dropdown from "./Dropdown";
import Title from "./Title";
import Menu from "./Menu";
import { NavbarProvider } from "~/components/Navbar/NavbarContext";

const Navbar: React.FC<NavbarProps> = ({ filters, hrefPrefix }) => {
  return (
    <NavbarProvider filters={filters} hrefPrefix={hrefPrefix}>
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Dropdown />
          <Title />
        </div>
        <div className="navbar-center hidden lg:flex">
          <Menu />
        </div>
        <div className="navbar-end"></div>
      </nav>
    </NavbarProvider>
  );
};

export default Navbar;
