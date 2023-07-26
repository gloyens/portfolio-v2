import { ButtonWrapper } from "./styles";

export interface Props {
  text: string;
  url: string;
  external?: boolean;
}

export default function Button({ text, url, external }: Props) {
  return (
    <>
      <ButtonWrapper href={url} target={external ? "_blank" : ""}>
        {text}
      </ButtonWrapper>
    </>
  );
}
