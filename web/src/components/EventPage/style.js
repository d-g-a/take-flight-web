import styled from "styled-components";

export const EventPageWrapper = styled.div`
  width: 100vw;
  height: auto;
  //max-height: 150vh;
  background-color: black;
  color: #F2E7D7;
  .EventDetails {
    margin: 25px;
    height: auto;
    h2 {
      text-transform: uppercase;
      font-size: 80px;
      margin: 0;
    }
    p{
      padding-bottom: 20px;
    }

    .titleButton{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 20px;
    }
  }
  .GetTicketsButton{
    border-radius: 40px;
    width: 300px;
    height: 60px;
    background-color: #04A025;
    border: none;
    margin-left: 100px;
    a{
      text-decoration: none;
      color: #F2E7D7;
      font-size: 32px;
    }
    a:hover{
      color: black;
    }
  }


`;


export const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  color: #f2e7d7;
  background-color: black;
  font-size: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 80px;
    margin-bottom: 20px;
  }
  img {
    width: 100px;
    color: #f2e7d7;
  }
`;