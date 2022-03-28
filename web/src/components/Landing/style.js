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
  background-image: url(${(props) => props.landingImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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
    img {
      width: 60vw;

      @media (max-width: ${SM}) {
        width: 90vw;
      }
    }
  }
`;

