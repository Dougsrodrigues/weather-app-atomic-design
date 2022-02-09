import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      secondary: string;
      ice: string;
      text_primary: string;
      text_secondary: string;
    };
    fonts: {
      families: {
        light: string;
        regular: string;
        medium: string;
        semibold: string;
      };
      sizes: {
        extraLarge: number;
        extraMedium: number;
        extra: number;
        large: number;
        medium: number;
        small: number;
      };
      lineHeight: {
        large: number;
        medium: number;
        small: number;
      };
    };
  }
}
