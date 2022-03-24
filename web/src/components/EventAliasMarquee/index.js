import React from "react";
import { EventAliasMarqueeWrapper } from "./style";

export const EventAliasMarquee = ({ eventAlias }) => {
  return (
    <EventAliasMarqueeWrapper>
      <div className="marquee">
        <div className="track">
          <div className="content">
            <span>{eventAlias}</span>
            <span>{eventAlias}</span>
            <span>{eventAlias}</span>
            <span>{eventAlias}</span>
          </div>
        </div>
      </div>
    </EventAliasMarqueeWrapper>
  );
};
