import { NavLink } from "react-router-dom";

export const Navbar = ({com, path}) => {
  return (
    <li><NavLink to={path}>{com}</NavLink></li>
   
  );
};

export default Navbar

