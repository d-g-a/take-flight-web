import styled from "styled-components";
import "../../static/fonts/fonts.css";
import { SM, MD, LG } from "../../constants/mediaQueries";

export const EventAliasMarqueeWrapper = styled.div`
  font-size: 54px;
  font-family: "baikal", sans-serif;
  font-weight: bold;
  color: #f2e7d7;
  margin: 0 10px;
  text-transform: uppercase;
  margin-bottom: 60px;

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
    height: 80px;
    overflow-x: hidden;
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 40s linear infinite;
    animation-direction: reverse;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .content {
    span {
      padding-right: 40px;
    }
  }
`;
