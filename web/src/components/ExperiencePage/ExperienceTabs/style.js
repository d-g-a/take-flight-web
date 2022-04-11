import styled from "styled-components";
import "../../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../../constants/mediaQueries";

export const EventTabsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'baikal';
  font-style: lighter;
  font-weight: lighter;
  margin-bottom: 50px;


  p {
    margin-top: 10px;

    width: 80vw;
    text-align: center;
    font-size: 24px;
    padding: 20px;
    color: #000;
    @media (max-width: 1260px) {
      position: relative;
    }
    @media (max-width: ${LG}) {
      font-size: 20px;
      width: 95vw;
      margin-bottom: 20px;
    }
    @media (max-width: ${SM}) {
      font-size: 18px;
    }
  }

  .left {
    width: 25vw;
    overflow: hidden;
    margin-top: 100px;
    @media (max-width: 1260px) {
      width: 60vw;
      margin: 20px;
    }
    img {
      width: 100%;
      height: 60%;
      object-fit: contain;
      border-radius: 20px;
      @media (max-width: 1260px) {
        height: 40%;
        margin-bottom: 50px;
      }
    }
  }
`;
