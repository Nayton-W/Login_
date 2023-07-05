import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  h1{


  }
  body {
    width: 100vw;
   
    
  }
  
  input{
    background: rgb(15,0,36);
    background: linear-gradient(90deg, rgba(15,0,36,1) 29%, rgba(9,121,77,1) 44%, rgba(0,212,255,1) 100%);
    padding: 10px;
    border-radius: 50px 20px;
    color: white;
  }

  div{
    background: rgb(15,0,36);
    background: linear-gradient(90deg, rgba(15,0,36,1) 29%, rgba(9,121,77,1) 44%, rgba(0,212,255,1) 100%);
    padding: 10px;
    border-radius: 1000px 50px;
    
  }

  .l1{
    background: rgb(15,0,36);
    background: linear-gradient(90deg, rgba(15,0,36,1) 29%, rgba(9,121,77,1) 44%, rgba(0,212,255,1) 100%);
    padding: 10px;
    border-radius: 50px 20px;
    color: white;
  }

  [data-theme="light"] {
    height: 100vh;
    background-image: url('http://i.stack.imgur.com/kx8MT.gif');
    background-size: cover;
    padding:0;
    margin:0;
  
    
  }
  
  [data-theme="dark"] {
    height: 100vh;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/f/f5/Computer-screen-code-glitch-animation-gif-background-free.gif');
    background-size: cover;
    padding:0;
    margin:0;
  }
`;

export default GlobalStyle;
