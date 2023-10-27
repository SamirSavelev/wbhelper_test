import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  mainYellow: '#ffde31',
  white: '#FFF',
  lightBlue: '#ECF1F7',
  lightGray: '#dddfe0',
  shadow:
    '0px 0px 0px 0px rgba(38, 43, 48, 0.02) ,0px 0px 0px 0px rgba(38, 43, 48, 0.02), 0px 0px 1px 0px rgba(38, 43, 48, 0.02), 0px 0px 1px 0px rgba(38, 43, 48, 0.01), 0px 0px 1px 0px rgba(38, 43, 48, 0), 0px 0px 1px 0px rgba(38, 43, 48, 0)',
  text: {
    black: '#121212',
    gray: '#777',
  },
  extraLightGray: '#F3F4F5',
  button: {
    primary: {
      default: {
        text: '#121212',
        shadow: 'none',
        border: 'transparent',
        background: '#FFDE31',
      },
      hover: {
        text: '#121212',
        shadow: 'none',
        border: 'transparent',
        background: '#FFDE31',
      },
      pressed: {
        text: '#121212',
        shadow: 'none',
        border: 'transparent',
        background: '#FFDE31',
      },
      disabled: {
        text: '#121212',
        shadow: 'none',
        border: 'transparent',
        background: '#FFDE31',
      },
    },
    outline: {
      default: {
        text: '#EBEBEB',
        shadow: 'none',
        border: '#333',
        background: 'transparent',
      },
      hover: {
        text: '#EBEBEB',
        shadow: 'none',
        border: '#333',
        background: 'transparent',
      },
      pressed: {
        text: '#EBEBEB',
        shadow: 'none',
        border: '#333',
        background: 'transparent',
      },
      disabled: {
        text: '#EBEBEB',
        shadow: 'none',
        border: '#333',
        background: 'transparent',
      },
    },
  },
};

export default theme;
