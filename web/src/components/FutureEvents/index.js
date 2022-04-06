import React, { useState, useEffect } from "react";
import { FutureEventsStyled, LoadingWrapper } from "./style";
import { Link } from "gatsby";
import { EventPage } from "../EventPage";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { MarqueeTest } from "../MarqueeTest";
import isotipo from "../../images/isotipo.svg";

import sanityClient from "../../client.js";

export const FutureEvents = () => {
  const [allEvents, setAllEvents] = useState(null);
  const [key, setKey] = useState(allEvents?.[0]?.title);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "future-events"]{
        title,
        eventAlias,
        location,
        city,
        dates,
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
        image_6{
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

  console.log(allEvents);

  return (
    <div>
      {!allEvents ? (
        <LoadingWrapper>
          <h1>LOADING</h1>
          <img src={isotipo} alt="Take Flight" />
        </LoadingWrapper>
      ) : (
        <FutureEventsStyled>
          <div className="header">
            <Link to="/">BACK</Link>
          </div>
          <h1>UPCOMING EVENTS</h1>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 tabSelector"
            defaultActiveKey={allEvents?.[0]?.title}
          >
            {allEvents?.map((event, index) => {
              return (
                <Tab
                  eventKey={event.title}
                  title={event.title}
                  tabClassName="individualTab"
                  activeKey={event.title}
                >
                  <EventPage eventInfo={event} key={key }/>
                </Tab>
              );
            })}
          </Tabs>
        </FutureEventsStyled>
      )}
    </div>
  );
};
