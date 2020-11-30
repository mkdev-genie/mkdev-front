import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// NOTE: 1rem = 16px
const theme = {
  color: {
    primary: '#E2F063',
    secondary: '#553FF5',
    tertiary: '#8BE8A9',
    dark: '#000',
    gray: 'gray',
    light: '#FFF',
  },
  spacing: {
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2rem',
    5: '2.5rem',
  },
  fonts: ['Noto Sans KR', 'sans-serif'],
  fontSize: {
    sm: '0.825rem',
    md: '1.125rem',
    lg: '1.5rem',
    xl: '1.875rem',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
