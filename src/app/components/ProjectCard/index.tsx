import { ProjectCardWrapper } from "./styles";

export interface Props {
  title: string;
  description: string;
  url: string;
}

export default function Projects({ title, description, url }: Props) {
  return (
    <ProjectCardWrapper id="projects" href={url}>
      <h2>{title}</h2>
      <p>{description}</p>
    </ProjectCardWrapper>
  );
}
