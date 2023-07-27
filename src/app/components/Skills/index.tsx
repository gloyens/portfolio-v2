import { SkillsWrapper, Info, SkillsList, Header } from "./styles";

export default function Skills() {
  return (
    <SkillsWrapper id="skills">
      <Info>
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem debitis
          asperiores officiis maxime provident.
        </p>
      </Info>
      <SkillsList>
        <Header>Frontend</Header>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>Sass</li>
        <li>CSS Components</li>
        <Header>Backend</Header>
        <li>Docker</li>
        <li>CMS (Wagtail, Directus, Contentful)</li>
        <li>Vercel KV</li>
        <li>Python</li>
        <li>Django</li>
        <li>Google Cloud Platform</li>
        <Header>Other</Header>
        <li>Google Analytics</li>
        <li>Stable Diffusion</li>
        <li>ChatGPT</li>
        <li>Git</li>
        <li>Jira</li>
        <li>Adobe Illustrator</li>
      </SkillsList>
    </SkillsWrapper>
  );
}
