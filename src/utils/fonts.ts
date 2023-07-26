import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import {  } from "next/font/google";

export const editorial = localFont({
  variable: "--editorial",
  src: "../../public/fonts/PPEditorialNew-Regular.otf",
  fallback: ["serif"],
});

export const editorialItalic = localFont({
  variable: "--editorial-italic",
  src: "../../public/fonts/PPEditorialNew-Italic.otf",
  fallback: ["serif"],
});

export const editorialULItalic = localFont({
  variable: "--editorial-ul-italic",
  src: "../../public/fonts/PPEditorialNew-UltralightItalic.otf",
  fallback: ["serif"],
});

export const manrope = Manrope({
  variable: "--manrope",
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const fontClasses = [
  editorial.variable,
  editorialItalic.variable,
  editorialULItalic.variable,
  manrope.variable,
].join(" ");
