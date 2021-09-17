import React from "react";
import "./CardOpinion.css";
import Img from "../Img/Img";

const CardOpinion = ({text, img, name, desc}) => {
  return (
    <div className="recruits-opinion">
      <p className="recruits-opinion__opinion">
        {text}
      </p>

      <div className="recruits-opinion__perfil">
        <div className="perfil__img">
          <Img src={img} />
        </div>
        <div className="perfil__info">
          <p>
            {name}
            <br />
            {desc}
          </p>
        </div>
      </div>

      <div className="recruits-opinion__score">
        <i class="bx bxs-star bx-md"></i>
        <i class="bx bxs-star bx-md"></i>
        <i class="bx bxs-star bx-md"></i>
        <i class="bx bxs-star bx-md"></i>
        <i class="bx bxs-star bx-md"></i>
      </div>
    </div>
  );
};

export default CardOpinion;
