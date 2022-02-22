import React from "react";
import Header from "../header";

//import "../styles/layout.css";
//import * as styles from "./layout.module.css";
import { LayoutStyled } from "./style";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <LayoutStyled>
    {/* <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    /> */}
    <div>{children}</div>
    {/* <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer> */}
  </LayoutStyled>
);

export default Layout;