import styled from 'styled-components';

export const TeachersScrollStyled = styled.div`
* {
	box-sizing: border-box;
}
body {
	background: #111;
	min-height: 100vh;
	padding: 0;
	margin: 0;
}
.gallery {
	position: absolute;
	width: 100%;
	height: 100vh;
	overflow: hidden;
}

.cards {
	position: absolute;
	width: 14rem;
	height: 18rem;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.cards li {
	list-style: none;
	padding: 0;
	margin: 0;
	width: 30rem;
	height: 30rem;
	text-align: center;
	line-height: 18rem;
	font-size: 2rem;
	font-family: sans-serif;
	background-color: #9d7cce;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 0.8rem;
}

.profile{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  width: 100%;
  h5{
    margin: 0;
    padding: 0;
    display: inline;
    position: absolute;
    color: white;
  }
  img{
    object-fit: contain;
    width: 100%;
  }
}

.actions {
	position: absolute;
	bottom: 25px;
	left: 50%;
	transform: translateX(-50%);
}

button {
  display:inline-block;
  outline: none;
  border: none;
  padding: 8px 14px;
  background: #414141;
  background-image: -webkit-linear-gradient(top, #575757, #414141);
  background-image: -moz-linear-gradient(top, #575757, #414141);
  background-image: -ms-linear-gradient(top, #575757, #414141);
  background-image: -o-linear-gradient(top, #575757, #414141);
  background-image: linear-gradient(to bottom, #575757, #414141);
  text-shadow: 0px 1px 0px #414141;
  -webkit-box-shadow: 0px 1px 0px 414141;
  -moz-box-shadow: 0px 1px 0px 414141;
  box-shadow: 0px 1px 0px 414141;
  color: #ffffff;
  text-decoration: none;
  margin: 0 auto 10px;
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  padding: 12px 25px;
  font-family: "Signika Negative", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
  line-height: 18px;
}

button:hover {
  background: #57a818;
  background-image: -webkit-linear-gradient(top, #57a818, #4d9916);
  background-image: -moz-linear-gradient(top, #57a818, #4d9916);
  background-image: -ms-linear-gradient(top, #57a818, #4d9916);
  background-image: -o-linear-gradient(top, #57a818, #4d9916);
  background-image: linear-gradient(to bottom, #57a818, #4d9916);
  text-shadow: 0px 1px 0px #32610e;
  -webkit-box-shadow: 0px 1px 0px fefefe;
  -moz-box-shadow: 0px 1px 0px fefefe;
  box-shadow: 0px 1px 0px fefefe;
  color: #ffffff;
  text-decoration: none;
}

button {
  font-size: 20px;
  font-weight: 400;
}

a {
  color: #88ce02;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
`;