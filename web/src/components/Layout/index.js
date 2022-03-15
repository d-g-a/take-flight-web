import React from "react";
import { LayoutStyled } from "./style";

export const Layout = ({ children}) => (
  <LayoutStyled>
    <div>{children}</div>
  </LayoutStyled>
);


