import styled from "styled-components";
import "../../static/fonts/fonts.css";
import {SM, MD, LG} from '../../constants/mediaQueries'

export const MarqueeStyled = styled.div`
  font-size: 48px;
  font-family: "baikal", sans-serif;
  font-weight: 800;
  color: white;

  @media (max-width: ${SM}) {
    font-size: 32px;
  }

  .marquee {
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 100px;
    overflow-x: hidden;
    a {
    color: #f2e7d7;
    display: inline-block;
    text-decoration: none;
  }

  a:hover {
    color: #4814cc;
  }
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 45s linear infinite;
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
