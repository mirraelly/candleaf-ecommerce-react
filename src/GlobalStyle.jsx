import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root {
  --bs-dark-rgb: 27, 27, 27;
  --bs-primary-rgb: 86, 178, 128;
}

.btn-primary {
    --bs-btn-bg: #56B280;
    --bs-btn-border-color: #56B280;
    --bs-btn-hover-bg: #469268;
    --bs-btn-hover-border-color: #469268;
    --bs-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-btn-active-bg: #428560;
    --bs-btn-active-border-color: #2a553d;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-bg: #56B280;
    --bs-btn-disabled-border-color: #56B280;
}

.navbar-dark, .navbar[data-bs-theme=dark] {
    --bs-navbar-color: rgb(255 255 255);
    --bs-navbar-hover-color: rgba(225, 225, 225, 100%);
    --bs-navbar-disabled-color: rgb(86 178 128 / 100%);
}

body {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
}

li {
    list-style: none;
}

.emoji {
	font-family: "Noto Color Emoji", sans-serif;
}

h1 {
    font-size: 2.5em;
    font-weight: 500;
}

.btn {
    font-size: 1.290625em;
    font-weight: 500;
    line-height: 1.511875em;
    font-family: "Roboto", sans-serif;
}

`;

export default GlobalStyle;