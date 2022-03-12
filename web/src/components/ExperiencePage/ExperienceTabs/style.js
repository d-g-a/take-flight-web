import styled from 'styled-components';

export const EventTabsStyled = styled.div`

height: auto;
margin: 0;
padding: 0;
font-size: 16px;
width: 100vw;
height: auto ;
text-align: center ;
margin: 0;
-webkit-overflow-scrolling: touch;
  font-family: "Avenir", sans-serif, Arial;

.nav {
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 75px;
  background-color: #F2E7D7;
  color: black;
  text-align: center;
  border: 1px solid black ;
}

.intro {
  color: white;
  height: 75vh;
  width: 100%;
  text-align: center;
}

.today-header {
  background: #f4f4f4;
  height: 75px;
  width: 100%;
  text-align: center;
  cursor:pointer;
}

.today-content {
  height: 800px;
  text-align: center;
  overflow: hidden;
}

.tomorrow-header {
  background: #cecece;
  height: 75px;
  width: 100%;
  text-align: center;
  cursor:pointer;
}

.tomorrow-content {
  height: 800px;
  text-align: center;
}

.sticky-today {
  position: absolute;
  bottom: 150px;
}
.sticky-tomorrow {
  position: absolute;
  bottom: 75px;
}

.sticky-take-fligt{
  position: absolute;
  bottom: 0px;
}

.take-flight-header{
  background: #f4f4f4;
  height: 75px;
  width: 100%;
  text-align: center;
  cursor:pointer;
}




.footer {
  left: 0;
  height: 800px;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
}

.gray {
  background-color: #777;
}
.blue {
  background-color: #2c7ad2;
}
.purple {
  background-color: #8d3dae;
}
.green {
  background-color: #28a92b;
}



`;