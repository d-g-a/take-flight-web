import React from "react";
import SEO from "../components/seo";
import { ErrorPage } from "../components/ErrorPage";
import { Helmet } from "react-helmet";
import favicon from "../images/tk_favicon.png";

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Take Flight 404 | Not found" />
      <Helmet>
        <meta name="icon" href={favicon} />
      </Helmet>
      <ErrorPage />
    </>
  );
};

export default NotFoundPage;
