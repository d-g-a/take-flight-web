import styled from 'styled-components';

export const LandingStyled = styled.div`

background-color: black;
color: white;
height: 100vh;
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
`;