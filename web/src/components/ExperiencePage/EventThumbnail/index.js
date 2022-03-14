import React from 'react'
import { EventThumnailWrapper } from './style'
import { DateMarquee } from '../../DateMarquee'

export const EventThumbnail = ({backgroundImage, eventInfo}) => {
  return (
    <EventThumnailWrapper backgroundImage={backgroundImage}>
        <DateMarquee eventDate={eventInfo.eventDate} ticketUrl={eventInfo.url} />
      <div className="EventDetails">
        <div className="titleButton">
          <h2>{eventInfo.title}</h2>
          <button className="GetTicketsButton">
            <a href={`https://${eventInfo.url}`}>GET TICKETS</a>
          </button>
        </div>
        <p>{eventInfo.description}</p>
      </div>
    </EventThumnailWrapper>
  )
}
