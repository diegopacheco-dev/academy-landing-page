import React from "react";
import CardOpinion from "../../generals/CardOpinion/CardOpinion";
import "./OurNewRecruits.css";
import Subtitle from "../../Heading/Subtitle/Subtitle";

const OurNewRecruits = () => {
  return (
    <section className="section bg-gray">
      <Subtitle>Conoce a nuestros ingresantes</Subtitle>

      <div className="our-new-recruits__container">
        <CardOpinion
          text="Gracias a GUIDE logré mi ingreso.
Lo que más me gustó fueron los profesores y las clases grabadas."
          img={`${process.env.PUBLIC_URL}/imgs/opinion1.png`}
          name="Erick Arancibia"
          desc="Ingresante ESOFA 2021"
        />
      </div>
    </section>
  );
};

export default OurNewRecruits;
