// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    icon: JSX.Element;
    primary: string;
    primaryHover: string;
    textHighContrast: string;
    textMidContrast: string;
    textLowContrast: string;
    textSearch: string;
    bg: string;
    bgSecondary: string;
    themeButtonHover: string;
  }
}
