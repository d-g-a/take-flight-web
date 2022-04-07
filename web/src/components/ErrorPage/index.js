import React from "react";
import { ErrorPageWrapper } from "./style";
import isotipo from '../../images/isotipo.svg';
import { Link } from "gatsby";

export const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <Link to="/home">
        <h1>NOT FOUND</h1>
        <h3>GO BACK HOME</h3>
        <img src={isotipo} alt="Take Flight" />
      </Link>
    </ErrorPageWrapper>
  );
};
