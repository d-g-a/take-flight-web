import React from "react";
import { GlobalScroll } from "../components/GlobalScroll";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet"; 
import favicon from "../images/tk_favicon.png";
import SEO from "../components/seo";

const Home = () => {
  return (
    <Layout>
      <SEO title="Take Flight | Home" />
      <Helmet>
        <meta name="icon" href={favicon} />
      </Helmet>
      <GlobalScroll />
    </Layout>
  );
};

export default Home;
