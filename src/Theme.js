import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#E2F063',
    secondary: '#553FF5',
    tertiary: '#8BE8A9',
    dark: '#000',
    light: '#FFF',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSize: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
