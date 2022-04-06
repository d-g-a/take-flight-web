import React from "react";
import SEO from "../components/seo";
import { AnimationTestTwo } from "../components/AnimationTestTwo";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO
      //title={site.title}
      //description={site.description}
      //keywords={site.keywords}
      />
      <Link to="/home">HOME</Link>
    </Layout>
  );
};

export default IndexPage;
