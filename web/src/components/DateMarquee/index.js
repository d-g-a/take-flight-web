import React, { useEffect } from "react";
import { DateMarqueeWrapper } from "./style";

export const DateMarquee = ({ eventDate, ticketUrl }) => {
  useEffect(() => {
    document.getElementsByClassName("marquee", function () {
      let marqueeClass = "marquee__content";
      let tickerText = document.getElementsByClassName(marqueeClass).children();
      tickerText.clone().appendTo(marqueeClass);
      tickerText.clone().appendTo(marqueeClass);
    });
  }, []);

  const dateFormatter = (date) => {
    let newDate = date
      ?.split("-")
      .reverse()
      .join("-")
      .replace("-", "/")
      .replace("-", "/");
    return newDate;
  };

  return (
    <DateMarqueeWrapper>
      <div className="marquee">
        <div className="marquee__content" id="marquee__content">
          <a href={`https://${ticketUrl}`}>
            <ul className="list-inline">
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
              <li>{dateFormatter(eventDate)}</li>
            </ul>
          </a>
        </div>
      </div>
    </DateMarqueeWrapper>
  );
};
