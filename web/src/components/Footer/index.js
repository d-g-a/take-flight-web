import React from "react";
import { FooterWrapper } from "./style";
import isotipo from '../../images/isotipo.svg'

export const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <a>YOUTUBE</a>
        </li>
        <li>
          <a>INSTAGRAM</a>
        </li>
        <li>
          <a>HELLO@TAKEFLIGHT.COM</a>
        </li>
        <li>
          <img src={isotipo} alt="Isotipo" />
        </li>
      </ul>
    </FooterWrapper>
  );
};
