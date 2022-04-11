import React, { useState, useEffect } from "react";
import { EventsPageStyled } from "./style";
import { ExperienceTabs } from "./ExperienceTabs";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";

import sanityClient from "../../client.js";

export const ExperiencePage = () => {
  const [allEvents, setAllEvents] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "future-events"]{
        title,
        eventAlias,
        location,
        city,
        dates,
        thumbnail,
        description,
        url,
        graffiti{
          asset ->{
            _id,
            url
          }
        },
        image_2{
          asset ->{
            _id,
            url
          }
        },
      }`
      )
      .then((data) => setAllEvents(data))
      .catch(console.error);
  }, []);

  return (
    <EventsPageStyled id="experience">
      <div className="Content">
        <h2>ABOUT THE EXPERIENCE</h2>
        <ExperienceTabs />
        <div className="events">
          {allEvents?.map((event) => (
            <Link to={`/events#${event.title}`}>
              <button className="eventButton">
                <img src={event.graffiti.asset.url} alt="test" />
                <h4>{event.title}</h4>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </EventsPageStyled>
  );
};
