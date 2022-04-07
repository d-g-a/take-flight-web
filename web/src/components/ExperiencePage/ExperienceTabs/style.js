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
  position: relative;

  p {
    position: absolute;
    width: 80vw;
    text-align: center;
    font-size: 64px;
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

  .left{
    width: 25vw;
    overflow: hidden;
    margin-top: 100px;
    img{
      width: 100%;
      height: 60%;
      object-fit: contain;
      border-radius: 20px;
    }

  }
`;
