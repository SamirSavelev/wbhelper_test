import 'styled-components';

interface ButtonStyles {
  text: string;
  shadow: string;
  border: string;
  background: string;
}
interface ButtonPattern {
  primary: ButtonStates;
  outline: ButtonStates;
}

interface ButtonStates {
  default: ButtonStyles;
  hover: ButtonStyles;
  pressed: ButtonStyles;
  disabled: ButtonStyles;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mainYellow: string;
    white: string;
    shadow: string;
    lightBlue: string;
    lightGray: string;
    extraLightGray: string;
    text: {
      black: string;
      gray: string;
    };
    button: ButtonPattern;
  }
}
