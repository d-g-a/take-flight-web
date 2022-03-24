import styled from "styled-components";
import "../../static/fonts/fonts.css";
import landingTF from "../../images/tf_landing.jpeg";

export const LandingStyled = styled.div`
  background-color: black;
  color: white;
  height: 250vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-image: url(${(props) => props.landingImage});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;

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
      width: 60vw;
    }
  }
`;

export const SecondaryContent = styled.div`
  font-family: acumin-pro-extra-condensed, sans-serif;

  font-weight: 900;

  font-style: normal;

  height: 200vh;
  text-align: center;

  color: #f2e7d7;

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
    top: 120vh;
    left: 65vw;
  }

  #del5 {
    top: 120vh;
    left: 5vw;
    text-align: left;
  }
  #del6 {
    top: 170vh;
    left: 58vw;
    text-align: left;
  }

  .sub-title {
    text-transform: uppercase;
    width: 40vw;
    font-size: 48px;
  }
`;
