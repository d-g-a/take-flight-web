import styled from "styled-components";

export const EventsPageStyled = styled.div`
  @import url("https://use.typekit.net/plk7yru.css");
  height: 100vh;
  margin: 0;
  padding: 20px 0 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: acumin-pro-wide,sans-serif;
    font-weight: 700;
    font-style: normal;
color: black;
  text-transform: uppercase;
  overflow: hidden;
  
  //align-items: flex-start;

  h2 {
    margin: 25px;
    padding: 0;
    font-size: 80px;
  }

  p {
    margin: 25px;
    font-size: 24px;
    text-align: left;
  }
  .Content {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .Vertical {
    //transform: rotate(90deg);
    width: 10vw;

    .Marquee {
      position: absolute;
      left: 0;
    }
  }
`;
