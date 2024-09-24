import styled from "styled-components";

const HeroPageContainer = styled.div`
  background-color: #ffffff;

  .initial-page-image {
    overflow: hidden;
    object-position: 0px -538px;
  }

  @media screen and (max-width: 800px) {
    .banner-image-container {
        overflow: hidden;
    min-height: 780px;
    }

    .initial-page-image {
      overflow: visible;
      object-position: 0px 106px;
      transform: scale(1.5);
    }
  }
`;

export default HeroPageContainer;
