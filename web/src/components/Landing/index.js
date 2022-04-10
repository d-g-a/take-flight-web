import React, { useEffect, useState } from "react";
import { LandingStyled } from "./style";
import Logotipo3D from "../../images/Logo_3D2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import testLoop from "../Video/take_loop.mp4";

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
    const delSections = document.querySelectorAll(".delayed-section");

    delSections.forEach((section) => {
      const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
        y: "30vh",
        ease: "none",
      });

      const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-30vh",
        ease: "none",
        paused: true,
      });

      const scrub = gsap.to(imageAnim, {
        progress: 1,
        paused: true,
        ease: "power3",
        duration: parseFloat(section.dataset.scrub) || 0.1,
        overwrite: true,
      });

      ScrollTrigger.create({
        animation: containerAnim,
        scrub: true,
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          scrub.vars.progress = self.progress;
          scrub.invalidate().restart();
        },
      });
    });
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

      {/* <div id="bg_container">
        <iframe
        id="bg"
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/k0r59oZgerc?controls=1?autoplay=1?loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}

      {/* <iframe
        src="https://player.vimeo.com/video/697190262?h=1cd6dd5353?background=1"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe> */}

      <div id="del1" class="delayed-section" data-scrub="0.4">
        <div className="innerContainer">
          <img src={Logotipo3D} className="logo" />
        </div>
      </div>
    </LandingStyled>
  );
};
