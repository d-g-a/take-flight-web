import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { IntroVideo } from "../components/IntroVideo";
import { Helmet } from "react-helmet";

const IndexPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <meta name="icon" href="../images/favicon.ico" />
      </Helmet>
      <SEO
        title="Take Flight"
        //description="Take Flight Intensive"
        //keywords={site.keywords}
      />
      <IntroVideo />
    </Layout>
  );
};

export default IndexPage;
