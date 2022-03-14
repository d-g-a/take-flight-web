import React from "react";
import SEO from "../components/seo";
import { AnimationTest } from "../components/AnimationTest";
import { AnimationTestTwo } from "../components/AnimationTestTwo";
import { Layout } from "../components/Layout";




const IndexPage = (props) => {

  return (
    <Layout>
      <SEO
        //title={site.title}
        //description={site.description}
        //keywords={site.keywords}
      />
  
        <AnimationTestTwo />
    </Layout>
  );
};

export default IndexPage;
