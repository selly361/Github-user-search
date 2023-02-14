import { MoonIcon, SunIcon } from "assets";

const theme = {
  light: {
    icon: <SunIcon />,
    primary: "#0079ff",
    primaryHover: "#60abff",
    textHighContrast: "#2b3442",
    textMidContrast: "#4b6a9b",
    textLowContrast: "#697c9a",
    textSearch: "#222731",
    bg: "#f6f8ff",
    bgSecondary: "#fefefe",
    themeButtonHover: "#222731",
  },

  dark: {
    icon: <MoonIcon />,
    primary: "#0079ff",
    primaryHover: "#60abff",
    textHighContrast: "#fff",
    textMidContrast: "#ffff",
    textLowContrast: "#fff",
    textSearch: "#fff",
    bg: "#141d2f",
    bgSecondary: "#1e2a47",
    themeButtonHover: "#90a4d4",
  },
};


export default theme;