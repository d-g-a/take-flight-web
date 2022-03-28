import styled from "styled-components";
import "../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const FutureEventsStyled = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
  padding-top: 40px;
  font-family: "baikal", sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  overflow: hidden;

  a:hover {
    color: #4814cc;
  }
  .header {
    display: flex;
    flex-direction: row;
    a {
      color: #f2e7d7;
      padding-left: 20px;
      @media (max-width: ${SM}) {
        font-size: 12px;
      }
    }
    a:hover {
      color: #4814cc;
    }
  }

  h1 {
    font-size: 64px;
    text-align: center;
    padding-bottom: 20px;
    color: #f2e7d7;
    font-family: "baikal", sans-serif;
    font-weight: bold;
    @media (max-width: ${LG}) {
      margin-top: 16px;
      font-size: 54px;
    }
    @media (max-width: ${MD}) {
      font-size: 48px;
    }
    @media (max-width: ${SM}) {
      font-size: 32px;
    }
  }
  .tabSelector {
    margin: 0;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }

  .nav-tabs {
    display: flex;
    flex-direction: row;
    @media (max-width: ${LG}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }

  .nav-link {
    margin: 0 10px;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    color: #f2e7d7;
    text-transform: uppercase;
    @media (max-width: ${SM}) {
      font-size: 12px;
    }
  }

  .nav-tabs .nav-link.active {
    background-color: #f2e7d7;
    @media (max-width: ${SM}) {
      font-size: 12px;
    }
  }

  .individualTab {
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    margin: 0;
    color: #f2e7d7;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    @media (max-width: ${SM}) {
      font-size: 12px;
    }
  }

  .nav-link.active {
    color: #4814cc;
    background-color: #f2e7d7;
    border-color: #f2e7d7;
  }

  ul {
    margin-bottom: 0 !important;
  }

  .mb-3 {
    margin-bottom: 0;
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
    @media (max-width: ${SM}) {
      font-size: 40px;
    }
  }
  img {
    width: 100px;
    @media (max-width: ${SM}) {
      width: 60px;
    }
  }
`;
