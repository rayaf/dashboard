import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme{
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      gray: string;
      black: string;

      success: string;
      info: string;
      warning: string;
    }
  }
}