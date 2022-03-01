import styled from "styled-components";

export const FloatingFooterStyled = styled.div`
  footer {
    position: fixed;
    bottom: 30px;
    left: 30px;

    button {
      border-radius: 25px;
      color: #f2e7d7;
      //height: 50px;
      padding: 10px 20px;
      //font-family: Acumin Variable Concept;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      margin-right: 20px;
      border: none;
      cursor: pointer;
    }
    .events {
      width: auto;
      background-color: #4814cc;
    }

    .contact {
      width: auto;
      background-color: #04a025;
    }
    .contact:hover{
        width: 60vw;
    }
  }
`;
