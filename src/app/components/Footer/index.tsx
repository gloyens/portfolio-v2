import { FooterWrapper, FooterContainer, Column } from "./styles";

export default function Footer() {
  return (
    <FooterWrapper id="links">
      <FooterContainer>
        <Column>
          <h3>Contact</h3>
          <a href="https://linkedin.com/in/gloyens" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:georgegloyens@gmail.com" target="_blank">
            Email
          </a>
        </Column>
        <Column>
          <h3>More</h3>
          <a href="https://github.com/gloyens" target="_blank">
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
