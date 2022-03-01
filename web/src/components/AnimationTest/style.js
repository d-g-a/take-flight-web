import styled from 'styled-components';
import takeFlight from '../../images/takeFlight.jpg'

export const AnimationTestStyled = styled.div`
   margin: 0;
   height: auto;
   width: 100vw;
  // background-color: black;
   background-image: url('https://i.pinimg.com/originals/b8/92/b0/b892b08f0b748c27d861bfd1ca761282.jpg');
   background-repeat: repeat;
   //background-position: 100vw;
   /* .morph{
       fill: white;
   } */

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