import React from "react";
import { FloatingFooterStyled } from "./style";
import { Link } from "gatsby";

export const FloatingFooter = ({ children }) => {
  return (
    <FloatingFooterStyled>
      {children}
      <footer>
        <div className="left">
          <button className="events">
            <a href="#experience_page">EXPERIENCE</a>
          </button>
          <button className="events">
            <Link to="/events">TEACHERS</Link>
          </button>
          <button className="events">
            <Link to="/events">UPCOMING EVENTS</Link>
          </button>
        </div>
        <div className="right">
          <button className="events">
            <Link to="/events">GET YOUR TICKETS</Link>
          </button>
        </div>
        {/* <button className="contact">CONTACT</button> */}
      </footer>
    </FloatingFooterStyled>
  );
};
