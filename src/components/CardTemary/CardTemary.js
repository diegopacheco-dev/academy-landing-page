import React from "react";
import Button from "../Button/Button";
import Subtitle from "../Heading/Subtitle/Subtitle";
import Img from "../Img/Img";
import './CardTemary.css'

const CardTemary = ({ title, imgs }) => {
  return (
    <article className="card-temary">
      <Subtitle>{title}</Subtitle>
      
      <div className={`card-temary__container ${imgs.length < 3 && 'two-imgs'}`}>
        <div>
          <img src={imgs[0]}/>
        </div>
        <div>
          <img src={imgs[1]}/>
        </div>
        <div>
          <img src={imgs[2]}/>
        </div>
        <div>
          <img src={imgs[3]}/>
        </div>
      </div>

      <div className="card-temary__button">
      <Button size="lg">Descargar temario</Button>

      </div>

    </article>
  );
};

export default CardTemary;
