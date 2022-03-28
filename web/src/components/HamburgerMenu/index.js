import React from "react";
import { HamburgerMenuWrapper, Menu, LogoWrapper } from "./style";
import { Link } from "gatsby";
import isotipo from "../../images/isotipo.svg";

export const HamburgerMenu = ({ close, eventUrl }) => {
  return (
    <HamburgerMenuWrapper>
      <Menu>
        <Link to="#experience" onClick={close}>
          <div>EXPERIENCE</div>
        </Link>
        <Link to="#teachers" onClick={close}>
          <div>TEACHERS</div>
        </Link>
        <Link to="/events" onClick={close}>
          <div>UPCOMING EVENTS</div>
        </Link>
        <Link to={eventUrl} onClick={close}>
          <div>GET YOUR TICKETS</div>
        </Link>
      </Menu>
      <LogoWrapper>
        <Link to="/home">
          <img src={isotipo} alt="logo" />
        </Link>
      </LogoWrapper>
    </HamburgerMenuWrapper>
  );
};
