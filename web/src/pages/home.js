import React from "react";
import { Layout } from "../components/Layout";
import { Landing } from "../components/Landing"; 
import { SecondaryContent } from "../components/SecondaryContent"; 
import { ExperiencePage } from "../components/ExperiencePage";  
import { TeachersPage } from "../components/TeachersPage"; 
import { Footer } from "../components/Footer"; 

const Home = () => {
  return (
    <Layout>
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
            <Footer className="panel footer"/>
          </section>
    </Layout>
  );
};

export default Home;
