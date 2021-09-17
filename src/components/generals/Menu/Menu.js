import React from "react";
import "./Menu.css";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`menu ${showMenu && "show"}`}>
      <ul>
        <li>
          <a 
          onClick={() => setShowMenu(prevState => !prevState)}
          href="#about-us">Acerca de GUIDE</a>
        </li>
        <li>
          <a 
          onClick={() => setShowMenu(prevState => !prevState)}
          href="#why-us">¿Por qué nosotros?</a>
        </li>
        <li>
          <a 
          onClick={() => setShowMenu(prevState => !prevState)}
          href="#our-public">¿A quienes nos dirigimos?</a>
        </li>
        <li>
          <a 
          onClick={() => setShowMenu(prevState => !prevState)}
          href="#what-we-teach-you">Descubre lo que te enseñaremos</a>
        </li>
        <li>
          <a 
          onClick={() => setShowMenu(prevState => !prevState)}
          href="#explore-our-virtual-class">Explora nuestra aula virtual</a>
        </li>
        <li>
          <a 
          onClick={() => setShowMenu(prevState => !prevState)}
          href="#our-new-recruits">Nuestros integrantes</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
