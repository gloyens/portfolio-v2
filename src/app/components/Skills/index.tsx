import { SkillsWrapper, Info, SkillsList, Header } from "./styles";

export default function Skills() {
  return (
    <SkillsWrapper id="skills">
      <Info>
        <h2>Skills</h2>
        <p>
          Here are some tools I&apos;ve been using recently. While I&apos;m most comfortable with these right now, my day-to-day stack is pretty changeable - so it&apos;s not an exhaustive list.
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
        <li>Redis</li>
        <li>Python</li>
        <li>Django</li>
        <li>Google Cloud Platform</li>
        <Header>Other</Header>
        <li>Google Analytics</li>
        <li>Stable Diffusion</li>
        <li>ChatGPT</li>
        <li>Git (Github & Gerrit)</li>
        <li>Jira</li>
        <li>Adobe Illustrator</li>
      </SkillsList>
    </SkillsWrapper>
  );
}
