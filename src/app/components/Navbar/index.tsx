import { NavbarWrapper, Links } from "./styles";

export default function Navbar() {
  return (
    <NavbarWrapper>
      Creative Full-Stack Developer
      <Links>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#links">Links</a>
        </li>
      </Links>
    </NavbarWrapper>
  );
}
