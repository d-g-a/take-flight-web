import React, { useEffect } from "react";
import { EventTabsStyled } from "./style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const ExperienceTabs = () => {
  useEffect(() => {
    // Today header handling
    // keep at bottom
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".sticky-today",
      start: "top bottom-=150",
      endTrigger: ".today-content",
      end: "bottom bottom-=75",
      pin: true,
      pinSpacing: false,
    });

    // keep at top
    ScrollTrigger.create({
      trigger: ".sticky-today",
      start: "top top+=75",
      endTrigger: "html",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });

    // Tomorrow header handling
    // keep at bottom
    ScrollTrigger.create({
      trigger: ".sticky-tomorrow",
      start: "top bottom-=75",
      endTrigger: ".tomorrow-content",
      end: "bottom bottom-=75",
      pin: true,
      pinSpacing: false,
    });

    // keep at top
    ScrollTrigger.create({
      trigger: ".sticky-tomorrow",
      start: "top top+=150",
      endTrigger: "html",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });

      // Tomorrow header handling
    // keep at bottom
    ScrollTrigger.create({
      trigger: ".sticky-take-flight",
      start: "top bottom-=75",
      endTrigger: ".take-flight-tour",
      end: "bottom bottom-=75",
      pin: true,
      pinSpacing: false,
    });

    // keep at top
    ScrollTrigger.create({
      trigger: ".sticky-tomorrow",
      start: "top top+=150",
      endTrigger: "html",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <EventTabsStyled>
      <div className="nav">
        <h2>Experience</h2>
      </div>

      <div className="intro blue">
      <h2>ABOUT</h2>
          <p>
          Take Flight in an immersive dance experience like no other. Dancers
          gather from all over the world, under one roof, and immerse themselves
          in an intensive training program, with the world’s leading, and most
          influencial movement artists, choreographers, and educators. 
        </p>
        <p>
        Highlight
          the upcoming events Take Flight Immersive Take Flight Intensive  Take Flight Intensive
        </p>
        </div>

      <div className="today-page">
        <div className="today-header green sticky-today">
          <h2>The team 2021</h2>
        </div>

        <div className="today-content green">
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>
          <p>Take Flight Immersive</p>

        </div>
      </div>

      <div className="tomorrow-page">
        <div className="tomorrow-header purple sticky-tomorrow">
          <h2> Take Flight Intensive</h2>
        </div>

        <div className="tomorrow-content purple">
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
          <p>Take Flight Intensive</p>
        </div>
      </div>

      {/* <div className="take-flight">
        <div className="take-flight-header blue sticky-take-flight">
          <h2>Take Flight Tour</h2>
        </div>

        <div className="take-flight-tour green">
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
          <p>Take Flight Tour</p>
        </div>
      </div> */}

      <div className="footer">
        <p>Footer</p>
      </div>
    </EventTabsStyled>
  );
};
