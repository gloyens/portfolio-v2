import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const ButtonWrapper = styled("a", {
  css: css.ButtonWrapper,
});

export const MiniButtonWrapper = styled("a", {
  css: css.MiniButtonWrapper,
  variants: {
    visible: {
      false: css.MiniButtonHidden,
    },
  },
});