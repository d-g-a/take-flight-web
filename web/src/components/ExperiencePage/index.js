import React from "react";
import { MarqueeVertical } from "../MarqueeVertical";
import { EventsPageStyled } from "./style";
import { ExperienceTabs } from "./ExperienceTabs";

export const ExperiencePage = () => {
  return (
    <EventsPageStyled>
      <div className="Content">
        {/* <h2>EXPERIENCE</h2> */}
        {/* <p>
          Take Flight in an immersive dance experience like no other. Dancers
          gather from all over the world, under one roof, and immerse themselves
          in an intensive training program, with the world’s leading, and most
          influencial movement artists, choreographers, and educators. 
        </p>
        <p>
        Highlight
          the upcoming events Take Flight Immersive Take Flight Intensive Take
          Flight Tour
        </p> */}
        {/* <ExperienceTabs /> */}
        Experiencie Page
      </div>

      <div className="Vertical">
        <MarqueeVertical className="Marquee" />
      </div>
    </EventsPageStyled>
  );
};
