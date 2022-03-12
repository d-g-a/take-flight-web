import React, {useEffect, useRef} from "react";
import { LandingStyled } from "./style";
import Logotipo3D from "../../images/Logotipo3D.svg";
import { MarqueeTest } from "../MarqueeTest";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZaccMilne from "../../images/Zacc_Milne_Take_Flight_Teacher.jpg"
import KarrieMilne from "../../images/Kerrie_Milne_Take_Flight_Teacher.jpg"
import CaetlynWatson from "../../images/Caetlyn_Watson_Take_Flight_Teacher.jpg"

gsap.registerPlugin(ScrollTrigger);

export const Landing = () => {

  

    useEffect(() => {
      const delSections = document.querySelectorAll(".delayed-section");

      delSections.forEach(section => {
        const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
          y: "100vh",
          ease: "none"
        });
        
        const imageAnim = gsap.to(section.querySelector("img"), {
          y: "-100vh",
          ease: "none",
          paused: true
        });
        
        const scrub = gsap.to(imageAnim, {
          progress: 1,
          paused: true,
          ease: "power3",
          duration: parseFloat(section.dataset.scrub) || 0.1,
          overwrite: true
        });
        
        ScrollTrigger.create({
          animation: containerAnim,
          scrub: true,
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onUpdate: self => {
            scrub.vars.progress = self.progress;
            scrub.invalidate().restart();
          }
        });
      });
      
    }, [])

  return (
    <LandingStyled>
      <MarqueeTest />
      <div className="TakeFlight3D">
        <img src={Logotipo3D} />
      </div>
      <div className="secondary-content">
        <div id="del1" class="delayed-section" data-scrub="0.4">
          <div className="innerContainer">
            <img
              width="575"
              
              src={ZaccMilne}
              alt="hola"
            />
          </div>
        </div>
        <div id="del2" className="delayed-section" data-scrub="0.2">
          <div className="innerContainer">
            <img
              width="575"
              src={KarrieMilne}
              alt="hola"
            />
          </div>
        </div>
        <div id="del3" className="delayed-section" data-scrub="0.6">
          <div className="innerContainer">
            <img
              width="575"
              src={CaetlynWatson}
              alt="hola"
            />
          </div>
        </div>
      </div>
    </LandingStyled>
  );
};
