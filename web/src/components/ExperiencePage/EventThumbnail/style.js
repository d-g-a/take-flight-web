import styled from 'styled-components';

export const EventThumnailWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: BLACK;

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
    margin-left: 50px;
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