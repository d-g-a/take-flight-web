import styled from "styled-components";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const EventPageWrapper = styled.div`
  width: 100vw;
  height: auto;
  background-color: black;
  color: #f2e7d7;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      font-size: 54px;
      margin-bottom: 50px;
      font-family: "baikal";
      font-weight: bold;
      text-align: center;
      @media (max-width: 640px) {
        font-size: 32px;
      }
      
    }

    p {
      width: 85vw;
      padding-bottom: 20px;
      font-family: acumin-pro-extra-condensed, sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 40px;
      text-align: center;
      @media (max-width: ${LG}) {
        font-size: 32px;
        width: 90vw;
      }
    }

    .titleButton {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
    }
  }
  .GetTicketsButton {
    border-radius: 40px;
    width: 300px;
    height: 60px;
    background-color: #04a025;
    border: none;
    @media (max-width: ${MD}) {
      width: 220px;
      height: 60px;
    }
    @media (max-width: ${SM}) {
      width: 200px;
      height: 50px;
    }
    a {
      text-decoration: none;
      color: #f2e7d7;
      font-size: 24px;
      @media (max-width: ${LG}) {
        font-size: 20px;
      }
      @media (max-width: ${MD}) {
        font-size: 18px;
      }
      @media (max-width: ${SM}) {
        font-size: 16px;
      }
    a:hover {
      color: black;
    }
  }
`;

export const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  color: #f2e7d7;
  background-color: black;
  font-size: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 80px;
    margin-bottom: 20px;
  }
  img {
    width: 100px;
    color: #f2e7d7;
  }
`;
