import styled from "styled-components";
import "../../static/fonts/fonts.css";

export const EventsPageStyled = styled.div`
  height: 100vh;
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

  background-color: #4814cc;
  color: white;

  .nav-tabs {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #f2e7d7;
  }

  .tabSelector {
    margin: 0;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }

  .nav-link {
    margin: 0 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
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

  .nav-link.active{
    background-color: #f2e7d7;
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
    color: #f2e7d7;
  }

  .Content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
