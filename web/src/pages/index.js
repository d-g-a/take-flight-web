import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { IntroVideo } from "../components/IntroVideo";
import { Helmet } from "react-helmet";
import favicon from "../images/tk_favicon.png";

const IndexPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <meta name="icon" href={favicon} />
      </Helmet>
      <SEO
        title="Take Flight"
        description="Take Flight Intensive"
      //keywords={site.keywords}
      />
      <IntroVideo />
    </Layout>
  );
};

export default IndexPage;
