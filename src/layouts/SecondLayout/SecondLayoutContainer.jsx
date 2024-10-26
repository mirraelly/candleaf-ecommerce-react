import styled from "styled-components";

const SecondLayoutContainer = styled.main`
  .left-secondlayout {
    padding-left: 8em;
    padding-right: 5em;
  }

  .rigth-secondlayout {
    padding-right: 8em;
  }

  .color {
    background-color: #f2f2f2;
  }

  @media (max-width: 900px) {
    .left-secondlayout {
      padding-left: 3em;
      padding-right: 1.5em;
    }
    .rigth-secondlayout {
      padding-right: 3em;
    }
  }

  @media (max-width: 800px) {
    .left-secondlayout {
      padding-left: 0;
      padding-right: 0;
    }
    .rigth-secondlayout {
      padding-right: 0;
    }
  }
`;

export default SecondLayoutContainer;
