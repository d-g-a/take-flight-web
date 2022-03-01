import React from "react";
import { FloatingFooterStyled } from "./style";

export const FloatingFooter = ({ children }) => {
  return (
    <FloatingFooterStyled>
      {children}
      <footer>
        <button className="events">UPCOMING EVENTS</button>
        <button className="contact">CONTACT</button>
      </footer>
    </FloatingFooterStyled>
  );
};
