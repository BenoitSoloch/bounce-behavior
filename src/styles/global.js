import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
 }

 body {
  background-color: #002029;
   color: white;
 }

 #root {
  display: flex;
  flex-flow: column;
  height: 100vh;
 }

 hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgba(232, 232, 232, 0.71);
  margin: 30px 60px;
  padding: 0;
 }
`

export default GlobalStyle;