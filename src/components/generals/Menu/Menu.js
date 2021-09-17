import React from "react";
import "./Menu.css";

const Menu = ({ showMenu }) => {
  return (
    <div className={`menu ${showMenu && "show"}`}>
      <ul>
        <li>
          <a href="!#">Acerca de GUIDE</a>
        </li>
        <li>
          <a href="!#">¿Por qué nosotros?</a>
        </li>
        <li>
          <a href="!#">¿A quienes nos dirigimos?</a>
        </li>
        <li>
          <a href="!#">Descubre lo que te enseñaremos</a>
        </li>
        <li>
          <a href="!#">Explora nuestra aula virtual</a>
        </li>
        <li>
          <a href="!#">Nuestros integrantes</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
