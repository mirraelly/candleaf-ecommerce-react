import styled from "styled-components";

const SecondLayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1em;

  .second-layout-main {
    padding: 1em 8em;
  }

  @media screen and (max-width: 800px) {
    padding-left: 0;
    .second-layout-main {
      padding: 0;
    }
  }
`;

export default SecondLayoutContainer;
