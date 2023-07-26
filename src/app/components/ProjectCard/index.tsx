"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectCardWrapper } from "./styles";

export interface Props {
  title: string;
  description: string;
  url: string;
  secondary?: boolean;
}

export default function Projects({
  title,
  description,
  url,
  secondary,
}: Props) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle the intersection changes
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the card is in the viewport, set isVisible to true
          setIsVisible(true);
          // } else {
          //   // When the card is not in the viewport, set isVisible to false
          //   setIsVisible(false);
        }
      });
    };

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <ProjectCardWrapper
      secondary={secondary}
      id="projects"
      href={url}
      ref={cardRef}
      visible={isVisible}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </ProjectCardWrapper>
  );
}
