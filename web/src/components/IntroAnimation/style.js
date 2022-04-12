import styled from "styled-components";

export const IntroWrapper = styled.div`
  .st0 {
    fill: url("#img1");
  }
  background: url(${(props) => props.backgroundImage});
  background-position: center center;

  .container {
    //position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;

    svg {
      display: flex;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(0%, -5%);
      pointer-events: none;
      width: 100vw;
      height: 105vh;
    }
  }
`;
