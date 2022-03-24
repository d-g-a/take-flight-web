import styled from "styled-components";

export const EventThumnailWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: BLACK;

  .EventDetails {
    margin: 25px;
    height: auto;
    h2 {
      text-transform: uppercase;
      font-size: 32px;
      margin: 0;
    }
    p {
      padding-bottom: 20px;
      font-family: acumin-pro-extra-condensed, sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 20px;
    }

    .titleButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 20px;
    }
  }
  .GetTicketsButton {
    border-radius: 40px;
    width: 300px;
    height: 60px;
    background-color: #04a025;
    border: none;
    margin-left: 50px;
    a {
      text-decoration: none;
      color: #f2e7d7;
      font-size: 32px;
    }
    a:hover {
      color: black;
    }
  }
`;
