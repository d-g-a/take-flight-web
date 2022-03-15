import styled from "styled-components";

export const AnimationTestTwoWrpper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2000px;
  p {
    margin-bottom: 1em;
  }

  .rect{
      padding: 20px;
  }

  .filter {
    position: absolute;
    top: 0;
    left: -1;
    width: 1px;
    height: 1px;
    visibility: hidden;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    text-align: center;
    background: radial-gradient(
      circle,
      rgba(241, 0, 163, 1) 0%,
      rgba(210, 14, 14, 1) 100%
    );
    cursor: pointer;
  }

  .container {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  }

  .displacement {
    filter: url("#dm-filter");
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bungeeinline {
    display: block;
    position: relative;
    margin: 0 auto;
    padding: 0.5em;
    top: 50%;
    fill: lime;
    font: 100px/0.75 "Helvetica", sans-serif;
    text-align: justify;
  }

  .infotext {
    font: 0.8em/0.75 "Bungee", sans-serif;
    display: none;
  }
`;
