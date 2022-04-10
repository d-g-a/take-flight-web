import styled from "styled-components";
import { SM, MD, LG } from "../../../constants/mediaQueries";

export const EventThumnailWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  /* background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  background-color: #4814cc;
  color: #f2e7d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;

  .EventDetails {
    margin: 25px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h2 {
      text-transform: uppercase;
      font-size: 48px;
      margin: 0;
      @media (max-width: ${LG}) {
        font-size: 40px;
      }
      @media (max-width: ${MD}) {
        font-size: 32px;
      }
      @media (max-width: ${SM}) {
        font-size: 24px;
      }
    }
    p {
      padding-bottom: 40px;
      font-family: acumin-pro-extra-condensed, sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 64px;
      text-align: center;
      width: 80vw;
      position: absolute;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
      -webkit-font-smoothing: antialiased;
      @media (max-width: 1260px) {
        position: relative;
      }
      @media (max-width: ${LG}) {
        font-size: 40px;
        width: 90vw;
      }
      @media (max-width: ${MD}) {
        font-size: 32px;
        width: 95vw;
      }
      @media (max-width: ${SM}) {
      }
    }
    .gallery {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 80vw;

      .second {
        display: none;
        @media (max-width: ${LG}) {
          display: none;
        }
      }

      .thumbnailImage {
        width: auto;
        margin-top: 100px;
        @media (max-width: ${LG}) {
          width: 90vw;
          margin-top: 20px;
        }
        @media (max-width: ${SM}) {
          width: auto;
        }
        img {
          height: 500px;
          width: auto;
          object-fit: contain;
          border-radius: 20px;
          @media (max-width: ${LG}) {
            height: 400px;
            margin-bottom: 20px;
          }
          @media (max-width: ${MD}) {
            height: 300px;
          }
          @media (max-width: ${SM}) {
            height: 200px;
          }
        }
      }
    }

    .titleButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 20px;
    }
  }
  .GetTicketsButton {
    border-radius: 40px;
    width: 300px;
    height: 60px;
    background-color: #04a025;
    border: none;
    margin-left: 50px;
    a {
      text-decoration: none;
      color: #f2e7d7;
      font-size: 32px;
    }
    a:hover {
      color: black;
    }
  }
`;
