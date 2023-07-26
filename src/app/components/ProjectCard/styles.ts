import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const ProjectCardWrapper = styled("a", {
  css: css.ProjectCardWrapper,
  variants: {
    secondary: {
      true: css.CardSecondary,
    },
    visible: {
      true: css.Visible,
    },
  },
});
