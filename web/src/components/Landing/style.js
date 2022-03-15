import styled from "styled-components";

export const LandingStyled = styled.div`
  background-color: black;
  color: white;
  height: 300vh;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .TakeFlight3D {
    padding-top: 20px;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    height: 70vh;

    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    img {
      width: 90vw;
    }
  }
`;

export const SecondaryContent = styled.div`
  font-family: "Signika Negative", sans-serif; 
  font-weight: 300;
  height: 200vh;
  text-align: center;

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
  }

  #del2 {
    top: 190vh;
    left: 35vw;
  }

  #del3 {
    top: 100vh;
    left: 60vw;
  }

  #del4 {
    top: 120vh;
    left: 65vw;
  }

  #del5 {
    top: 140vh;
    left: 5vw;
    text-align: left;
  }
  #del6 {
    top: 170vh;
    left: 68vw;
    text-align: right;
  }

  .sub-title {
    text-transform: uppercase;
    width: 28vw;
    font-size: 40px;
  }

`;
