import React from "react";
import './ButtonWhatsapp.css'

const ButtonWhatsapp = ({ children }) => {
  return (
    <button className="button-whatsapp">
      <i class="bx bx-sm bxl-whatsapp"></i>
      {children}
    </button>
  );
};

export default ButtonWhatsapp;
