import React from "react";
import "./ExploreOurVirtualClass.css";
import Subtitle from "../Heading/Subtitle/Subtitle";
import CardVistualClass from "../CardVirtualClass/CardVistualClass";

const ExploreOurVirtualClass = () => {
  return (
    <div className="section bg-gray">
      <div className="section__title">
        <Subtitle>Explora nuestra aula virtual</Subtitle>
      </div>
      <div className="explore-our-virtual-classroom__container">
        <CardVistualClass
          title="Clases en vivo/ grabadas"
          text="Accede a clases en vivo todos los días; si no puedes conectarte revisa tus clases grabadas."
        />
        <CardVistualClass
          title="Materiales de estudio"
          text="Descarga diapositivas, resúmenes, separatas y libros (acorde al prospecto de tu Escuela) y refuerza lo aprendido en clase."
        />
        <CardVistualClass
          title="Simulacros"
          text="Practica con evaluaciones semanales y mensuales para una mejor preparación."
        />
      </div>
    </div>
  );
};

export default ExploreOurVirtualClass;
