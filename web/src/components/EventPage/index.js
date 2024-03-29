import React, { useState, useEffect } from "react";
import { EventPageWrapper, LoadingWrapper } from "./style";
import { DateMarquee } from "../DateMarquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EventScrollTest } from "../EventScrollTest";
import { EventAliasMarquee } from "../EventAliasMarquee";
import { Footer } from '../Footer' 


import isotipo from "../../images/isotipo.svg";

gsap.registerPlugin(ScrollTrigger);

export const EventPage = ({ eventInfo, key }) => {


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
    <div id={eventInfo.title}>
      {!eventInfo ? (
        <LoadingWrapper>
          <h1>LOADING</h1>
          <img src={isotipo} alt="Take Flight" />
        </LoadingWrapper>
      ) : (
        <EventPageWrapper>
          <DateMarquee
            eventDate={eventInfo.dates}
            ticketUrl={eventInfo.url}
          />
          <EventScrollTest eventInfo={eventInfo} key={key} />
          <EventAliasMarquee eventAlias={eventInfo.eventAlias} />
          <div className="EventDetails">
            <div className="titleButton">
              <h4> CITY <span>{eventInfo.city}</span></h4>
              <h4> LOCATION <span>{eventInfo.location}</span></h4>
              <h4> DATES <span>{eventInfo.dates}</span></h4>
            </div>
            <p>{eventInfo.description}</p>
              <button className="GetTicketsButton">
                <a href={`https://${eventInfo.url}`}>GET TICKETS</a>
              </button>
          </div>
          <Footer linkTo="/home" /> 
        </EventPageWrapper>
      )}
    </div>
  );
};
