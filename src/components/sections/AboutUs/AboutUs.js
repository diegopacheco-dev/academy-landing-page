import React from "react";
import "./AboutUs.css";
import aboutUs from "../../../assets/img/about-us.png";
import Img from "../../generals/Img/Img";
import Subtitle from "../../Heading/Subtitle/Subtitle";

const AboutUs = () => {
  return (
    <div className="about-us section" id="about-us">
      <Subtitle>Acerca de GUIDE</Subtitle>
      <div className="about-us__info mt-1">
        <p>
          Somos una academia de preparación exclusiva para jóvenes que están
          próximos a postular a una escuela de Oficiales, Sub Oficiales, Beca 18
          y el IESTFFAA. Contamos con la mejor plana de docentes e instructores
          con amplia experiencia en el uso de herramientas digitales, además de
          tener un moderno método de enseñanza que garantizarán resultados
          positivos.
        </p>
      </div>
      <div className="about-us__img">
        <Img src={aboutUs} />
      </div>
    </div>
  );
};

export default AboutUs;
