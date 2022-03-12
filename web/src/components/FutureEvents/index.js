import React, { useState } from "react";
import { FutureEventsStyled } from "./style";
import { Link } from "gatsby";
import {EventPage } from '../EventPage'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import {MarqueeTest} from '../MarqueeTest'

export const FutureEvents = () => {
  const [key, setKey] = useState("home");
  return (
    <FutureEventsStyled>
      {/* <MarqueeTest /> */}
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabSelector"
      >
        <Tab
          eventKey="home"
          title="Take Flight Immersive"
          tabClassName="individualTab"
        >
          <EventPage />
        </Tab>
        <Tab
          eventKey="profile"
          title="Take Flight Intensive"
          tabClassName="individualTab"
        >
          <EventPage />
        </Tab>
        <Tab
          eventKey="contact"
          title="Take Flight Tour"
          tabClassName="individualTab"
        >
          <EventPage />
        </Tab>
      </Tabs>
    </FutureEventsStyled>
  );
};
