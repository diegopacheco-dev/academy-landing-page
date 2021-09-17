import React from "react";
import './Body.css'
import AboutUs from "../AboutUs/AboutUs";
import ExploreOurVirtualClass from "../ExploreOurVirtualClass/ExploreOurVirtualClass";
import Hero from "../Hero/Hero";
import OurNewRecruits from "../OurNewRecruits/OurNewRecruits";
import OurPublic from "../OurPublic/OurPublic";
import WhatWeTeachYou from "../WhatWeTeachYou/WhatWeTeachYou";
import WhyUs from "../WhyUs/WhyUs";
import ButtonWhatsapp from "../ButtonWhatsapp/ButtonWhatsapp";

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
