import styled from "styled-components";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const FloatingFooterStyled = styled.div`
  .display {
    @media (max-width: ${MD}) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media (max-width: ${MD}) {
      display: flex;
    }
  }
  footer {
    position: fixed;
    bottom: 30px;
    left: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 97vw;
    button {
      border-radius: 25px;
      color: #f2e7d7;
      //height: 50px;
      padding: 10px 20px;
      //font-family: Acumin Variable Concept;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      margin-right: 20px;
      border: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: #4814cc;
      font-family: "baikal", sans-serif;
      font-weight: normal;
      margin: 0;
    }
    a:hover {
      color: #000;
    }

    .events {
      width: auto;
      background-color: #f2e7d7;
      font-size: 16px;
      border: 1.5px solid black;
    }

    .contact {
      width: auto;
      background-color: #04a025;
    }
    .contact:hover {
      width: 60vw;
    }
  }
`;
