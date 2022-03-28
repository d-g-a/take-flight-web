import styled from "styled-components";

export const HamburgerIconWrapper = styled.div`

.burger-menu,
.burger-menu.open {
  display: inline-block;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 8px;
  z-index: 9999;
  background: #f2e7d7;;
  padding: 10px;
  border-radius: 25px;
  //box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  
}

.burger-menu .bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 3px;
  margin: 4px 0;
  transition: 0.4s;
  background-color: #4814cc;
  color: white;
  
}

.burger-menu.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-4px, 4px);
  transform: rotate(-45deg) translate(-4px, 4px);
}

.burger-menu.open .bar2 {
  opacity: 0;
}

.burger-menu.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, -6px);
  transform: rotate(45deg) translate(-6px, -6px);
}

`;