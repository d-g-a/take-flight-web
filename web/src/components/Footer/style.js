import styled from "styled-components";
import "../../static/fonts/fonts.css";
import { SM, MD } from "../../constants/mediaQueries";

export const FooterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  background-color: #04a025;
  color: white;
  text-align: center;
  font-family: "baikal", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f2e7d7;

  ul {
    margin-top: 20px;
    li {
      font-family: "baikal", sans-serif;
      font-weight: bold;
      font-size: 50px;
      list-style: none;
      margin-bottom: 60px;
      img {
        width: 160px;
      }
      a {
        color: #f2e7d7;
      }
      a:hover {
        color: #4814cc;
      }
      @media (max-width: ${MD}) {
        font-size: 40px;
        img {
          width: 100px;
        }
      @media (max-width: ${SM}) {
        font-size: 24px;
        img {
          width: 80px;
        }
      }
    }
  }
`;
