import React, { useEffect } from "react";
import { DateMarqueeWrapper } from "./style";

export const DateMarquee = () => {

    useEffect(() => {
        document.getElementsByClassName("marquee", function() {
            let marqueeClass = "marquee__content";
            let tickerText = document.getElementsByClassName(marqueeClass).children();
            tickerText.clone().appendTo(marqueeClass);
            tickerText.clone().appendTo(marqueeClass);
          });
    }, [])
  return( 
  <DateMarqueeWrapper>
       <div className="marquee">
        <div className="marquee__content" id="marquee__content">
          <a href="https://www.instagram.com" >
          <ul className="list-inline">
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
            <li>22/01/2023</li>
          </ul>
          </a>
        </div>
      </div>
  </DateMarqueeWrapper>);
};
