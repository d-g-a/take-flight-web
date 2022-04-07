import styled from "styled-components";
import "../../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../../constants/mediaQueries";

export const EventTabsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-weight: 700;
  font-style: normal;
  position: relative;

  p {
    margin-top: 10px;
    position: absolute;
    width: 80vw;
    text-align: center;
    font-size: 64px;
    padding: 20px;
    color: #f2e7d7;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    @media (max-width: 1260px ) {
      position: relative
    }
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
    @media (max-width: 1260px ) {
      width: 60vw;
      margin: 20px;
    }
    img{
      width: 100%;
      height: 60%;
      object-fit: contain;
      border-radius: 20px;
      @media (max-width: 1260px ) {
        height: 40%;
        margin-bottom: 50px;
    }

    }

  }
`;
