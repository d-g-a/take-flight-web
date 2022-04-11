import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import { IntroAnimation } from "../components/IntroAnimation"  
import { IntroVideo } from "../components/IntroVideo"; 

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO
      //title={site.title}
      //description={site.description}
      //keywords={site.keywords}
      />
     <IntroVideo />
    </Layout>
  );
};

export default IndexPage;
