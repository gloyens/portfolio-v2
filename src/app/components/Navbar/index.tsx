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
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </Links>
    </NavbarWrapper>
  );
}
