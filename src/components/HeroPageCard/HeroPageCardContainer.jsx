import styled from "styled-components";

const HeroPageCardContainer= styled.figure`
background-color: rgba(247 248 250 / 65%);
backdrop-filter: blur(1.5em);
border-radius: 0.125em;
padding: 2em 5.8em 4em 5.8em;
margin: 14em 20em;

.plant-emoji {
    font-size: 2em;
}

.subtitle-heropage {
    font-family: Helvetica;
    font-size: 1.125em;
    font-weight: 400;
    line-height: 1.225em; 
}

@media screen and (max-width: 1000px) {
    padding: 2em 0.8em 3em 0.8em;
    margin: 13em auto;
  }


 `;

export default HeroPageCardContainer;