import React from "react";
import { EventThumnailWrapper } from "./style";
import { DateMarquee } from "../../DateMarquee";

export const EventThumbnail = ({ backgroundImage, eventInfo }) => {
  return (
    <EventThumnailWrapper backgroundImage={backgroundImage}>
      <DateMarquee eventDate={eventInfo.dates} ticketUrl={eventInfo.url} />
      <div className="EventDetails">
        <div className="titleButton"></div>
        <p>{eventInfo.thumbnail}</p>
        <div className="gallery">
          <div className="thumbnailImage first">
            <img src={eventInfo?.image_1.asset.url} alt="thumbnail" />
          </div>
          <div className="thumbnailImage">
            <img src={eventInfo?.image_2.asset.url} alt="thumbnail" />
          </div>
        </div>
      </div>
    </EventThumnailWrapper>
  );
};
