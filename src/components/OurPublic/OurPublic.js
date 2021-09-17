import React from "react";
import "./OurPublic.css";
import Subtitle from "../Heading/Subtitle/Subtitle";
import Img from "../Img/Img";
import iconMilitar from "../../assets/img/militar-icon.png";
import iconCivil from "../../assets/img/civil-icon.png";

const OurPublic = () => {
  return (
    <div className="our-public">
      <div className="our-public__title">
        <Subtitle>¿A quiénes nos dirigímos?</Subtitle>
      </div>
      <div className="our-public__container">
        <div className="our-public__option">
          <div className="option__img">
            <Img src={iconCivil} />
          </div>
          <p className="option__caption">Civiles</p>
        </div>

        <div className="our-public__option">
          <div className="option__img">
            <Img src={iconMilitar} />
          </div>
          <p className="option__caption">Servicio Militar</p>
        </div>
      </div>
    </div>
  );
};

export default OurPublic;
