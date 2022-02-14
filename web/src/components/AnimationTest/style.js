import styled from 'styled-components';

export const AnimationTestStyled = styled.div`

   margin: 0;

   .polymorph{
       fill: #29ABE2
   }

   #cta, #cta2 {
       position: absolute;
       margin: 10em auto 0 auto;
       left: 0;
       right: 0;
       width: 10%;
       background: none;
       border: 1px solid #fff;
       border-radius: 5px;
       padding: 15px;
       color: #fff;
       font-size: 1.5em;
       cursor: pointer;
       outline: 0;
   }

   #blip{
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
   }

`;