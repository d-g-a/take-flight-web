import React, { useEffect, useState } from "react";
import { LandingStyled } from "./style";
import Logotipo3D from "../../images/Logo_3D2.png";
import { MarqueeTest } from "../MarqueeTest";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZaccMilne from "../../images/Zacc_Milne_Take_Flight_Teacher.jpg";
import KarrieMilne from "../../images/Kerrie_Milne_Take_Flight_Teacher.jpg";
import CaetlynWatson from "../../images/Caetlyn_Watson_Take_Flight_Teacher.jpg";
import landingTF from "../../images/tf_landing.jpeg";
import tfTwo from "../../images/tf_landing_2.jpeg";
import tfThree from "../../images/tf_landing_3.jpeg";
import tfFour from "../../images/tf_landing_4.jpeg";
import { SecondaryContent } from "../SecondaryContent";   

import { MarqueeHeader } from "../MarqueeHeader";

import sanityClient from "../../client.js";

gsap.registerPlugin(ScrollTrigger);

export const Landing = () => {
  const [marqueeText, setMarqueeText] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "marquee-text"]{
          _id,
          title,
          url,
        }`
      )
      .then((data) => setMarqueeText(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "background-image"]{
          title,
          background_image{
                alt,
                caption,
                asset->{
                  url
            }
          },
        }`
      )
      .then((data) => setBackgroundImage(data))
      .catch(console.error);
  }, []);


  return (
    <LandingStyled
      landingImage={backgroundImage?.[0].background_image.asset.url}
      id="landing"
    >
      {/* <MarqueeTest /> */}
      <MarqueeHeader marqueeText={marqueeText?.[0].title} />
      <div className="TakeFlight3D">
        <img src={Logotipo3D} />
      </div>

    </LandingStyled>
  );
};
