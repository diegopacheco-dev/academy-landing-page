import React from "react";
import "./WhatWeTeachYou.css";
import CardTemary from "../../generals/CardTemary/CardTemary";
import Subtitle from "../../Heading/Subtitle/Subtitle";
import temaryImages from "../../../utils/imagesPath";

const WhatWeTeachYou = () => {
  return (
    <section className="what-we-teach-you section" id="what-we-teach-you">
      <Subtitle>Descubre lo que te enseñaremos</Subtitle>
      <p>
        Conoce más sobre nuestros <b>horarios</b>, los <b>asignaturas</b> que
        dictaremos y los pasos para <b>matricularte</b> descargando el{" "}
        <b>temario</b> de la Escuela a donde desees postular.
      </p>

      <div className="what-we-teach-you__container">
        <CardTemary
          title="Oficiales"
          imgs={[
            temaryImages[0],
            temaryImages[1],
            temaryImages[2],
            temaryImages[3],
          ]}
        />
        <CardTemary
          title="Sub Oficiales"
          imgs={[
            temaryImages[4],
            temaryImages[5],
            temaryImages[6],
            temaryImages[7],
          ]}
        />
        <CardTemary
          title="BECA 18 / IESTFFAA"
          imgs={[temaryImages[8], temaryImages[9]]}
        />
      </div>

      <div className="what-we-teach-you__price">
        <i className="vertical-arrow icon bx bxs-down-arrow bx-md"></i>
        <div className="price-and-rows-container">
          <div className="icons-arrows-container">
            <i className="icon bx bxs-right-arrow bx-md"></i>
            <i className="icon bx bxs-right-arrow bx-md"></i>
          </div>
          <div className="price-container">
            <p>Desde</p>
            <div className="price">
              <span>s/</span>
              <p>450</p>
            </div>
            <p>el ciclo</p>
          </div>
          <div className="icons-arrows-container">
            <i className="icon bx bxs-left-arrow bx-md"></i>
            <i className="icon bx bxs-left-arrow bx-md"></i>
          </div>
        </div>

        <i className="vertical-arrow icon bx bxs-up-arrow bx-md"></i>
      </div>
    </section>
  );
};

export default WhatWeTeachYou;
