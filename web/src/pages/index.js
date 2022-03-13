import React from "react";
import SEO from "../components/seo";
import { AnimationTest } from "../components/AnimationTest";
import { Layout } from "../components/Layout";




const IndexPage = (props) => {

  return (
    <Layout>
      <SEO
        //title={site.title}
        //description={site.description}
        //keywords={site.keywords}
      />
  
        <AnimationTest />
    </Layout>
  );
};

export default IndexPage;
