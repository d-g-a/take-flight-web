import styled from "styled-components";
import { MD } from "../../constants/mediaQueries";

export const IntroVideoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-color: #000;

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

  button {
    width: 20vw;
    top: 45vh;
    left: 40vw;
    border-radius: 40px;
    padding: 10px 20px;
    position: absolute;
    background-color: #f2e7d7;
  }

  a {
    color: #000;
    font-size: 32px;
    font-family: "baikal";
    font-style: bold;
    font-weight: bold;
  }

  a:hover {
    color: #4814cc;
  }
`;
