import styled from 'styled-components';

export const ScrollTestStyled = styled.div`
    
    @import url('https://fonts.googleapis.com/css?family=Signika+Negative:300,400&display=swap');
body { 
  font-family: "Signika Negative", sans-serif; 
  font-weight: 300;
  height: 400vh;
  text-align: center
}
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
  top: 101vh;
  left: 10vw;
}
#del2 {
  top: 110vh;
  left: 60vw;
}
#del3 {
  top: 120vh;
  left: 30vw;
}

`;