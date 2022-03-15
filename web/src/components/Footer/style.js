import styled from "styled-components";
import '../../static/fonts/fonts.css'

export const FooterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  background-color: #04a025;
  color: white;
  text-align: center;
  font-family: 'baikal', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  ul{
    margin-top: 20px;
    li{
      font-family: 'baikal', sans-serif;
      font-weight: bold;
      font-size: 54px;
      list-style: none;
      margin-bottom: 60px;
      img{
        width: 160px;
      }
    }

  }

`;
