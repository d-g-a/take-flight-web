import React from "react";
import { HamburgerMenuWrapper, Menu, LogoWrapper } from "./style";
import { Link } from "gatsby";
import isotipo from "../../images/isotipo.svg";
import { HamburgerIcon } from "../HamburgerIcon"; 

export const HamburgerMenu = ({ close, eventUrl }) => {
  return (
    <HamburgerMenuWrapper>
      <Menu>
        <Link to="#experience" onClick={close}>
          EXPERIENCE
        </Link>
        <Link to="#teachers" onClick={close}>
          TEACHERS
        </Link>
        <Link to="/events" onClick={close}>
          UPCOMING EVENTS
        </Link>
        <Link to={eventUrl} onClick={close}>
          GET YOUR TICKETS
        </Link>
      </Menu>
      <LogoWrapper>
        <Link to="/home" onClick={close}>
          <img src={isotipo} alt="logo" />
        </Link>
      </LogoWrapper>
      <HamburgerIcon open={true} onClick={close} />
    </HamburgerMenuWrapper>
  );
};
