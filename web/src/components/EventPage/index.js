import React, { useEffect } from "react";
import { EventPageWrapper, SecondaryContent } from "./style";
import { MarqueeTest } from "../MarqueeTest";
import { DateMarquee } from "../DateMarquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ZaccMilne from "../../images/Zacc_Milne_Take_Flight_Teacher.jpg"
import KarrieMilne from "../../images/Kerrie_Milne_Take_Flight_Teacher.jpg"
import CaetlynWatson from "../../images/Caetlyn_Watson_Take_Flight_Teacher.jpg"

gsap.registerPlugin(ScrollTrigger);

export const EventPage = () => {
  useEffect(() => {
    const delSections = document.querySelectorAll(".delayed-section");

    delSections.forEach((section) => {
      const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
        y: "100vh",
        ease: "ease2",
      });

      const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-100vh",
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

console.log(`${Math.floor(Math.random()*100)+100}vh`)
  return (
    <EventPageWrapper>
      <DateMarquee />
      <div className="EventDetails">
        <h2>TAKE Flight IMMERSIVE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="GetTicketsButton">
          <a href="https://google.com">Get Tickets</a>
        </button>
      </div>
      <SecondaryContent 
          heightDel1={`${Math.floor(Math.random()*50)+75}vh`}
          heightDel2={`${Math.floor(Math.random()*50)+100}vh`}
          heightDel3={`${Math.floor(Math.random()*50)+120}vh`}
          heightDel4={`${Math.floor(Math.random()*50)+75}vh`}
          heightDel5={`${Math.floor(Math.random()*50)+110}vh`}
          // widthDel1={`${Math.floor(Math.random()*100)}vh`}
          // widthDel2={`${Math.floor(Math.random()*100)}vh`}
          // widthDel3={`${Math.floor(Math.random()*100)}vh`}
          // widthDel4={`${Math.floor(Math.random()*100)}vh`}
          // widthDel5={`${Math.floor(Math.random()*100)}vh`}
        >
        <div id="del1" class="delayed-section" data-scrub="0.4">
          <div className="innerContainer">
            <img width="575" src={ZaccMilne} alt="hola" />
          </div>
        </div>
        <div id="del2" className="delayed-section" data-scrub="0.2">
          <div className="innerContainer">
            <img width="575" src={KarrieMilne} alt="hola" />
          </div>
        </div>
        <div id="del3" className="delayed-section" data-scrub="0.6">
          <div className="innerContainer">
            <img width="575" src={CaetlynWatson} alt="hola" />
          </div>
        </div>
        <div id="del4" className="delayed-section" data-scrub="0.6">
          <div className="innerContainer">
            <img width="575" src={CaetlynWatson} alt="hola" />
          </div>
        </div>
        <div id="del5" className="delayed-section" data-scrub="0.6">
          <div className="innerContainer">
            <img width="575" src={CaetlynWatson} alt="hola" />
          </div>
        </div>
      </SecondaryContent>
          <MarqueeTest />
    </EventPageWrapper>
  );
};
