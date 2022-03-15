import React from "react";
import SEO from "../components/seo";
import { ErrorPage } from "../components/ErrorPage";
import {FloatingFooter} from '../components/FloatingFooter'

const NotFoundPage = () => {
return(
  <FloatingFooter>
    <SEO title="404: Not found" />
      <ErrorPage />
  </FloatingFooter>
)};

export default NotFoundPage;
