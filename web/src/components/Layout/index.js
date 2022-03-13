import React from "react";
import { Footer } from "../Footer";
import { LayoutStyled } from "./style";

export const Layout = ({ children}) => (
  <LayoutStyled>
    <div>{children}</div>
    {/* <Footer /> */}
  </LayoutStyled>
);


