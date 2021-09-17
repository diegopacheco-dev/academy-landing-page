import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ExploreOurVirtualClass from "../ExploreOurVirtualClass/ExploreOurVirtualClass";
import Hero from "../Hero/Hero";
import OurPublic from "../OurPublic/OurPublic";
import WhatWeTeachYou from "../WhatWeTeachYou/WhatWeTeachYou";
import WhyUs from "../WhyUs/WhyUs";

const Body = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyUs />
      <OurPublic />
      <WhatWeTeachYou />
      <ExploreOurVirtualClass />
    </>
  );
};

export default Body;
