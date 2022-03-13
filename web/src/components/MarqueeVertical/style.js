import styled from "styled-components";

export const MarqueeVerticalStyled = styled.div`
  font-size: 70px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  color: white;
  transform: rotate(90deg);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  .marquee {
    margin: 0 auto;
    width: 60vw; // or 100% inside a container
    height: 140px;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before,
    &:after {
      top: 0;
      width: 50px;
      height: 30px;
      content: "";
      z-index: 1;
    }
    &:before {
      left: 0;
      background: linear-gradient(to right, white 5%, transparent 100%);
    }
    &:after {
      right: 0;
      background: linear-gradient(to left, white 5%, transparent 100%);
    }
  }

  .marquee__content {
    width: 300% !important;
    display: flex;
    //line-height: 10px;
    animation: marquee 60s linear infinite backwards;
    &:hover {
      animation-play-state: paused;
    }
  }

  .list-inline {
    display: flex;
    justify-content: space-around;
    width: 50%;

    /* reset list */
    list-style: none;
    //padding: 0 20px;
     li{
        margin: 0 10px;
     }
    
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-66.6%);
    }
  }
`;
