import React from 'react';
import { HamburgerMenuWrapper, Menu, LogoWrapper } from './style';
import { Link } from 'gatsby';

export const HamburgerMenu = ({ close, eventUrl }) => {
  return (
    <HamburgerMenuWrapper>
        <LogoWrapper>
        <Link to="/" > LOGO</Link>
        </LogoWrapper>
        <Menu>
          <button className="events">
            <a href="#experience">EXPERIENCE</a>
          </button>
          <button className="events">
            <Link to="#teachers">TEACHERS</Link>
          </button>
          <button className="events">
            <Link to="/events">UPCOMING EVENTS</Link>
          </button>
          <button className="events">
            <Link to={eventUrl}>GET YOUR TICKETS</Link>
          </button>
        </Menu>
    </HamburgerMenuWrapper>
  );
};
