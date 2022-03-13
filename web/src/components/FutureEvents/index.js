import React, { useState, useEffect } from "react";
import { FutureEventsStyled } from "./style";
import { Link } from "gatsby";
import { EventPage } from "../EventPage";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { MarqueeTest } from "../MarqueeTest";

import sanityClient from "../../client.js";

export const FutureEvents = () => {
  const [allEvents, setAllEvents] = useState(null);

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



  const [key, setKey] = useState("home");
  return (
    <FutureEventsStyled>
      {/* <MarqueeTest /> */}
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabSelector"
        defaultActiveKey="/home"
      >
        {allEvents?.map((event, index) => {

          return (
            <Tab
              eventKey={event.title}
              title={event.title}
              tabClassName="individualTab"
              activeKey={event.title}
            >
              <EventPage 
              eventInfo={event} 
              slug={event.slug.current} 
              />
            </Tab>
          );
        })}
      </Tabs>
    </FutureEventsStyled>
  );
};
