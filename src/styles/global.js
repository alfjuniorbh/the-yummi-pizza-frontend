import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  body{
    background:#312E38;
    color:#fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size:16px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 400px;
  }

  button{
    cursor: pointer;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }

  #root{
    max-width:1144px;
    margin:0 auto;
    padding: 0 20px 50px;
  }
`;
