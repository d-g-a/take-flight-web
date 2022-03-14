import styled from "styled-components";

export const GlobalScrollStyled = styled.div`
  #container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .panel {
    position: absolute;
    will-change: transform;
  }

  .landing {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90vw;
      color: white;
    }
  }

  .experience {
    background-color: #f2e7d7;
    color: whitesmoke;
    width: 100vw;
    height: auto;

    img {
      width: 50vw;
    }
  }

  .teachers {
    /* background-color: #000;
    color: white;
    width: 100%;
    height: 100%;
    img {
      width: 50vw;
    } */
  }
`;
