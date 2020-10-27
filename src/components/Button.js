import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  color: red;
  border: none;
  background-color: gray;
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
