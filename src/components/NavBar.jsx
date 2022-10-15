import { useState,useEffect } from "react";
import NavLink from "react-router-dom";

const NavBar = (route) => {

  const navStyles =  ({ isActive }) =>
  isActive
    ? {
        color: '#fff',
        background: '#7600dc',
      }
    : { color: '#545e6f', background: '#f0f0f0' }

  return (
    <NavLink to={route} style={navStyles} />
  )
}

export default NavBar;