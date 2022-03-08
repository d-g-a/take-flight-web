import React, {useEffect} from "react";
import { MarqueeVerticalStyled } from "./style";

export const MarqueeVertical = () => {
  useEffect(() => {
    document.getElementById(function () {
      var marqueeClass = ".marquee__content";
      var $tickerText = document.getElementById(marqueeClass).children();
      $tickerText.clone().appendTo(marqueeClass);
      $tickerText.clone().appendTo(marqueeClass);
      console.log($tickerText);
    });
  }, []);

  return (
    <MarqueeVerticalStyled>
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
          </ul>
        </div>
      </div>
    </MarqueeVerticalStyled>
  );
};
