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

export const TagList = styled("ul", {
  css: css.TagList,
});

export const Links = styled("ul", {
  css: css.Links,
});

export const Link = styled("a", {
  css: css.Link,
});

export const Text = styled("span", {
  css: css.Text,
});

export const Icon = styled("span", {
  css: css.Icon,
});