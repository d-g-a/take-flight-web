import styled from "styled-components";

export const IntroWrapper = styled.div`
  .st0 {
    fill: url("#img1");
  }

  background: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: auto, cover;
  padding: 0;
  margin: 0;

  .container {
    //position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      position: absolute;
      top: -5vh;
      left: -5vw;
      pointer-events: none;
      width: 150vw;
      height: 150vh;
      margin: 0;
      padding: 0;
    }
  }
`;
