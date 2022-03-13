import React, { useState, useEffect } from "react";
import { EventPageWrapper, SecondaryContent } from "./style";
import { MarqueeTest } from "../MarqueeTest";
import { DateMarquee } from "../DateMarquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import sanityClient from "../../client";

gsap.registerPlugin(ScrollTrigger);

export const EventPage = ({ eventInfo, slug }) => {
  const [eventData, setEventData] = useState(null);

  // useEffect(()=>{
  //   sanityClient.fetch(
  //     `*[slug.current == $slug]{

  //     }`
  //   )

  // },[])

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
    <EventPageWrapper>
      <DateMarquee eventDate={eventInfo.eventDate} ticketUrl={eventInfo.url} />
      <div className="EventDetails">
        <h2>{eventInfo.title}</h2>
        <p>{eventInfo.description}</p>
        <button className="GetTicketsButton">
          <a href={`https://${eventInfo.url}`}>Get Tickets</a>
        </button>
      </div>
      <SecondaryContent
        heightDel1={`${Math.floor(Math.random() * 50) + 70}vh`}
        heightDel2={`${Math.floor(Math.random() * 50) + 100}vh`}
        heightDel3={`${Math.floor(Math.random() * 50) + 120}vh`}
        heightDel4={`${Math.floor(Math.random() * 50) + 75}vh`}
        heightDel5={`${Math.floor(Math.random() * 50) + 110}vh`}
      >
        <div id="del1" class="delayed-section" data-scrub="0.4">
          <div className="innerContainer">
            <img width="575" src={eventInfo?.image_1.asset.url} alt="hola" />
          </div>
        </div>
        <div id="del2" className="delayed-section" data-scrub="0.2">
          <div className="innerContainer">
            <img width="575" src={eventInfo?.image_2.asset.url} alt="hola" />
          </div>
        </div>
        <div id="del3" className="delayed-section" data-scrub="0.6">
          <div className="innerContainer">
            <img width="575" src={eventInfo?.image_3.asset.url} alt="hola" />
          </div>
        </div>
        <div id="del4" className="delayed-section" data-scrub="0.6">
          <div className="innerContainer">
            <img width="575" src={eventInfo?.image_4.asset.url} alt="hola" />
          </div>
        </div>
        <div id="del5" className="delayed-section" data-scrub="0.6">
          <div className="innerContainer">
            <img width="575" src={eventInfo?.image_5.asset.url} alt="hola" />
          </div>
        </div>
      </SecondaryContent>
      <MarqueeTest />
    </EventPageWrapper>
  );
};
