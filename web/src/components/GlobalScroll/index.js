import React, { useEffect } from "react";
import { GlobalScrollStyled } from "./style";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import takeFlightLog from "../../images/Logotipo_SVG_test.svg";
import { Landing } from "../Landing";
import { ExperiencePage } from "../ExperiencePage";
import { FloatingFooter } from "../FloatingFooter";
import isotipo from '../../images/isotipo.svg'
import { TeachersPage } from "../TeachersPage";


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
            <div>
            <ExperiencePage />

            </div>

          </section>
          <section className="panel orange">
            <TeachersPage />
          </section>
          <section className="panel purple">
            <ul>
              <li><a>YOUTUBE</a></li>
              <li><a>INSTAGRAM</a></li>
              <li><a>HELLO@TAKEFLIGHT.COM</a></li>
              <li><img src={isotipo} alt="Isotipo" /></li>
            </ul>

          </section>
        </div>
      </GlobalScrollStyled>
    </FloatingFooter>
  );
};
