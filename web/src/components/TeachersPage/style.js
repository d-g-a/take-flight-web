import styled from "styled-components";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const TeacherPageStyled = styled.div`
  background-color: black;
  color: #f2e7d7;
  padding-top: 50px;
  height: 110vh;
  width: 100vw;

  h1 {
    text-align: center;
    font-size: 72px;
    font-weight: bold;
    @media (max-width: ${SM}) {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }

  P {
    text-align: center;
  }

  .nav-tabs {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #f2e7d7;

    @media (max-width: ${SM}) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .tabSelector {
    margin: 0;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }


  .individualTab {
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    margin: 0;
    color: #f2e7d7;
  }

  .nav-link {
    margin: 0 10px;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    color: #f2e7d7
    font-size: 24px;
    padding: 0 20px;
    @media (max-width: ${SM}) {
      font-size: 18px;;
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
`;
