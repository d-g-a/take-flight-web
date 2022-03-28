import styled from "styled-components";
import { SM, MD,LG } from "../../constants/mediaQueries";

export const SecondaryContentWrapper = styled.div`
  height: 120vh;
  width: 100vw;
  text-align: center;
  color: #f2e7d7;
  background-color: #000;
  overflow: hidden;

  @media (max-width: ${MD}) {
    height: 110vh;
  }
  @media (max-width: ${SM}) {
    height: 180vh;
  }

  h2 {
    font-family: acumin-pro-extra-condensed, sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .delayed-section {
    position: absolute;
    width: 30vw;
    height: 38.87vw;
  }

  .delayed-section .inner-container {
    will-change: transform;
  }

  .delayed-section img {
    max-width: 100%;
    will-change: transform;
    border-radius: 20px;
  }

  #del1 {
    top: 110vh;
    left: 2vw;
    width: 600px;
  }

  #del2 {
    top: 130vh;
    left: 35vw;
    width: 420px;
  }

  #del3 {
    top: 100vh;
    left: 60vw;
    width: 600px;
  }

  #del4 {
    top: 110vh;
    left: 30vw;
  }

  #del5 {
    top: 150vh;
    left: 5vw;
    text-align: left;
  }
  #del6 {
    top: 150vh;
    left: 58vw;
    text-align: left;
  }

  @media (max-width: ${LG}) {
    #del1 {
    top: 110vh;
    left: 2vw;
    width: 400px;
  }

  #del2 {
    top: 130vh;
    left: 35vw;
    width: 320px;
  }

  #del3 {
    top: 100vh;
    left: 60vw;
    width: 400px;
  }

  #del4 {
    top: 110vh;
    left: 30vw;
  }

  #del5 {
    top: 150vh;
    left: 5vw;
    text-align: left;
  }
  #del6 {
    top: 150vh;
    left: 58vw;
    text-align: left;
  }
  }

  @media (max-width: ${MD}) {
    #del1 {
    top: 110vh;
    left: 2vw;
    width: 300px;
  }

  #del2 {
    top: 130vh;
    left: 35vw;
    width: 220px;
  }

  #del3 {
    top: 100vh;
    left: 60vw;
    width: 300px;
  }

  #del4 {
    top: 110vh;
    left: 30vw;
  }

  #del5 {
    top: 150vh;
    left: 5vw;
    text-align: left;
  }
  #del6 {
    top: 150vh;
    left: 58vw;
    text-align: left;
  }
  }

  @media (max-width: ${SM}) {
    #del1 {
    top: 210vh;
    left: 10vw;
    width: 350px;
  }

  #del2 {
    top: 150vh;
    left:20vw;
    width: 300px;
  }

  #del3 {
    top: 105vh;
    left: 10vw;
    width: 350px;
  }

  #del4 {
    top: 130vh;
    left: 6vw;
  }

  #del5 {
    top: 180vh;
    left: 8vw;
    text-align: left;
  }
  #del6 {
    top: 230vh;
    left: 5vw;
    text-align: left;
  }
  }



  .sub-title {
    text-transform: uppercase;
    width: 40vw;
    font-size: 48px;
    @media (max-width: ${MD}) {
      font-size: 40px;
    }
    @media (max-width: ${SM}) {
      width: 90vw;
      text-align: center;
    }
  }
`;
