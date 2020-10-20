import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

::selection {
    background: #333333;
    color: #ffffff;
  }

*,
*::before,
*::after {
  box-sizing: inherit;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*:focus {
  outline: none;
}

*::-webkit-scrollbar {
  background-color: rgb(40,13,87);
  width: 3px;
  height: 3px;
}
*::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 1px;
}
*::-webkit-scrollbar-button {
  display: none;
}

html{
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
}

body,html {
  margin: 0px;
  min-height: 100%;
}
html.loading body {
  overflow: hidden;
}
body {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.bodyColor ? props.theme.bodyColor : '#BEABDF'};
  overflow-x: hidden !important;
  font-weight: 400;
  margin: 0;
  padding: 0;
  background: rgb(40,13,87);
  background: linear-gradient(167deg, rgba(40,13,87,1) 0%, rgba(54,63,159,1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.headingColor ? props.theme.headingColor : '#FFFFFF'};  
}

p{
  font-family: sans-serif;
    margin: 0 0 15px 0;
}

a{
    text-decoration: none;
    color: ${props => props.theme.headingColor};
  }
  img{
    max-width: 100%;
  }


section{
    position: relative;
}

.text-center{
  text-align: center;
}

button, .btn{
  display: inline-block;
  width: 170px;
  height: 60px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.presentation-video {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  z-index: 100;
}
.presentation-video.ending {
  animation: hide-player .5s forwards;
}

.btn-rgb {
  color: #fff;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 400%;
}

.btn-rgb:hover{
  color: #fff !important;
  animation: animate 8s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
@keyframes hide-player {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}
`

export default GlobalStyle
