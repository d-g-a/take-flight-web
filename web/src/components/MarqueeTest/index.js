import React, { useEffect } from "react";
import { MarqueeStyled } from "./style";

export const MarqueeTest = () => {


    useEffect(() => {
        document.getElementsByClassName("marquee", function() {
            let marqueeClass = "marquee__content";
            let tickerText = document.getElementsByClassName(marqueeClass).children();
            tickerText.clone().appendTo(marqueeClass);
            tickerText.clone().appendTo(marqueeClass);
          });
    }, [])
    
  return (
    <MarqueeStyled>
      <div className="marquee">
        <div className="marquee__content" id="marquee__content">
          <ul className="list-inline">
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
            <li>GET YOUR TICKETS</li>
          </ul>
        </div>
      </div>
    </MarqueeStyled>
  );
};
