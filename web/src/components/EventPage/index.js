import React, { useState, useEffect } from "react";
import { EventPageWrapper, LoadingWrapper } from "./style";
import { MarqueeTest } from "../MarqueeTest";
import { DateMarquee } from "../DateMarquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EventScrollTest } from "../EventScrollTest";

import isotipo from "../../images/isotipo.svg";

gsap.registerPlugin(ScrollTrigger);

export const EventPage = ({ eventInfo }) => {
  useEffect(() => {
    const delSections = document.querySelectorAll(".delayed-section");

    delSections.forEach((section) => {
      const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
        y: "100vh",
        ease: "none",
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

  return (
    <div>
      {!eventInfo ? (
        <LoadingWrapper>
          <h1>LOADING</h1>
          <img src={isotipo} alt="Take Flight" />
        </LoadingWrapper>
      ) : (
        <EventPageWrapper>
          <DateMarquee
            eventDate={eventInfo.eventDate}
            ticketUrl={eventInfo.url}
          />
          <div className="EventDetails">
            <div className="titleButton">
              <h2>{eventInfo.title}</h2>
              <button className="GetTicketsButton">
                <a href={`https://${eventInfo.url}`}>GET TICKETS</a>
              </button>
            </div>
            <p>{eventInfo.description}</p>
          </div>
          <EventScrollTest eventInfo={eventInfo} />
          <MarqueeTest />
        </EventPageWrapper>
      )}
    </div>
  );
};
