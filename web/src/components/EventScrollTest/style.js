import styled from 'styled-components'
import '../../static/fonts/fonts.css'

export const EventScrollWrapper = styled.div`
:root { font-size: 16px }
@media (max-width: 500px) { :root { font-size: 14px } }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  background: #87cd33;
  color: white;
}

body {
  overflow: hidden;
  font-family: 'baikal', sans-serif;
}

h1 { font-size: 5rem }
h2 { font-size: 2rem }

.image-container{
  width: 50vw;
  
}

img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  border-radius: 20px;
}

ul {
  padding-left: 1rem;
  list-style: none;
}

li {
  flex-shrink: 0;
  width: clamp(500px, 60vw, 800px);
  padding-right: 1rem;
}

header {height: 100vh}
footer {height: 50vh}

:any-link { color: #4e9815; }

.df {display: flex}
.aic {align-items: center}
.jcc {justify-content: center}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  color: white;
  display: hide;
}

.demo-wrapper {
  overflow-x: hidden;
}

.wrapper {
  display: flex;
}

.demo-gallery:not(.last) {
  padding-bottom: 1rem;
}

.demo-text .text {
  font-size: clamp(8rem, 15vw, 16rem);
  line-height: 1;
  font-weight: 900;
}


`;