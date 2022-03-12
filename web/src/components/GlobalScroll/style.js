import styled from "styled-components";

export const GlobalScrollStyled = styled.div`

font-family: Arial, Helvetica, sans-serif;
text-align: center;
font-size: 64px;


  #container {
    width: 100vw;
    height: 300vh;
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
    //background-color: black;
    //color: whitesmoke;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 90vw;
        color: white;
    }
  }

  .red {
    background-color: #F2E7D7;
    color: whitesmoke;
    width: 100vw;
    height: 100%;

    img{
        width: 50vw;
    }

  }

  .orange {
    background-color: #000;
    color: white;
    width: 100%;
    height: 100%;
    img{
        width: 50vw;
    }
  }

  .purple {
    background-color: #04A025;
    color: white;
    width: 100%;
    height: 100%;
    ul{
      list-style: none;
      li{
        margin: 50px 0;
      }

    }
    img{
      width: 160px;
    }
  }
`;
