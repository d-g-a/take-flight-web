import styled from "styled-components";

export const IntroWrapper = styled.div`
  width: 200vw;
  height: 200vh;

  .st0 {
    width: 100vw;
    height: 100vw;
    fill: url(${(props) => props.animationImage});
    fill: #fff;
  }

  background: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-color: #000;
  overflow-x: hidden;
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .container {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .first-box {
      width: 100%;
      height: 100%;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      .middle-box {
        width: 70%;
        height: 70%;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        .second-box {
          width: 60%;
          height: 60%;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          .third-box {
            width: 40%;
            height: 40%;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    svg {
      pointer-events: none;
      position: absolute;
      bottom: 0;
      top: 0;
      margin: auto 0;
    }
  }
`;
