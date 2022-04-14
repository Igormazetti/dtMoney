import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5; // setando variaveis para cores no css
  --red: #E52E4D;
  --blue: #5429CC;
  --blue-light: #6933FF;
  --text-title: #363F5F;
  --text-body: #969CB3;
  --background: #F0F2F5;
  --shape: #FFFFFF;
  --green: #33cc95;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// font-size padrão: 16px (ideal para desktop)
html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

// REM = 1rem = font-size da página (16px ...)

body {
  background: var(--background); // utilizando variáveis no css
  -webkit-font-smoothing: antialiased; // maior detalhe das fontes
}

body, input, textarea, button {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

`;
