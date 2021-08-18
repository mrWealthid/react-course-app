import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = ({ Home, link }) => {
  const styles = {
    color: "cadetBlue",
    border: "1px solid gainsboro",
    padding: "10px 25px",
    borderRadius: 30,
  };
  const mystyle = {
    margin: 20,
  };
  return (
    <>
      <NavLink style={mystyle} activeStyle={styles} exact to={link}>
        {Home}
      </NavLink>
    </>
  );
};

Navlinks.defaultProps = {
  Home: "Home",
  link: "./",
};

export default Navlinks;
