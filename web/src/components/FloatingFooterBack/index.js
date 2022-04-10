import React, { useEffect, useState } from "react";
import { FloatingFooterStyled } from "./style";
import { Link } from "gatsby";
import { HamburgerMenu } from "../HamburgerMenu";
import { HamburgerIcon } from "../HamburgerIcon";
import Popup from "reactjs-popup";

import sanityClient from "../../client.js";

export const FloatingFooterBack = ({ children }) => {
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
    background: "rgba(255,255,255,0)",
    border: "none",
  };

  return (
    <FloatingFooterStyled>
      {children}
      <footer className="display">
        <button className="events">
          <Link to="/home">BACK</Link>
        </button>
      </footer>
    </FloatingFooterStyled>
  );
};
