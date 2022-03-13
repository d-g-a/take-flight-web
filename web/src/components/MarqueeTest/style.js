import styled from "styled-components";

export const MarqueeStyled = styled.div`
  font-size: 64px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  -webkit-text-stroke: 5px #4814CC;
  color: white;


  .marquee {
    margin: 0 auto;
    width: 100%; // or 100% inside a container
    height: 120px;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    background-color: black;

    &:before,
    &:after {
      position: relative;
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
    animation: marquee 60s linear infinite forwards;
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
    margin: 0 20px;
    /* li{
        margin-left: 10px;
    } */
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
