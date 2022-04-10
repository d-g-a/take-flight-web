import styled from 'styled-components';
import { SM } from '../../constants/mediaQueries'   

export const HamburgerMenuWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  img {
    width: 80px;
  }
`;

export const Menu = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "baikal", sans-serif;
  font-weight: 800;
  text-align: center;
  a {
    color:  #f2e7d7;
    text-decoration: none;
    font-size: 26px;
    margin-bottom: 20px ;
    @media (max-width: ${SM}) {
      font-size: 26px;
    }
  }
  a:hover {
    color: #4814cc;
  }

  /* .openButton{
    top: 5px;
    right: 20px;
  } */
`;
