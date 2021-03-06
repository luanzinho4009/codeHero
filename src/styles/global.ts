import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;

    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'PT Sans Caption', sans-serif;
  }

  input{
    font-family: 'PT Sans', sans-serif;
    font-weight: 300;
    font-style: italic;
  }

  span{
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
  }
  p{
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
  }
`;