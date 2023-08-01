"use client";

import ProjectCard from "@/app/components/ProjectCard";
import { ProjectsWrapper } from "./styles";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const WrapperRef = useRef(null);

  useEffect(() => {
    if (WrapperRef.current) {
      gsap.to(WrapperRef.current, {
        xPercent: -100,
        x: () => innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: WrapperRef.current,
          start: "top top",
          end: () => 4000, // scroll speed
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }
  }, []);

  return (
    <ProjectsWrapper id="work" ref={WrapperRef}>
      <ProjectCard
        title="Get Into Gizz"
        description="A website to explore genreconfused Australian rock band, King Gizzard and the Lizard Wizard."
        url="/work/get-into-gizz"
      />
      <ProjectCard
        title="MovieBot"
        description="An AI-powered movie recommendation app."
        url="/work/moviebot"
      />
      <ProjectCard
        title="Icon Voter"
        description="An app to allow icon pack customers to vote on which icons they'd like to see next."
        url="/work/icon-voter"
      />
      <ProjectCard
        secondary
        title="Icon Packs"
        description="Over one thousand icons created over the course of several years, for use in game development"
        url="/work/icon-packs"
      />
    </ProjectsWrapper>
  );
}
