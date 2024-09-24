import styled from "styled-components";

const FooterContainer = styled.footer`
  .footer-box {
    padding-left: 9em;
    padding-right: 9em;
  }

  .rights-reserved {
    background-color: var(--bs-grey-color);
    color: var(--bs-secondary-color);
  }
  

  @media screen and (max-width: 800px) {
    .footer-box {
      padding-left: 1.3em;
      padding-right: 1.3em;
    }
  }
`;

export default FooterContainer;
