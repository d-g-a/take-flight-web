import React from "react";
import { HamburgerIconWrapper } from "./style";

export const HamburgerIcon = ({ open, ...props }) => {
  return (
    <HamburgerIconWrapper>
      <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    </HamburgerIconWrapper>
  );
};
