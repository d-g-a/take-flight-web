import React, { useState } from "react";
import { FooterWrapper } from "./style";
import isotipo from "../../images/isotipo.svg";
import isotipoPurple from "../../images/isotipo_purple.svg";
import { Link } from "gatsby";

export const Footer = ({linkTo}) => {
  const [hover, setHover] = useState(false);
  return (
    <FooterWrapper>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=kPX4PQeP0ZU ">YOUTUBE</a>
        </li>
        <li>
          <a href="https://www.instagram.com/takeflightintensive_dublin">INSTAGRAM</a>
        </li>
        <li>
          <a href="mailto:hello@takeflight.world">CONTACT</a>
        </li>
        <li
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="logo"
        >
          <Link to={linkTo}>
            <img src={hover ? isotipoPurple : isotipo} alt="Isotipo" />
          </Link>
        </li>
      </ul>
    </FooterWrapper>
  );
};
