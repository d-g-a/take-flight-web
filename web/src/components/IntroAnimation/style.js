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
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    svg {
      position: absolute;
      pointer-events: none;
      width: 100vw;
      height: 100vh;
      margin: 0;
      margin-bottom: 100px;
      margin-right: 100px;
      padding: 0;
      overflow: hidden;
    }
  }
`;
