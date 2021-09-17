import React from "react";
import Button from "../Button/Button";
import Subtitle from "../../Heading/Subtitle/Subtitle";
import './CardTemary.css'

const CardTemary = ({ title, imgs }) => {
  return (
    <article className="card-temary">
      <Subtitle>{title}</Subtitle>
      
      <div className={`card-temary__container ${imgs.length < 3 && 'two-imgs'}`}>
        <div>
          <img src={imgs[0]} alt="logo de institucion"/>
        </div>
        <div>
          <img src={imgs[1]} alt="logo de institucion"/>
        </div>
        <div>
          <img src={imgs[2]} alt="logo de institucion"/>
        </div>
        <div>
          <img src={imgs[3]} alt="logo de institucion"/>
        </div>
      </div>

      <div className="card-temary__button">
      <Button size="lg">Descargar temario</Button>

      </div>

    </article>
  );
};

export default CardTemary;
