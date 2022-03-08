import React, { useEffect } from "react";
import { EventTabsStyled } from "./style";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

export const ExperienceTabs = () => {

useEffect(() => {
// Today header handling
// keep at bottom
ScrollTrigger.create({
  trigger: ".sticky-today",
  start: "top bottom-=150",
  endTrigger: ".today-content",
  end: "bottom bottom-=75",
  pin: true,
  pinSpacing: false
});

// keep at top
ScrollTrigger.create({
  trigger: ".sticky-today",
  start: "top top+=75",
  endTrigger: "html",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false
});


// Tomorrow header handling
// keep at bottom
ScrollTrigger.create({
  trigger: ".sticky-tomorrow",
  start: "top bottom-=75",
  endTrigger: ".tomorrow-content",
  end: "bottom bottom-=75",
  pin: true,
  pinSpacing: false
});

// keep at top
ScrollTrigger.create({
  trigger: ".sticky-tomorrow",
  start: "top top+=150",
  endTrigger: "html",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false
});

}, []);


  return (
    <EventTabsStyled>
      <div className="nav">
        <h2>Experience</h2>
      </div>

      <div className="intro blue"></div>

      <div className="today-page">
        <div className="today-header green sticky-today">
          <h2>Today header</h2>
        </div>

        <div className="today-content green">
          <p>Today content</p>
          <p>Today content</p>
          <p>Today content</p>
          <p>Today content</p>
          <p>Today content</p>
          <p>Today content</p>
          <p>Today content</p>
          <p>Today content</p>
          <p>Today content</p>
          <p>Today content</p>
          
        </div>
      </div>

      <div className="tomorrow-page">
        <div className="tomorrow-header purple sticky-tomorrow">
          <h2>Tomorrow header</h2>
        </div>

        <div className="tomorrow-content purple">
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
          <p>Tomorrow content</p>
        
        </div>
      </div>

      <div className="footer">
        <p>Footer</p>
      </div>
    </EventTabsStyled>
  );
};
