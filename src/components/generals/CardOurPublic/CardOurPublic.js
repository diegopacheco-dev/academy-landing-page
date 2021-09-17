import React, { useState } from "react";
import "./CardOurPublic.css";
import Img from "../../generals/Img/Img";

const CardOurPublic = ({ img, caption, text }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="card-our-public"
      onClick={() => setShowText((prevState) => !prevState)}
    >
      <div className="card-our-public__img">
        {showText ? <p>{text}</p> : <Img src={img} />}
      </div>
      <p className="card-our-public__caption">{caption}</p>
    </div>
  );
};

export default CardOurPublic;
