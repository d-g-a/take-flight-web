import styled from "styled-components";

export const EventPageWrapper = styled.div`
  width: 100vw;
  height: 140vh;
  //max-height: 150vh;
  background-color: black;
  color: #F2E7D7;
  .EventDetails {
    margin: 25px;
    height: auto;
    h2 {
      text-transform: uppercase;
      font-size: 80px;
      margin: 0;
    }
    p{
      padding-bottom: 20px;
    }

    .titleButton{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 20px;
    }
  }
  .GetTicketsButton{
    border-radius: 20px;
    width: 250px;
    height: 60px;
    background-color: #04A025;
    border: none;
    margin-left: 100px;
    a{
      text-decoration: none;
      color: #F2E7D7;
      font-size: 32px;
    }
  }


`;

export const SecondaryContent = styled.div`
  font-family: "Signika Negative", sans-serif; 
  font-weight: 300;
  height: 140vh;
  text-align: center;
  background-color: black;
  overflow: hidden;
  padding: 20px;

.delayed-section {
  position: absolute;
  width: 30vw;
  height: 80%;
  overflow: hidden;
}
.delayed-section .inner-container {
  will-change: transform;
  overflow: hidden;
  
}
.delayed-section img {
  max-width: 100%;
  will-change: transform;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#del1 {
  top: ${props => props.heightDel1};
  left: 2vw;
}
#del2 {
  top: ${props => props.heightDel2};
  left: 70vw;
}
#del3 {
  top: ${props => props.heightDel3};
  left: 30vw;
}
#del4 {
  top: ${props => props.heightDel4};
  left: 16vw;
}
#del5 {
  top: ${props => props.heightDel5};
  left: 50vw;
}

`;
