import React, {useState} from "react";
import "./Header.css";
import Button from "../generals/Button/Button";
import Img from "../generals/Img/Img";
import logo from "../../assets/img/logo.svg";
import iconMenu from "../../assets/img/icon-menu.png";
import Menu from "../generals/Menu/Menu";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="header">
      <div className="header__logo">
        <Img src={logo} />
      </div>

      <div className="header__button">
        <p>Antes de matricularte obtén una</p>
        <Button>CLASE GRATIS</Button>
      </div>

      <button 
      onClick={() => setShowMenu(prevState => !prevState)}
      className="btn-menu">
        <Img src={iconMenu} />
      </button>

      <Menu showMenu={showMenu}/>
    </div>

  );
};

export default Header;
