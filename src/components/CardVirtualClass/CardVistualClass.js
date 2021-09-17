import React from "react";
import Subtitle from "../Heading/Subtitle/Subtitle";
import "./CardVirtualClass.css";

const CardVistualClass = ({ title, text }) => {
  return (
    <div className="card-virtual-class">
      <div className="card-virtual-class__info">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="card-virtual-class__img"></div>
    </div>
  );
};

export default CardVistualClass;
