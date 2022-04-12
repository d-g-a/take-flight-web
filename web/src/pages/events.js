import React from "react";
import { FutureEvents } from "../components/FutureEvents";
import { Layout } from "../components/Layout";
import { Helmet } from "react-helmet";
import favicon from "../images/tk_favicon.png";
import SEO from "../components/seo";

const Events = () => {
  return (
    <Layout>
      <SEO title="Take Flight | Events" />
      <Helmet>
        <meta name="icon" href={favicon} />
      </Helmet>
      <FutureEvents />
    </Layout>
  );
};

export default Events;
