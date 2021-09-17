import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">

      <div>
       
        <div className="footer__logo"><img src={`${process.env.PUBLIC_URL}/imgs/logo.png`} alt="" /></div>
        
        <div className="footer__know-us">
          <p className="footer__title">Conocenos</p>
          <ul>
            <li>
              <a href="!#">Aula Virtual</a>
            </li>
            <li>
              <a href="!#">Blog</a>
            </li>
          </ul>
        </div>
      
      </div>


      <div>
        <div className="footer__contact-us">
          <p className="footer__title">Contacto</p>
          <ul>
            <li>
              <i class="bx bxs-map"></i>
              <p>Alfredo Benavides 1944, piso 09, Miraflores 15048.</p>
            </li>
            <li>
              <i class="bx bxs-phone"></i>
              <p>938 561 890</p>
            </li>
            <li>
              <i class="bx bx-mail-send"></i>
              <p>info@guideasesores.com</p>
            </li>
            <li>
              <i class="bx bxs-time"></i>
              <p>10 am a 7:30 pm</p>
            </li>
          </ul>
        </div>
      
        <div className="footer__social-media">
          <p className="footer__title">Redes</p>
          <ul>
            <li>
              <a href="!#">
                <i class="bx bx-md bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="!#">
                <i class="bx bx-md bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="!#">
                <i class="bx bx-md bxl-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Footer;
