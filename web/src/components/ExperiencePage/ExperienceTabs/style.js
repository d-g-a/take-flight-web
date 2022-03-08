import styled from 'styled-components';

export const EventTabsStyled = styled.div`

height: auto;
margin: 0;
padding: 0;
font-size: 16px;

.nav {
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 75px;
  background-color: #021c53;
  color: white;
  text-align: center;
}

.intro {
  color: white;
  height: auto;
  width: 100%;
  text-align: center;
}

.today-header {
  background: #f4f4f4;
  height: auto;
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
  height: auto;
  width: 100%;
  text-align: center;
  cursor:pointer;
}

.tomorrow-content {
  height: auto;
  text-align: center;
}

.sticky-today {
  position: absolute;
  bottom: 75px;
}
.sticky-tomorrow {
  position: absolute;
  bottom: 0px;
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