import styled from "styled-components";

const HeroPageContainer = styled.div`
  background-color: #ffffff;

  .initial-page-image {
    overflow: hidden;
    object-position: 0px -538px;
  }

  @media screen and (max-width: 800px) {
    .initial-page-image {
      overflow: visible;
      object-position: 0px 54px;
    }
  }
`;

export default HeroPageContainer;
