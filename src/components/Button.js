import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledButton = styled.button`
  width: 335px;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background: #e2f063;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;

export default Button;
