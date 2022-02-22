import React, {useEffect}   from "react";
import { ScrollTestStyled } from "./style";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import takeFlightLog from '../../images/Logotipo_SVG_test.svg'
import {TeachersScroll} from '../TeachersScroll' 

export const ScrollTest = () => {
 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  gsap.to(".panel:not(:last-child)", {
    yPercent: -100, 
    ease: "none",
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#container",
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true
    }
  });
  
  
  gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
  }, [])

  
  return (
    <ScrollTestStyled>
      <div id="container">
        <div className="description panel blue">
          <div>
            {/* <h1>Layered pinning from bottom</h1>
            <p>
              A simple example where overlapping panels reveal from the bottom.
            </p> */}
            <img src={takeFlightLog} alt="logo"/>
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </div>

        <section className="panel red">
          <h1>HOME PAGE</h1>
          <img src={takeFlightLog} alt="logo"/>
        </section>
        <section className="panel orange">
          <h1>EVENTS PAGE</h1>
          <img src={takeFlightLog} alt="logo"/>
        </section>
        <section className="panel purple">
          <h1>TEACHERS</h1>
          <img src={takeFlightLog} alt="logo"/>
          {/* <TeachersScroll /> */}
        </section>
      </div>
    </ScrollTestStyled>
  );
};
