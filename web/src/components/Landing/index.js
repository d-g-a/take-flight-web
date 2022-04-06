import React, { useEffect, useState } from "react";
import { LandingStyled } from "./style";
import Logotipo3D from "../../images/Logo_3D2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import testLoop from "../Video/test_loop.mp4";
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
      <video autoPlay loop muted>
        <source src={testLoop} type="video/mp4" />
      </video>
      <MarqueeHeader marqueeText={marqueeText?.[0].title} />
      <div className="TakeFlight3D">
        <img src={Logotipo3D} />
      </div>
    </LandingStyled>
  );
};
