import styled from "styled-components";
import '../../static/fonts/fonts.css'

export const EventsPageStyled = styled.div`
  @import url("https://use.typekit.net/plk7yru.css");
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 20px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: 'baikal', sans-serif;
  font-weight: bold;


  text-transform: uppercase;
  overflow: hidden;

  background-color: #4814CC;
  color: white;


  .tabSelector {
    margin: 0;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }

  .nav-link {
    margin: 0 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .individualTab {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin: 0 10px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }

  .nav-link.active {
    color: #f2e7d7;
    background-color:  #4814cc;
    border-color:  #4814cc;
  } 

  ul{
    margin-bottom: 0 !important;
  }



  h2 {
    margin: 25px;
    padding: 0;
    font-size: 64px;
    text-align: center;
    font-family: 'baikal', sans-serif;
    font-weight: bold;
    text-align: center;
    
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
