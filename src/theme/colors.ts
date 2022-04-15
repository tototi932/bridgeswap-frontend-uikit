import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#f7ad19",
  primaryBright: "#EC836E",
  primaryDark: "#b92608",
  secondary: "#330099",
  success: "#faca6b",
  warning: "#FFB237",
};


export const additionalColors = {
  binance: "#0773C9",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#09092b",
  backgroundDisabled: "#9595e9",
  backgroundAlt: "#080844",
  cardBorder: "#facdc3",
  contrast: "#311b17",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  bright: "#ffffff",
  blue: "#17D2FB",
  input: "#ffffff",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#ffffff",
  textDisabled: "#dad5d5",
  textSubtle: "#8c8c8c",
  disabled: "#E9EAEB",
  menuHover: "#F7AD19",
  gradients: {
    bluePurple: "linear-gradient(90.82deg, #FA00FF -73.84%, #17D2FB 141.1%)",
    bubblegum: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
    inverseBubblegum: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
    cardHeader: "linear-gradient(111.68deg, #505050 0%, #979797 100%)",
    blue: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
    violet: "linear-gradient(180deg, #f89b88 0%, #fd8a73 100%)",
    violetAlt: "linear-gradient(180deg, #d39487 0%, #ce7766 100%)",
    gold: "linear-gradient(180deg, #0773C9 0%, #0a82b9 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#202136",
  background: "#202136",
  backgroundDisabled: "#9595e9",
  backgroundAlt: "#27262c",
  cardBorder: "#e44222",
  contrast: "#FFFFFF",
  dropdown: "#2c2624",
  dropdownDeep: "#411209",
  invertedContrast: "#662a1e",
  bright: "#ffffff",
  blue: "#17D2FB",
  input: "#7a534c",
  inputSecondary: "#b18179",
  primaryDark: "#c73316",
  tertiary: "#8a6058",
  text: "#ffffff",
  textDisabled: "#745a55",
  textSubtle: "#fc7358",
  disabled: "#524B63",
  menuHover: "#F7AD19",
  gradients: {
    bluePurple: "linear-gradient(90.82deg, #FA00FF -73.84%, #17D2FB 141.1%)",
    bubblegum: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
    inverseBubblegum: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
    cardHeader: "linear-gradient(166.77deg, #a75342 0%, #8d2416 100%)",
    blue: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
    violet: "linear-gradient(180deg, #e93e1b 0%, #fa7054 100%)",
    violetAlt: "linear-gradient(180deg, #99311c 0%, #d84528 100%)",
    gold: "linear-gradient(180deg, #0773C9 0%, #0a82b9 100%)",
  },
};
