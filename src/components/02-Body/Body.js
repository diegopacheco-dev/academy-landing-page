import React from "react";
import './Body.css'
import AboutUs from "../sections/AboutUs/AboutUs";
import ExploreOurVirtualClass from "../sections/ExploreOurVirtualClass/ExploreOurVirtualClass";
import Hero from "../sections/Hero/Hero";
import OurNewRecruits from "../sections/OurNewRecruits/OurNewRecruits";
import OurPublic from "../sections/OurPublic/OurPublic";
import WhatWeTeachYou from "../sections/WhatWeTeachYou/WhatWeTeachYou";
import WhyUs from "../sections/WhyUs/WhyUs";
import ButtonWhatsapp from "../generals/ButtonWhatsapp/ButtonWhatsapp";

const Body = () => {
  return (
    <div className="main">
      <Hero />
      <AboutUs />
      <WhyUs />
      <OurPublic />
      <WhatWeTeachYou />
      <ExploreOurVirtualClass />
      <OurNewRecruits />
      <ButtonWhatsapp>¿En que te podemos ayudar?</ButtonWhatsapp>
    </div>
  );
};

export default Body;
