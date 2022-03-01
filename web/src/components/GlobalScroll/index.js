import React, { useEffect } from "react";
import { GlobalScrollStyled } from "./style";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import takeFlightLog from "../../images/Logotipo_SVG_test.svg";
import { Landing } from "../Landing";
import { EventsPage } from "../EventsPage";
import { FloatingFooter } from '../FloatingFooter';

export const GlobalScroll = () => {
  
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
        pin: true,
      },
    });
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
  }, []);

  return (
    <FloatingFooter>

   
    <GlobalScrollStyled>
      <div id="container">
        <div className="description panel blue">
          <div>
            <Landing />
          </div>
        </div>
        <section className="panel red">
          <EventsPage />
        </section>
        <section className="panel orange">
          <h1>TEACHERS</h1>
          <img src={takeFlightLog} alt="logo" />
        </section>
        <section className="panel purple">
          <h1>FOOTER</h1>
          <img src={takeFlightLog} alt="logo" />
        </section>
      </div>
    </GlobalScrollStyled>
    </FloatingFooter>
  );
};
