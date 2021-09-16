import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import Img from "../Img/Img";
import logo from "../../assets/img/logo.svg";
import iconMenu from '../../assets/img/icon-menu.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Img src={logo} />
      </div>

      <div className="header__button">
        <p>Antes de matricularte obtén una</p>
        <Button>CLASE GRATIS</Button>
      </div>

      <div className="header__menu">
        <button className="btn-menu">
          <Img src={iconMenu} />
        </button>
      </div>
    </div>
  );
};

export default Header;
