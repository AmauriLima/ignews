import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      gray: {
        100: string,
        300: string,
        800: string,
        900: string,
      },
      cyan: {
        500: string,
      },
      yellow: {
        500: string,
      }
    }
  }
}
