const TEXT_BLACK = "#505050";
const PINK = "#D369B6";
const LIGHT_BLUE = "#69C0D3";
const WHITE = "#FFFFFF";
const LIGHTEST_GREY = "#E5E5E5";
const GREY = "#C4C4C4";
const DARK_GREY = "#575757";

export const darkTheme: ThemeType = {
  borderRadius: "0px",
  colours: {
    main: DARK_GREY,
    light: GREY,
    supplement: DARK_GREY,
    textPrimary: WHITE,
    textSecondary: LIGHTEST_GREY,
  },
};
export const lightTheme: ThemeType = {
  borderRadius: "8px",
  colours: {
    main: PINK,
    light: LIGHTEST_GREY,
    supplement: LIGHT_BLUE,
    textPrimary: TEXT_BLACK,
    textSecondary: LIGHTEST_GREY,
  },
};

export type ThemeType = {
  borderRadius: `${number}px`;
  colours: {
    main: string;
    light: string;
    supplement: string;
    textPrimary: string;
    textSecondary: string;
  };
};
