import styled from "styled-components";
import "../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const MarqueeHeaderWrapper = styled.div`
  font-size: 54px;
  font-family: "baikal", sans-serif;
  font-weight: bold;
  color: #f2e7d7;
  margin: 0 10px;

  @media (max-width: ${LG}) {
    font-size: 48px;
  }
  @media (max-width: ${MD}) {
    font-size: 40px;
  }
  @media (max-width: ${SM}) {
    font-size: 32px;
  }

  .marquee {
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 100px;
    overflow-x: hidden;
    @media (max-width: 640px) {
      height: 50px;
    }
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 32s linear infinite;
  }

  @keyframes marquee {
    from {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -moz-transform: translateX(0);
      transform: translateX(0);
    }
    to {
      -webkit-transform: translateX(-30%);
      -moz-transform: translateX(-30%);
      -moz-transform: translateX(-30%);
      transform: translateX(-30%);
    }
  }

  .content {
    span {
      padding-right: 40px;
    }
  }
`;
