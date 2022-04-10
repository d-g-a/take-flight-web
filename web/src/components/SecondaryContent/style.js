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
    height: 140vh;
  }
  @media (max-width: ${SM}) {
    height: 140vh;
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
    top: 120vh;
    left: 6vw;
    width: 400px;
  }

  #del2 {
    top: 150vh;
    left: 35vw;
    width: 400px;
  }

  #del3 {
    top: 112vh;
    left: 67vw;
    width: 200px;
    right: 5vw;
  }

  #del4 {
    top: 115vh;
    left: 10%;
    right: 10%;
  }
  }

  @media (max-width: ${MD}) {
    #del1 {
      top: 110vh;
      left: 20vw;
      width: 60vw;
    }

    #del2 {
      top: 210vh;
      left: 20vw;
      width: 60vw;
    }

    #del3 {
      top: 150vh;
      left: 30vw;
      width: 40vw;
    }

    #del4 {
      top: 120vh;
      left: 10vw;
      right: 10vw;
    }

  } 

  @media (max-width: ${SM}) {
    #del1 {
      top: 110vh;
      left: 10vw;
      width: 80vw;
    }

    #del2 {
      top: 190vh;
      left: 10vw;
      width: 80vw;
    }

    #del3 {
      top: 140vh;
      left: 20vw;
      width: 60vw;
      right: 5vw;
    }

    #del4 {
      top: 120vh;
      left: 10vw;
      right: 10vw;
    }

  }



  .sub-title {
    text-transform: uppercase;
    width: 80vw;
    font-size: 50px;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5em;
    text-align: center;

    @media (max-width: ${LG}) {
      font-size: 48px;
      width: 90vw;
    }
    
    @media (max-width: ${MD}) {
      font-size: 40px;
    }
    @media (max-width: ${SM}) {
      width: 85vw;
      font-size: 24px;
      -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    -webkit-font-smoothing: antialiased;
  }
  } 
`;
