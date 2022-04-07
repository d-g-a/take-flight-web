import styled from "styled-components";
import "../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const LandingStyled = styled.div`
  background-color: black;
  color: white;
  height: 90vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-image: url(${(props) => props.landingImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  video {
    position: absolute;
    width: 100vw;
    left: 50%;
    top: 50%;
    height: 100vh;
    object-fit: cover;
    transform: translate(-50%, -50%);
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
    top: 10vh;
    left: 20vw;
    width: 60vw;
    @media (max-width: ${LG}) {
      width: 70vw;
      left: 15vw;
    }
    @media (max-width: ${MD}) {
      width: 80vw;
      left: 10vw;
    }
    @media (max-width: ${SM}) {
      width: 90vw;
      left: 5vw;
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
