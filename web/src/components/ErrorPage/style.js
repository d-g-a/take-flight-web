import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
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
  font-family: 'baikal', sans-serif;
  h1 {
    font-size: 80px;
    margin-bottom: 20px;
    font-family: 'baikal', sans-serif;
    font-weight: bold;
  }
  img {
    width: 100px;
    color: #f2e7d7;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    color: #f2e7d7;
  }
  a:hover{
    color: #4814cc;
  }
`;
