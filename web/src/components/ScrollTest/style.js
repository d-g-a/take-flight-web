import styled from "styled-components";

export const ScrollTestStyled = styled.div`

font-family: Arial, Helvetica, sans-serif;
text-align: center;
font-size: 64px;


  #container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .panel {
    position: absolute;
    will-change: transform;
  }

  .blue{
    background-color: blue;
    color: whitesmoke;
    width: 100%;
    height: 100%; 
    img{
        width: 50vw;
        color: white;
    }
  }

  .red {
    background-color: red;
    color: whitesmoke;
    width: 100%;
    height: 100%;

    img{
        width: 50vw;
    }

  }

  .orange {
    background-color: orange;
    color: black;
    width: 100%;
    height: 100%;
    img{
        width: 50vw;
    }
  }

  .purple {
    background-color: purple;
    color: white;
    width: 100%;
    height: 100%;
    img{
        width: 50vw;
    }
  }
`;
