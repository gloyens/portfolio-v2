import Button from "@/app/components/Button";
import { HeroWrapper } from "./styles";

export default function Hero() {
  return (
    <HeroWrapper>
      <h1>George Gloyens</h1>
      <p>
        Combining design and code to create beautiful experiences from the ground up. Always learning something new.
      </p>
      <Button
        text="Contact me on LinkedIn"
        url="https://www.linkedin.com/in/gloyens"
        external={true}
      />
    </HeroWrapper>
  );
}
