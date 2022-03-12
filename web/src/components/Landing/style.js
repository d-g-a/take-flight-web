import styled from 'styled-components';

export const LandingStyled = styled.div`

background-color: black;
color: white;
height: 300vh;
margin: 0;
padding: 0;
font-family: Arial, Helvetica, sans-serif;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;


 .TakeFlight3D{
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    height: 70vh;

    @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
    img{
        width: 90vw;
    }
}


.secondary-content{
  font-family: "Signika Negative", sans-serif; 
  font-weight: 300;
  height: 200vh;
  text-align: center;

.delayed-section {
  position: absolute;
  width: 30vw;
  height: 38.87vw;
}
.delayed-section .inner-container {
  will-change: transform;
}
.delayed-section img {
  max-width: 100%;
  will-change: transform;
}

#del1 {
  top: 105vh;
  left: 5vw;
}
#del2 {
  top: 120vh;
  left: 65vw;
}
#del3 {
  top: 175vh;
  left: 30vw;
}

}
`;