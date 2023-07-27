"use client";

import { useEffect, useState } from "react";
import { NavbarWrapper, Title, Links } from "./styles";

export default function Navbar() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [linkClicked, setLinkClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!linkClicked) {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < prevScrollY);
        setPrevScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, linkClicked]);

  const handleLinkClick = () => {
    setLinkClicked(true);
    setTimeout(() => {
      setLinkClicked(false);
    }, 1000);
  };

  return (
    <NavbarWrapper visible={isVisible}>
      <Title>Creative Full-Stack Developer</Title>
      <Links>
        <li>
          <a href="#" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#work" onClick={handleLinkClick}>
            Work
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinkClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#links" onClick={handleLinkClick}>
            Links
          </a>
        </li>
      </Links>
    </NavbarWrapper>
  );
}
