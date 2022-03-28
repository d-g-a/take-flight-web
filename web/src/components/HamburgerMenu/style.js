import styled from 'styled-components';

export const HamburgerMenuWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: white;
`;

export const LogoWrapper = styled.div`
  img {
    width: 120px;
    margin-right: 4px;
    margin-top: 4px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export const Menu = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
    font-size: 48px;
    margin-bottom: 20px ;
  }
  a:hover {
    color: pink;
  }
`;
