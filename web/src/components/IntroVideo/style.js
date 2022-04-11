import styled from "styled-components";
import { SM, MD, LG } from "../../constants/mediaQueries";

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
    width: 40vw;
    top: 45vh;
    left: 30vw;
    border-radius: 40px;
    padding: 10px 20px;
    position: absolute;
    background-color: #f2e7d7;
    @media (max-width: ${LG}) {
      width: 50vw;
      left: 25vw;
    }
    @media (max-width: ${MD}) {
      width: 60vw;
      left: 20vw;
    }
    @media (max-width: ${SM}) {
      width: 60vw;
      left: 20vw;
    }
  }

  a {
    color: #000;
    font-size: 32px;
    font-family: "baikal";
    font-style: bold;
    font-weight: bold;
    @media (max-width: ${LG}) {
      font-size: 28px;
    }
    @media (max-width: ${MD}) {
      font-size: 24px;
    }
    @media (max-width: ${SM}) {
      font-size: 18px;
    }
  }

  a:hover {
    color: #4814cc;
  }
`;
