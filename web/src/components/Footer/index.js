import React, { useState } from "react";
import { FooterWrapper } from "./style";
import isotipo from "../../images/isotipo.svg";
import isotipoPurple from "../../images/isotipo_purple.svg";
import { Link } from "gatsby";

export const Footer = () => {
  const [hover, setHover] = useState(false);
  return (
    <FooterWrapper>
      <ul>
        <li>
          <a href="">YOUTUBE</a>
        </li>
        <li>
          <a href="">INSTAGRAM</a>
        </li>
        <li>
          <a href="mailto:hello@takeflight.world">CONTACT</a>
        </li>
        <li
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="logo"
        >
          <Link to="#landing">
            <img src={hover ? isotipoPurple : isotipo} alt="Isotipo" />
          </Link>
        </li>
      </ul>
    </FooterWrapper>
  );
};
