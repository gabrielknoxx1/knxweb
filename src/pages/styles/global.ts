import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F8F0FB;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --purple: #6320EE;
    --purple-mid: #A379F6;
    --purple-light: #8075FF;
    
    --grey: #CAD5CA;
    
    --orange: #F19000;

    --text-title: #211A1D;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 83.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text-title);
  }

  body, input, textarea, button {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;