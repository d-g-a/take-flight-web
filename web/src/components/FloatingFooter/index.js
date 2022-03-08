import React from "react";
import { FloatingFooterStyled } from "./style";
import { Link } from "gatsby";

export const FloatingFooter = ({ children }) => {
  return (
    <FloatingFooterStyled>
      {children}
      <footer>
        <button className="events"><Link to="/events">UPCOMING EVENTS</Link></button>
        <button className="contact">CONTACT</button>
      </footer>
    </FloatingFooterStyled>
  );
};
