import styled from "styled-components";

export const FutureEventsStyled = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
  padding-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  text-transform: uppercase;

  a:hover {
    color: #4814cc;
  }
  .header {
    display: flex;
    flex-direction: row;
    a {
      color: #f2e7d7;
      padding-left: 20px;
    }
    a:hover {
      color: #4814cc;
    }
  }

  h1 {
    font-size: 72px;
    text-align: center;
    padding-bottom: 20px;
    color: #f2e7d7;
  }
  .tabSelector {
    margin: 0;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }

  .nav-link {
    margin: 0 10px;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    color: #f2e7d7;
  }

  .individualTab {
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    margin: 0;
    color: #f2e7d7;
  }

  .nav-link.active {
    color: #4814cc;
    background-color: #f2e7d7;
    border-color: #f2e7d7;
  } 

  ul {
    margin: 0;
  }

  .mb-3 {
    margin-bottom: 0;
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
