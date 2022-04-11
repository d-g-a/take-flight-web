import styled from "styled-components";
import "../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const EventsPageStyled = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "baikal", sans-serif;
  font-weight: bold;
  color: #f2e7d7;

  text-transform: uppercase;
  overflow: hidden;

  background-color: #f2e7d7;
  color: white;

  .nav-tabs {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #f2e7d7;
    @media (max-width: ${LG}) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .tabSelector {
    margin: 0;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }

  .nav-link.active {
    background-color: #f2e7d7;
  }
  .individualTab {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin: 0 10px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    color: #f2e7d7;
  }

  .nav-link {
    margin: 0 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    @media (max-width: ${SM}) {
      font-size: 14px;
    }
  }

  ul {
    margin-bottom: 0 !important;
  }

  h2 {
    margin: 25px;
    padding: 0;
    font-size: 64px;
    text-align: center;
    font-family: "baikal", sans-serif;
    font-weight: bold;
    color: #04a025;
    -webkit-text-stroke-width: px;
    -webkit-text-stroke-color: black;
    -webkit-font-smoothing: antialiased;
    margin-bottom: 20px;
    @media (max-width: ${SM}) {
      font-size: 32px;
    }
  }

  .events {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .eventButton {
    border: 1.5px solid black;
    background-color: transparent;
    border-radius: 40px;
    padding: 20px 30px;
    position: relative;
    width: auto;
    min-width: 600px;
    margin: 20px 20px 40px;
    overflow: visible;
    @media (max-width: ${MD}) {
      min-width: 400px;
    }

    @media (max-width: ${SM}) {
      min-width: 320px;
    }
    h4 {
      font-family: "baikal";
      font-style: bold;
      font-weight: bold;
      font-size: 24px;
      margin: 0;
      padding: 0;
      @media (max-width: ${MD}) {
        font-size: 18px;
      }
      @media (max-width: ${SM}) {
        font-size: 14px;
      }
    }

    img {
      width: 100%;
      position: absolute;
      right: 10px;
      bottom: 20px;
    }

    a:hover {
      color: #04a025;
    }
  }

  .Content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
