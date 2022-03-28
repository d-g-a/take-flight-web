import React, { useEffect}  from 'react'
import { SecondaryContentWrapper } from './style'
import tfTwo from "../../images/tf_landing_2.jpeg";
import tfThree from "../../images/tf_landing_3.jpeg";
import tfFour from "../../images/tf_landing_4.jpeg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SecondaryContent = () => {

    useEffect(() => {
    const delSections = document.querySelectorAll(".delayed-section");

    delSections.forEach((section) => {
      const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
        y: "20vh",
        ease: "none",
      });

      const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-20vh",
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
  return (
      <SecondaryContentWrapper >
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
      </SecondaryContentWrapper> 
  )
}
