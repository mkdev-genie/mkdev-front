import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.node.isRequired,
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
  &:hover {
    background: yellow;
  }
`;

export default Button;
