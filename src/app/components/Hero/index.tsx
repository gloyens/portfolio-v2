import Button from "@/app/components/Button";
import { HeroWrapper } from "./styles";

export default function Hero() {
  return (
    <HeroWrapper>
      <h1>George Gloyens</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, illo
        commodi! Iste, nam eveniet odit voluptas labore illo asperiores.
      </p>
      <Button
        text="Contact me on LinkedIn"
        url="https://www.linkedin.com/in/gloyens"
        external={true}
      />
    </HeroWrapper>
  );
}
