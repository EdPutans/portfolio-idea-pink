import * as colors from "./colors";
// import { EdTheme } from "styled-components";

export const theme = {
  TEXT_BLACK: colors.TEXT_BLACK,
  PINK: colors.PINK,
  LIGHT_BLUE: colors.LIGHT_BLUE,
  WHITE: colors.WHITE,
  LIGHTEST_GREY: colors.LIGHTEST_GREY,
  GREY: colors.GREY,
  DARK_GREY: colors.DARK_GREY,
};

export const proTheme = {
  borderRadius: "0px",
  colors: {
    main: colors.GREY,
    light: colors.LIGHTEST_GREY,
    supplement: colors.DARK_GREY,
    darkText: colors.TEXT_BLACK,
    lightText: colors.DARK_GREY,
  },
};
export const funTheme = {
  borderRadius: "8px",
  colors: {
    main: colors.PINK,
    light: colors.LIGHTEST_GREY,
    supplement: colors.LIGHT_BLUE,
    darkText: colors.TEXT_BLACK,
    lightText: colors.DARK_GREY,
  },
};

export type ThemeType = typeof proTheme; // This is the type definition for my theme object.
