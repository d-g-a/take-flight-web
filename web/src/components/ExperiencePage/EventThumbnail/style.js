import styled from "styled-components";
import { SM, MD, LG } from "../../../constants/mediaQueries";

export const EventThumnailWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  /* background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  background-color: #000;
  color: #f2e7d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .EventDetails {
    margin: 25px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      text-transform: uppercase;
      font-size: 48px;
      margin: 0;
      @media (max-width: ${LG}) {
        font-size: 40px;
      }
      @media (max-width: ${MD}) {
        font-size: 32px;
      }
      @media (max-width: ${SM}) {
        font-size: 24px;
      }
    }
    p {
      padding-bottom: 20px;
      font-family: acumin-pro-extra-condensed, sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 40px;
      text-align: center;
      width: 80vw;
      @media (max-width: ${LG}) {
        font-size: 32px;
        width: 90vw;
      }
      @media (max-width: ${MD}) {
        font-size: 24px;
        width: 95vw;
      }
      @media (max-width: ${SM}) {
        font-size: 22px;
      }
    }

    .titleButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 20px;
    }
  }
  .GetTicketsButton {
    border-radius: 40px;
    width: 300px;
    height: 60px;
    background-color: #04a025;
    border: none;
    margin-left: 50px;
    a {
      text-decoration: none;
      color: #f2e7d7;
      font-size: 32px;
    }
    a:hover {
      color: black;
    }
  }
`;
