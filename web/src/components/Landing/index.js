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
    >
      {/* <MarqueeTest /> */}
      <MarqueeHeader marqueeText={marqueeText?.[0].title} />
      <div className="TakeFlight3D">
        <img src={Logotipo3D} />
      </div>

      {/* <SecondaryContent >
        <div id="del1" class="delayed-section" data-scrub="0.4">
          <div className="innerContainer">
            <img width="575" src={tfTwo} alt="hola" />
          </div>
        </div>
        <div id="del2" className="delayed-section" data-scrub="0.2">
          <div className="innerContainer">
            <img width="575" src={tfThree} alt="hola" />
          </div>
        </div>
        <div id="del3" className="delayed-section" data-scrub="0.6">
          <div className="innerContainer">
            <img width="800" src={tfFour} alt="hola" />
          </div>
        </div>
        <div id="del4" className="delayed-section" data-scrub="0.4">
          <div className="innerContainer">
            <h2 className="sub-title">Powered by love</h2>
          </div>
        </div>
        <div id="del5" className="delayed-section" data-scrub="0.3">
          <div className="innerContainer">
            <h2 className="sub-title">Escape the ordinary, <br /> Experience More</h2>
          </div>
        </div>
        <div id="del6" className="delayed-section" data-scrub="0.1">
          <div className="innerContainer">
            <h2 className="sub-title">
              A unique and immersive dance training experience like no other.
            </h2>
          </div>
        </div>
      </SecondaryContent> */}
    </LandingStyled>
  );
};
