import React from "react";
import { FutureEvents } from "../components/FutureEvents";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";

const Events = () => {
  return (
    <Layout>
      <SEO title="Take Flight | Events" />
      <Helmet>
        <meta name="icon" href="../images/favicon.ico" />
      </Helmet>
      <FutureEvents />
    </Layout>
  );
};

export default Events;
