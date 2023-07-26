import ProjectCard from "@/app/components/ProjectCard";
import { ProjectsWrapper } from "./styles";

export default function Projects() {
  return (
    <ProjectsWrapper id="work">
      <ProjectCard
        title="Get Into Gizz"
        description="A website to explore genreconfused Australian rock band, King Gizzard and the Lizard Wizard."
        url="#"
      />
      <ProjectCard
        title="MovieBot"
        description="An AI-powered movie recommendation app."
        url="#"
      />
      <ProjectCard
        title="Icon Voter"
        description="An app to allow icon pack customers to vote on which icons they'd like to see next."
        url="#"
      />
      <ProjectCard
        secondary
        title="Icon Packs"
        description="Over one thousand icons created over the course of several years, for use in game development"
        url="#"
      />
    </ProjectsWrapper>
  );
}
