import React, { useState, useEffect } from "react";
import { EventsPageStyled } from "./style";
import { ExperienceTabs } from "./ExperienceTabs";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";

import sanityClient from "../../client.js";

export const ExperiencePage = () => {
  const [allEvents, setAllEvents] = useState(null);
  const [key, setKey] = useState("about");
  const [hover, setHover] = useState("");

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
        <h2>THE EXPERIENCE</h2>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 tabSelector"
          defaultActiveKey="about"
        >
          <Tab eventKey="about" title="ABOUT" tabClassName="individualTab">
            <ExperienceTabs />
            <div className="events">
              {allEvents?.map((event, index) => (
                <Link to={`/events#${event.title}`}>
                  <button
                    className="eventButton"
                    onMouseEnter={() => setHover(event.title)}
                    onMouseLeave={() => setHover("")}
                    eventTitle={`${index}`}
                  >
                    <img src={event.graffiti.asset.url} alt="test" />
                    <a className={hover === event.title ? `hovered` : ``}>
                      {event.title}
                    </a>
                  </button>
                </Link>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </EventsPageStyled>
  );
};
