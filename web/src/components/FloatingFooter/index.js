import React, { useEffect, useState } from "react";
import { FloatingFooterStyled } from "./style";
import { Link } from "gatsby";
import { HamburgerMenu } from "../HamburgerMenu";
import { HamburgerIcon } from "../HamburgerIcon";
import Popup from "reactjs-popup";

import sanityClient from "../../client.js";

export const FloatingFooter = ({ children }) => {
  const [marqueeText, setMarqueeText] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "marquee-text"]{
          _id,
          title,
          url,
        }`
      )
      .then((data) => setMarqueeText(data))
      .catch(console.error);
  }, []);

  const contentStyle = {
    border: "none",
    background: "black"
  };

  return (
    <FloatingFooterStyled>
      {children}
      <footer className="display">
        <div className="left">
          <button className="events">
            <a href="#experience">EXPERIENCE</a>
          </button>
          <button className="events">
            <Link to="#teachers">TEACHERS</Link>
          </button>
          <button className="events">
            <Link to="/events">UPCOMING EVENTS</Link>
          </button>
        </div>
        <div className="right">
          <button className="events">
            <Link to={marqueeText?.[0].url}>GET YOUR TICKETS</Link>
          </button>
        </div>
      </footer>
      <footer className="mobile">
        <Popup
          modal
          // overlayStyle={{ background: "black" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={(open) => <HamburgerIcon open={open} />}
        >
          {(close) => (
            <HamburgerMenu close={close} eventUrl={marqueeText?.[0].url} />
          )}
        </Popup>
      </footer>
    </FloatingFooterStyled>
  );
};
