import styled from "styled-components";
import "../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const LandingStyled = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (max-width: ${MD}) {
    background-image: url(${(props) => props.landingImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  video {
    position: absolute;
    width: 100vw;
    left: 50%;
    top: 50%;
    height: 100vh;
    object-fit: cover;
    transform: translate(-50%, -50%);
    @media (max-width: ${MD}) {
      display: none;
    }
  }

  #bg_container {
    height: 100vh;
    overflow: hidden;
  }
  #bg {
    width: 100vw;
    height: 100vh;
  }
  #content {
    position: absolute;
    top: 0px;
    color: #fff;
    text-shadow: #000 2px 2px;
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
    top: 5vh;
    left: 20vw;
    width: 60vw;
    @media (max-width: ${LG}) {
      width: 70vw;
      left: 15vw;
    }
    @media (max-width: ${MD}) {
      top: 10vh;
      width: 60vw;
      left: 20vw;
    }
    @media (max-width: ${SM}) {
      top: 10vh;
      width: 60vw;
      left: 20vw;
  }

  .Mobile {
    display: none;
    @media (max-width: ${MD}) {
      display: flex;
    }
  }

  .Desktop {
    @media (max-width: ${MD}) {
      display: none;
    }
  }

  .TakeFlight3D {
    margin-top: 100px;
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
  }
`;
