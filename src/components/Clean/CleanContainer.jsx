import styled from "styled-components";

const CleanContainer = styled.section`
  background: #f7f8fa;
  padding: 5em 2em 10em 2em;

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .image-col-candles-fragrances {
    /* width: 100%;  */
    height: 100%;
    overflow: hidden;
  }

  .image-candles-fragrances {
    width: 100%;
    overflow: visible;
    object-position: 19px 8px;
  }

  @media screen and (max-width: 800px) {
    padding: 1em;
  }
`;

export default CleanContainer;
