import React, { useEffect } from "react";
import { GlobalScrollStyled } from "./style";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Landing } from "../Landing";
import { ExperiencePage } from "../ExperiencePage";
import { FloatingFooter } from "../FloatingFooter";
import { TeachersPage } from "../TeachersPage";
import { Footer } from "../Footer"
import { SecondaryContent } from "../SecondaryContent"; 

export const GlobalScroll = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(".panel:not(:last-child)", {
  //     yPercent: -100,
  //     ease: "none",
  //     stagger: 0.5,
  //     scrollTrigger: {
  //       trigger: "#container",
  //       start: "top top",
  //       end: "+=500%",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });
  //   gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
  // }, []);

  return (
    <FloatingFooter>
      <GlobalScrollStyled>
        {/* <div id="container"> */}
          <section className="panel landing">
            <Landing />
          </section>
          <section className="panel landing">
            <SecondaryContent />
          </section>
          <section className="panel experience" id="experience_page">
            <ExperiencePage />
          </section>
          <section className="panel teachers">
            <TeachersPage />
          </section>
          <section>
            <Footer linkTo="#landing" className="panel footer"/>
          </section>
        {/* </div> */}
      </GlobalScrollStyled>
    </FloatingFooter>
  );
};
