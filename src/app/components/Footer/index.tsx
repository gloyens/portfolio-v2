import { FooterWrapper, FooterContainer, Column } from "./styles";

export default function Footer() {
  return (
    <FooterWrapper id="links">
      <FooterContainer>
        <Column>
          <h3>Contact</h3>
          <a href="#" target="_blank">
            LinkedIn
          </a>
          <a href="#" target="_blank">
            Email
          </a>
        </Column>
        <Column>
          <h3>More</h3>
          <a href="#" target="_blank">
            Github
          </a>
          <a href="#" target="_blank">
            Resume
          </a>
        </Column>
        <Column>
          <p>
            Developed by George Gloyens
            <br />© 2023 All rights reserved
          </p>
        </Column>
      </FooterContainer>
    </FooterWrapper>
  );
}
