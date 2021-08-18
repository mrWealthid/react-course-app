import React from "react";
import Navlinks from "./Navlinks";

const Header = () => {
  const mystyle = {
    margin: "20px 0px",
  };
  return (
    <div style={mystyle}>
      <Navlinks />
      <Navlinks link={"/courses"} Home="Course" />
      <Navlinks link={"/About"} Home="About" />
    </div>
  );
};

export default Header;
