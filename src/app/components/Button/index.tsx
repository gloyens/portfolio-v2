"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonWrapper, MiniButtonWrapper } from "./styles";
import { FaLinkedinIn } from "react-icons/fa6";

export interface Props {
  text: string;
  url: string;
  external?: boolean;
}

export default function Button({ text, url, external }: Props) {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    if (!buttonElement) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      setIsVisible(!entries[0].isIntersecting);
      console.log(isVisible);
    };

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    observer.observe(buttonElement);

    return () => {
      // Clean up the observer when the component unmounts
      observer.unobserve(buttonElement);
    };
  }, []);

  return (
    <>
      <ButtonWrapper
        href={url}
        target={external ? "_blank" : ""}
        ref={buttonRef}
      >
        {text}
      </ButtonWrapper>
      <MiniButtonWrapper
        href="https://linkedin.com/in/gloyens"
        target="_blank"
        visible={isVisible}
      >
        <FaLinkedinIn />
      </MiniButtonWrapper>
    </>
  );
}
