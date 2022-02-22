import styled from 'styled-components';
import takeFlight from '../../images/takeFlight.jpg'

export const AnimationTestStyled = styled.div`
   margin: 0;
   height: auto;
   width: 100vw;
   background-color: black;
   background-image: url('https://images.squarespace-cdn.com/content/v1/58554c5037c5814553ee34a8/1482015174020-YV4RL0FYL2B4NB7ZHF9D/15002252_1807984276140132_6753659464503816101_o.jpg?format=1500w%22');
   background-repeat: no-repeat;
   background-position: 100vw;
   .morph{
       fill: white;
   }

   #cta, #cta2 {
       //position: absolute;
       margin: 10em auto 0 auto;
       left: 0;
       right: 0;
       width: 20%;
       background: none;
       border: 1px solid white;
       border-radius: 5px;
       padding: 15px;
       color: white;
       font-size: 1.5em;
       cursor: pointer;
       outline: 0;
   }

   /* #blip{
       position: absolute;
       color: #29ABE3;
       right: 25%;
       top: 0;
       opacity: 0;
       width: 10%;
       transform: translateY(-800px);

       p{
           font-size: 1.2em;
       }

       #cta2{
           width: auto;
           margin: 30px auto;
           background: #29ABE2;
       }
   } */

`;