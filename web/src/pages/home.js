import React from "react";
import { GlobalScroll } from "../components/GlobalScroll";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <meta name="icon" href="../images/favicon.ico" />
      </Helmet>
      <GlobalScroll />
    </Layout>
  );
};

export default Home;
