import React from "react";
import { MarqueeHeaderWrapper } from "./style";

export const MarqueeHeader = ({ marqueeText }) => {
  return (
    <MarqueeHeaderWrapper>
      <div className="marquee">
        <div className="track">
          <div className="content">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>
      </div>
    </MarqueeHeaderWrapper>
  );
};
