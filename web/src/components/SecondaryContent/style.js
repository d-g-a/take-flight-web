import styled from "styled-components";
import { SM, MD, LG } from "../../constants/mediaQueries";

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
    font-family: "baikal", sans-serif;
    font-weight: bold;
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
    top: 120vh;
    left: 6vw;
    width: 550px;
  }

  #del2 {
    top: 150vh;
    left: 35vw;
    width: 660px;
  }

  #del3 {
    top: 112vh;
    left: 67vw;
    width: 400px;
    right: 5vw;
  }

  #del4 {
    top: 115vh;
    left: 10%;
    right: 10%;
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
    left: 30vw;
    text-align: right;
  }

  }



  .sub-title {
    text-transform: uppercase;
    width: 80vw;
    font-size: 50px;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    line-height: 1.5em;

    
    @media (max-width: ${MD}) {
      font-size: 40px;
    }
    @media (max-width: ${SM}) {
      width: 90vw;
      text-align: center;
    }
  }
`;
