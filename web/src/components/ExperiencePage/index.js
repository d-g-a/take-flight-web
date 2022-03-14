import React, { useState, useEffect } from "react";
import { MarqueeVertical } from "../MarqueeVertical";
import { EventsPageStyled } from "./style";
import { ExperienceTabs } from "./ExperienceTabs";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";

import { EventPage } from "../EventPage";

import { EventThumbnail } from "./EventThumbnail";

import sanityClient from '../../client.js'

export const ExperiencePage = () => {
  const [key, setKey] = useState("home");
  const [allEvents, setAllEvents] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "future-events"]{
        title,
        slug,
        eventDate,
        description,
        url,
        image_1{
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
        image_3{
          asset ->{
            _id,
            url
          }
        },
        image_4{
          asset ->{
            _id,
            url
          }
        },
        image_5{
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

  console.log(allEvents)


  return (
    <EventsPageStyled>
      <div className="Content">
        <h2>EXPERIENCE</h2>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 tabSelector"
          defaultActiveKey="home"
        >
          <Tab
            eventKey="home"
            title="ABOUT"
            tabClassName="individualTab"
            activeKey="home"
          >
            <ExperienceTabs />
          </Tab>

          {allEvents?.map((event) => (
            <Tab
            eventKey={event?.title}
            title={event?.title}
            tabClassName="individualTab"
            activeKey={event?.title}
          >
              <EventThumbnail backgroundImage={event?.image_1.asset.url} eventInfo={event}/>
              
          </Tab>
          ))}
        
        </Tabs>
      </div>
      <div className="Vertical">
        <MarqueeVertical className="Marquee" />
      </div>
    </EventsPageStyled>
  );
};
