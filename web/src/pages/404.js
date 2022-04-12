import React from "react";
import SEO from "../components/seo";
import { ErrorPage } from "../components/ErrorPage";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Take Flight | Not found" />
      <Helmet>
        <meta name="icon" href="../images/favicon.ico" />
      </Helmet>
      <ErrorPage />
    </>
  );
};

export default NotFoundPage;
