import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledButton = styled.button`
  background: #e2f063;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
`;

export default Button;
