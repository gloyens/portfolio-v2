import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const NavbarWrapper = styled("nav", {
  css: css.NavbarWrapper,
  variants: {
    visible: {
      true: css.Visible,
    },
  },
});

export const Title = styled("p", {
  css: css.Title,
});

export const Links = styled("ul", {
  css: css.Links,
});
