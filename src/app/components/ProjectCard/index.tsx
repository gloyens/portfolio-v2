"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ProjectCardWrapper, TagList, Links, Link, Text, Icon } from "./styles";

export interface Props {
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
  tags?: string[];
  secondary?: boolean;
}

export default function Projects({
  title,
  description,
  url,
  githubUrl,
  tags,
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
      target="_blank"
    >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {tags && (
          <TagList>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </TagList>
        )}
      </div>
      <Links>
        <li>
          <Link href={url} target="_blank">
            <Text>Live Site</Text>
            <Icon>
              <FaArrowUpRightFromSquare />
            </Icon>
          </Link>
        </li>
        {githubUrl && (
          <li>
            <Link href={githubUrl} target="_blank">
              <Text>Github</Text>
              <Icon>
                <FaGithub />
              </Icon>
            </Link>
          </li>
        )}
      </Links>
    </ProjectCardWrapper>
  );
}
