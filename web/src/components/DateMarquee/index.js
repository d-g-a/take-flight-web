import React  from "react";
import { DateMarqueeWrapper } from "./style";

export const DateMarquee = ({ eventDate }) => {
  return (
    <DateMarqueeWrapper>
      <div className="marquee">
        <div className="track">
          <div className="content">
            <span>{eventDate}</span>
            <span>{eventDate}</span>
            <span>{eventDate}</span>
            <span>{eventDate}</span>
            
          </div>
        </div>
      </div>
    </DateMarqueeWrapper>
  );
};
