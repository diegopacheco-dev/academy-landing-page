import React from "react";
import "./OurPublic.css";
import Subtitle from "../../Heading/Subtitle/Subtitle";
import iconMilitar from "../../../assets/img/militar-icon.png";
import iconCivil from "../../../assets/img/civil-icon.png";
import CardOurPublic from "../../generals/CardOurPublic/CardOurPublic";

const OurPublic = () => {
  return (
    <div className="our-public section" id="our-public">
      <div className="our-public__title">
        <Subtitle>¿A quiénes nos dirigímos?</Subtitle>
      </div>

      <div className="our-public__container mt-2">
        <CardOurPublic
          img={iconCivil}
          caption="Civiles"
          text="Jóvenes que deseen postular a las Escuelas de Oficiales y Sub oficiales (FF. AA)
SERVICIO MILITAR"
        />

        <CardOurPublic
          img={iconMilitar}
          caption="Servicio Militar"
          text="Si estás prestando 
servicio militar o eres Licenciado y quieres postular a una Escuela de Oficiales y Sub oficiales (FF. AA), tenemos descuentos exclusivos para ti, gracias a nuestro convenio con las FF. AA."
        />
      </div>
    </div>
  );
};

export default OurPublic;
