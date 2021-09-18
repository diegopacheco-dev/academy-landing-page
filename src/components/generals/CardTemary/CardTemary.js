import React, { useState } from "react";
import Button from "../Button/Button";
import Subtitle from "../../Heading/Subtitle/Subtitle";
import './CardTemary.css'

const CardTemary = ({ title, imgs }) => {
  const [selected, setSelected] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
  })

  return (
    <article className="card-temary">
      <h4>{title}</h4>
      
      <div className={`card-temary__container ${imgs.length < 3 && 'two-imgs'}`}>
        <div>
          <img
          className={`${selected.img1 ? 'color': 'grayscale'}`}
          onClick={() => setSelected(prevState=> ({...prevState, img1: !prevState.img1}))}
           src={imgs[0]} alt="logo de institucion"/>
        </div>
        <div>
          <img
          className={`${selected.img2 ? 'color': 'grayscale'}`}
          onClick={() => setSelected(prevState=> ({...prevState, img2: !prevState.img2}))}
           src={imgs[1]} alt="logo de institucion"/>
        </div>
        <div>
          <img
          className={`${selected.img3 ? 'color': 'grayscale'}`}
          onClick={() => setSelected(prevState=> ({...prevState, img3: !prevState.img3}))}
           src={imgs[2]} alt="logo de institucion"/>
        </div>
        <div>
          <img
          className={`${selected.img4 ? 'color': 'grayscale'}`}
          onClick={() => setSelected(prevState=> ({...prevState, img4: !prevState.img4}))}
           src={imgs[3]} alt="logo de institucion"/>
        </div>
      </div>

      <div className="card-temary__button">
      <Button
      type={Object.keys(selected).some(key => selected[key]) ? 'color': 'grayscale'}
      onClick={() => Object.keys(selected).forEach(key => console.log(selected[key]))}
       size="lg">Descargar temario</Button>

      </div>

    </article>
  );
};

export default CardTemary;
