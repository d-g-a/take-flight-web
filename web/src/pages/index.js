import React from "react";
import SEO from "../components/seo";
import { AnimationTestTwo } from "../components/AnimationTestTwo";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import { Landing } from "../components/Landing";
import { SecondaryContent } from "../components/SecondaryContent";
import { ExperiencePage } from "../components/ExperiencePage";
import { TeachersPage } from "../components/TeachersPage";
import { Footer } from "../components/Footer";
import { FloatingFooter } from "../components/FloatingFooter";

const IndexPage = (props) => {
  return (
    <FloatingFooter>
      <Layout>
        <SEO
        //title={site.title}
        //description={site.description}
        //keywords={site.keywords}
        />
        <Link to="/home">HOME</Link>
        <section className="panel landing">
          <Landing />
        </section>
        <section className="panel landing">
          <SecondaryContent />
        </section>
        <section className="panel experience" id="experience_page">
          <ExperiencePage />
        </section>
        <section className="panel teachers">
          <TeachersPage />
        </section>
        <section>
          <Footer className="panel footer" />
        </section>
      </Layout>
    </FloatingFooter>
  );
};

export default IndexPage;
