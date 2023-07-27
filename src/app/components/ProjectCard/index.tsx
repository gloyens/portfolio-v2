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
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

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
