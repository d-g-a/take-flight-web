import React from "react";
import SEO from "../components/seo";
import { ErrorPage } from "../components/ErrorPage";

const NotFoundPage = () => {
return(
  <>
    <SEO title="404: Not found" />
      <ErrorPage />
  </>
)};

export default NotFoundPage;
