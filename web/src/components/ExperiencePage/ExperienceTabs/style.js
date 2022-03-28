import styled from "styled-components";
import "../../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../../constants/mediaQueries";

export const EventTabsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-weight: 700;
  font-style: normal;

  p {
    width: 90vw;
    text-align: center;
    font-size: 60px;
    padding: 20px;
    color: #f2e7d7;
    @media (max-width: ${LG}) {
      font-size: 50px;
      width: 95vw;
      margin-bottom: 20px;
    }
    @media (max-width: ${MD}) {
      font-size: 44px;
    }
    @media (max-width: ${SM}) {
      font-size: 32px;
    }
  }
`;
