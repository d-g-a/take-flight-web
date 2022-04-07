import styled from "styled-components";

export const IntroWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  .st0{fill:url('#img1');}

  
    background: url("https://4.bp.blogspot.com/-24y91W-nPOI/V4ugJsZ6eQI/AAAAAAAAUb8/EWAFXebHEbQwF2n_u_VQOquOdcoAhQVVgCLcB/s1600/CROM%2BMAG.jpg");
    background-position: center center;
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
      width: 90%;
      height: 90%;
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
